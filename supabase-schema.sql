-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    message TEXT,
    property_interest VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'))
);

-- Create build_requests table
CREATE TABLE IF NOT EXISTS build_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    budget DECIMAL(12,2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    property_type VARCHAR(100) NOT NULL,
    bedrooms INTEGER NOT NULL CHECK (bedrooms > 0),
    bathrooms INTEGER NOT NULL CHECK (bathrooms > 0),
    special_requirements TEXT,
    timeline VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected'))
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied'))
);

-- Create payment_plans table
CREATE TABLE IF NOT EXISTS payment_plans (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    starting_price DECIMAL(12,2) NOT NULL,
    deposit_percentage DECIMAL(5,2) NOT NULL CHECK (deposit_percentage >= 0 AND deposit_percentage <= 100),
    interest_rate DECIMAL(5,2) NOT NULL CHECK (interest_rate >= 0),
    duration_months INTEGER NOT NULL CHECK (duration_months > 0),
    payment_frequency VARCHAR(20) NOT NULL CHECK (payment_frequency IN ('monthly', 'quarterly', 'yearly')),
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT true
);

-- Insert default payment plans
INSERT INTO payment_plans (name, description, starting_price, deposit_percentage, interest_rate, duration_months, payment_frequency, features, is_active) VALUES
('Starter Basic', 'Perfect for first-time buyers with affordable monthly payments', 400000.00, 25.00, 6.00, 30, 'monthly', '["Perfect for first-time buyers", "Low initial deposit", "Affordable monthly payments", "Basic support"]', true),
('Starter Plus', 'Lower initial deposit with better interest rate', 400000.00, 20.00, 5.50, 36, 'monthly', '["Lower initial deposit", "Better interest rate", "Extended payment period", "Priority support"]', true),
('Starter Premium', 'Best interest rate with fastest completion', 400000.00, 30.00, 4.50, 24, 'monthly', '["Best interest rate", "Faster completion", "Premium finishes included", "Dedicated support"]', true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);

CREATE INDEX IF NOT EXISTS idx_build_requests_created_at ON build_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_build_requests_status ON build_requests(status);
CREATE INDEX IF NOT EXISTS idx_build_requests_email ON build_requests(email);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

CREATE INDEX IF NOT EXISTS idx_payment_plans_is_active ON payment_plans(is_active);
CREATE INDEX IF NOT EXISTS idx_payment_plans_starting_price ON payment_plans(starting_price);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_build_requests_updated_at BEFORE UPDATE ON build_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payment_plans_updated_at BEFORE UPDATE ON payment_plans
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_plans ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust based on your needs)
-- For now, allowing all operations for authenticated users
-- You may want to restrict this based on your requirements

-- Allow public to insert appointments
CREATE POLICY "Allow public to insert appointments" ON appointments
    FOR INSERT WITH CHECK (true);

-- Allow public to insert build requests
CREATE POLICY "Allow public to insert build requests" ON build_requests
    FOR INSERT WITH CHECK (true);

-- Allow public to insert contact messages
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

-- Allow public to read payment plans
CREATE POLICY "Allow public to read payment plans" ON payment_plans
    FOR SELECT USING (is_active = true);

-- Allow authenticated users to read all data (for admin purposes)
CREATE POLICY "Allow authenticated users to read appointments" ON appointments
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to read build requests" ON build_requests
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to read contact messages" ON contact_messages
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to read all payment plans" ON payment_plans
    FOR SELECT USING (auth.role() = 'authenticated');
