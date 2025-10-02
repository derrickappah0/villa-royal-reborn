import { NextRequest, NextResponse } from 'next/server'
import { createBuildRequest, getBuildRequests } from '@/lib/database/queries'
import { sendBuildRequestNotification } from '@/lib/email-service'
import { z } from 'zod'

const buildRequestSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  budget: z.number().min(0, 'Budget must be a positive number'),
  location: z.string().min(1, 'Location is required'),
  property_type: z.string().min(1, 'Property type is required'),
  bedrooms: z.number().min(1, 'Number of bedrooms must be at least 1'),
  bathrooms: z.number().min(1, 'Number of bathrooms must be at least 1'),
  special_requirements: z.string().optional(),
  timeline: z.string().min(1, 'Timeline is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = buildRequestSchema.parse(body)

    const buildRequest = await createBuildRequest({
      ...validatedData,
      status: 'pending',
    })

    // Send email notification to admin
    try {
      await sendBuildRequestNotification(validatedData)
      console.log('Build request email notification sent successfully')
    } catch (emailError) {
      console.error('Failed to send build request email notification:', emailError)
      // Don't fail the request creation if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        data: buildRequest,
        message: 'Build request submitted successfully!' 
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

    console.error('Error creating build request:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit build request. Please try again.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const buildRequests = await getBuildRequests()
    
    return NextResponse.json(
      { 
        success: true, 
        data: buildRequests 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching build requests:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch build requests' 
      },
      { status: 500 }
    )
  }
}
