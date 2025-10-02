# Resend Email Integration Setup

This guide will help you set up Resend email notifications for Nandy's Villa Royal.

## Prerequisites

1. A Resend account (sign up at [resend.com](https://resend.com))
2. A verified domain (optional but recommended)

## Setup Instructions

### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get Your API Key

1. In your Resend dashboard, go to **API Keys**
2. Click **"Create API Key"**
3. Give it a name like "Nandy's Villa Royal"
4. Select **"Sending access"**
5. Click **"Add"**
6. Copy the API key (starts with `re_`)

### Step 3: Set Up Domain (Optional but Recommended)

1. In your Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `nandysvillaroyal.com`)
4. Follow the DNS setup instructions
5. Wait for verification (can take up to 24 hours)

### Step 4: Update Environment Variables

Update your `.env.local` file with these values:

```env
# Resend Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=noreply@nandysvillaroyal.com
ADMIN_EMAIL=your_email@example.com
```

**Important:**
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- Replace `your_email@example.com` with the email where you want to receive notifications
- If you haven't set up a custom domain, use `onboarding@resend.dev` as the from email

### Step 5: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your website and book an appointment
3. Check your email for the notification
4. Check the server logs for any errors

## Email Templates

The system includes beautiful HTML email templates for:

### 🏠 Appointment Notifications
- Customer information
- Preferred date and time
- Property interest
- Additional messages

### 🏗️ Build Request Notifications
- Customer details
- Project specifications
- Budget information
- Timeline requirements

### 💬 Contact Message Notifications
- Customer information
- Subject and message
- Formatted for easy reading

## Troubleshooting

### Common Issues

1. **"API key not found" error**
   - Make sure your API key is correct in `.env.local`
   - Restart your development server after updating environment variables

2. **"Domain not verified" error**
   - Use `onboarding@resend.dev` as the from email until your domain is verified
   - Or wait for domain verification to complete

3. **Emails not being received**
   - Check your spam folder
   - Verify the admin email address is correct
   - Check the server logs for error messages

4. **Rate limiting**
   - Free Resend accounts have limits (100 emails/day)
   - Upgrade to a paid plan if needed

### Testing Without Domain

If you don't have a custom domain yet, update your environment variables:

```env
RESEND_FROM_EMAIL=onboarding@resend.dev
```

This will use Resend's default sending domain for testing.

## Features

✅ **Appointment Booking Notifications**
- Instant email when someone books an appointment
- Beautiful HTML templates with customer details
- Includes preferred date, time, and contact information

✅ **Build Request Notifications**
- Email alerts for new build requests
- Complete project specifications
- Budget and timeline information

✅ **Contact Form Notifications**
- Immediate alerts for contact messages
- Subject and message content
- Customer contact details

✅ **Error Handling**
- Email failures don't break form submissions
- Detailed error logging for debugging
- Graceful fallbacks

## Next Steps

1. Set up your Resend account
2. Add your API key to `.env.local`
3. Update the admin email address
4. Test the integration
5. Consider setting up a custom domain for better deliverability

## Support

- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [https://resend.com/support](https://resend.com/support)
