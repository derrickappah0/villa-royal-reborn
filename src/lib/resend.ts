import { Resend } from 'resend'

// Initialize Resend with API key (only if key is provided)
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export { resend }
