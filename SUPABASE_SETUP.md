# Supabase Backend Setup

This document provides instructions for setting up the Supabase backend for Nandy's Villa Royal.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Node.js and npm installed
3. Git installed

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `nandys-villa-royal`
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
5. Click "Create new project"

### 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Anon (public) key
   - Service role key (keep this secret!)

### 3. Set Up Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional: Database URL for direct connections
DATABASE_URL=your_database_url_here
```

### 4. Set Up the Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql`
3. Paste it into the SQL Editor
4. Click "Run" to execute the schema

This will create:
- `appointments` table for booking appointments
- `build_requests` table for build-for-me requests
- `contact_messages` table for contact form submissions
- `payment_plans` table for payment plan management
- Proper indexes and triggers
- Row Level Security policies

### 5. Verify the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the API endpoints:
   - `GET /api/payment-plans` - Should return the default payment plans
   - `POST /api/appointments` - Test appointment booking
   - `POST /api/build-requests` - Test build request submission
   - `POST /api/contact` - Test contact form submission

### 6. Database Tables Overview

#### Appointments Table
- Stores appointment booking data
- Fields: id, name, email, phone, preferred_date, preferred_time, message, property_interest, status
- Status options: pending, confirmed, cancelled, completed

#### Build Requests Table
- Stores custom build requests
- Fields: id, name, email, phone, budget, location, property_type, bedrooms, bathrooms, special_requirements, timeline, status
- Status options: pending, in_review, approved, rejected

#### Contact Messages Table
- Stores contact form submissions
- Fields: id, name, email, phone, subject, message, status
- Status options: unread, read, replied

#### Payment Plans Table
- Stores payment plan configurations
- Fields: id, name, description, starting_price, deposit_percentage, interest_rate, duration_months, payment_frequency, features, is_active
- Pre-populated with starter plans

### 7. Security Notes

- Row Level Security (RLS) is enabled on all tables
- Public users can only insert data and read active payment plans
- Authenticated users can read all data (for admin purposes)
- Service role key should be kept secret and only used server-side

### 8. API Endpoints

#### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments (admin)

#### Build Requests
- `POST /api/build-requests` - Submit build request
- `GET /api/build-requests` - Get all build requests (admin)

#### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all contact messages (admin)

#### Payment Plans
- `GET /api/payment-plans` - Get active payment plans
- `POST /api/payment-plans` - Create new payment plan (admin)

### 9. Next Steps

1. Set up authentication if needed for admin access
2. Configure email notifications for form submissions
3. Set up monitoring and logging
4. Consider adding file upload functionality for images
5. Implement admin dashboard for managing submissions

## Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure `.env.local` is in the project root and restart the dev server
2. **Database connection errors**: Verify your Supabase credentials are correct
3. **RLS policy errors**: Check that your policies allow the operations you're trying to perform
4. **CORS issues**: Supabase handles CORS automatically, but check your API routes

### Getting Help

- Check the [Supabase documentation](https://supabase.com/docs)
- Review the [Next.js API routes documentation](https://nextjs.org/docs/api-routes/introduction)
- Check the console for error messages
