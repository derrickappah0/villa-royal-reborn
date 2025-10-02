-- Fix RLS policies for public access
-- Run this in your Supabase SQL Editor

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert appointments" ON appointments;
DROP POLICY IF EXISTS "Allow public to insert build requests" ON build_requests;
DROP POLICY IF EXISTS "Allow public to insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow public to read payment plans" ON payment_plans;

-- Create new policies for public access
CREATE POLICY "Allow public to insert appointments" ON appointments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to insert build requests" ON build_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to insert contact messages" ON contact_messages
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to read payment plans" ON payment_plans
    FOR SELECT USING (is_active = true);

-- Test the policies
SELECT 'RLS policies updated successfully' as status;
