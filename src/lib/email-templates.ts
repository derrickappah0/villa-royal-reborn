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

// Email template for appointment notifications (to admin)
export function getAppointmentNotificationEmail(data: AppointmentData) {
  return {
    subject: `New Appointment Booking - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🏠 New Appointment Booking</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nandy's Villa Royal</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #333; margin-top: 0;">Appointment Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
            <h3 style="color: #667eea; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #667eea;">${data.phone}</a></p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
            <h3 style="color: #28a745; margin-top: 0;">Appointment Schedule</h3>
            <p><strong>Preferred Date:</strong> ${new Date(data.preferred_date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Preferred Time:</strong> ${data.preferred_time}</p>
            ${data.property_interest ? `<p><strong>Interest:</strong> ${data.property_interest}</p>` : ''}
          </div>
          
          ${data.message ? `
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h3 style="color: #ffc107; margin-top: 0;">Additional Message</h3>
            <p style="font-style: italic;">"${data.message}"</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">
              Please contact the customer to confirm the appointment.
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
New Appointment Booking - ${data.name}

Customer Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Appointment Details:
- Date: ${data.preferred_date}
- Time: ${data.preferred_time}
${data.property_interest ? `- Interest: ${data.property_interest}` : ''}

${data.message ? `Message: ${data.message}` : ''}

Please contact the customer to confirm the appointment.
    `
  }
}

// Email template for build request notifications (to admin)
export function getBuildRequestNotificationEmail(data: BuildRequestData) {
  return {
    subject: `New Build Request - ${data.name} (Budget: GHS ${data.budget.toLocaleString()})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🏗️ New Build Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nandy's Villa Royal</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #333; margin-top: 0;">Build Request Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #ff6b6b;">
            <h3 style="color: #ff6b6b; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #ff6b6b;">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #ff6b6b;">${data.phone}</a></p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
            <h3 style="color: #28a745; margin-top: 0;">Project Details</h3>
            <p><strong>Budget:</strong> GHS ${data.budget.toLocaleString()}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Property Type:</strong> ${data.property_type}</p>
            <p><strong>Bedrooms:</strong> ${data.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${data.bathrooms}</p>
            <p><strong>Timeline:</strong> ${data.timeline}</p>
          </div>
          
          ${data.special_requirements ? `
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h3 style="color: #ffc107; margin-top: 0;">Special Requirements</h3>
            <p style="font-style: italic;">"${data.special_requirements}"</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">
              Please review and respond to this build request.
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
New Build Request - ${data.name}

Customer Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Project Details:
- Budget: GHS ${data.budget.toLocaleString()}
- Location: ${data.location}
- Property Type: ${data.property_type}
- Bedrooms: ${data.bedrooms}
- Bathrooms: ${data.bathrooms}
- Timeline: ${data.timeline}

${data.special_requirements ? `Special Requirements: ${data.special_requirements}` : ''}

Please review and respond to this build request.
    `
  }
}

// Email template for contact message notifications (to admin)
export function getContactMessageNotificationEmail(data: ContactMessageData) {
  return {
    subject: `New Contact Message - ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">💬 New Contact Message</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Nandy's Villa Royal</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #333; margin-top: 0;">Message Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #4facfe;">
            <h3 style="color: #4facfe; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #4facfe;">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #4facfe;">${data.phone}</a></p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
            <h3 style="color: #28a745; margin-top: 0;">Subject</h3>
            <p><strong>${data.subject}</strong></p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <h3 style="color: #ffc107; margin-top: 0;">Message</h3>
            <p style="font-style: italic; line-height: 1.6;">"${data.message}"</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">
              Please respond to this message promptly.
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
New Contact Message - ${data.subject}

Customer Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Subject: ${data.subject}

Message: ${data.message}

Please respond to this message promptly.
    `
  }
}
