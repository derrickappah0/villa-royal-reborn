import { NextRequest, NextResponse } from 'next/server'
import { createContactMessage, getContactMessages } from '@/lib/database/queries'
import { sendContactMessageNotification } from '@/lib/email-service'
import { z } from 'zod'

const contactMessageSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactMessageSchema.parse(body)

    const message = await createContactMessage({
      ...validatedData,
      status: 'unread',
    })

    // Send email notification to admin
    try {
      await sendContactMessageNotification(validatedData)
      console.log('Contact message email notification sent successfully')
    } catch (emailError) {
      console.error('Failed to send contact message email notification:', emailError)
      // Don't fail the message creation if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        data: message,
        message: 'Message sent successfully!' 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }

    console.error('Error creating contact message:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const messages = await getContactMessages()
    
    return NextResponse.json(
      { 
        success: true, 
        data: messages 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch contact messages' 
      },
      { status: 500 }
    )
  }
}
