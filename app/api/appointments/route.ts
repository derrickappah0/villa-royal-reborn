import { NextRequest, NextResponse } from 'next/server'
import { createAppointment, getAppointments } from '@/lib/database/queries'
import { sendAppointmentNotification } from '@/lib/email-service'
import { z } from 'zod'

const appointmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  preferred_date: z.string().min(1, 'Preferred date is required'),
  preferred_time: z.string().min(1, 'Preferred time is required'),
  message: z.string().optional(),
  property_interest: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = appointmentSchema.parse(body)

    const appointment = await createAppointment({
      ...validatedData,
      status: 'pending',
    })

    // Send email notification to admin
    try {
      await sendAppointmentNotification(validatedData)
      console.log('Email notification sent successfully')
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the appointment creation if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        data: appointment,
        message: 'Appointment booked successfully!' 
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

    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to book appointment. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const appointments = await getAppointments()
    
    return NextResponse.json(
      { 
        success: true, 
        data: appointments 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch appointments' 
      },
      { status: 500 }
    )
  }
}
