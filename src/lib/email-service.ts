import { resend } from './resend'
import { 
  getAppointmentNotificationEmail, 
  getBuildRequestNotificationEmail,
  getContactMessageNotificationEmail 
} from './email-templates'

// Email configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@nandysvillaroyal.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nandysvillaroyal.com'

interface AppointmentData {
  name: string
  email: string
  phone: string
  preferred_date: string
  preferred_time: string
  message?: string
  property_interest?: string
}

interface BuildRequestData {
  name: string
  email: string
  phone: string
  budget: number
  location: string
  property_type: string
  bedrooms: number
  bathrooms: number
  special_requirements?: string
  timeline: string
}

interface ContactMessageData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendAppointmentNotification(appointmentData: AppointmentData) {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.log('Resend not configured - skipping email notification')
      return { success: false, message: 'Email service not configured' }
    }

    const emailTemplate = getAppointmentNotificationEmail(appointmentData)
    
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    })

    if (error) {
      console.error('Error sending appointment notification:', error)
      throw new Error(`Failed to send appointment notification: ${error.message}`)
    }

    console.log('Appointment notification sent successfully:', data?.id)
    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error('Error in sendAppointmentNotification:', error)
    throw error
  }
}

export async function sendBuildRequestNotification(buildRequestData: BuildRequestData) {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.log('Resend not configured - skipping build request email notification')
      return { success: false, message: 'Email service not configured' }
    }

    const emailTemplate = getBuildRequestNotificationEmail(buildRequestData)
    
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    })

    if (error) {
      console.error('Error sending build request notification:', error)
      throw new Error(`Failed to send build request notification: ${error.message}`)
    }

    console.log('Build request notification sent successfully:', data?.id)
    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error('Error in sendBuildRequestNotification:', error)
    throw error
  }
}

export async function sendContactMessageNotification(contactData: ContactMessageData) {
  try {
    // Check if Resend is configured
    if (!resend) {
      console.log('Resend not configured - skipping contact message email notification')
      return { success: false, message: 'Email service not configured' }
    }

    const emailTemplate = getContactMessageNotificationEmail(contactData)
    
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    })

    if (error) {
      console.error('Error sending contact message notification:', error)
      throw new Error(`Failed to send contact message notification: ${error.message}`)
    }

    console.log('Contact message notification sent successfully:', data?.id)
    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error('Error in sendContactMessageNotification:', error)
    throw error
  }
}
