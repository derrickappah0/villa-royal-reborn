import { NextRequest, NextResponse } from 'next/server'
import { getPaymentPlans, createPaymentPlan } from '@/lib/database/queries'
import { z } from 'zod'

const paymentPlanSchema = z.object({
  name: z.string().min(1, 'Plan name is required'),
  description: z.string().min(1, 'Description is required'),
  starting_price: z.number().min(0, 'Starting price must be a positive number'),
  deposit_percentage: z.number().min(0).max(100, 'Deposit percentage must be between 0 and 100'),
  interest_rate: z.number().min(0, 'Interest rate must be a positive number'),
  duration_months: z.number().min(1, 'Duration must be at least 1 month'),
  payment_frequency: z.enum(['monthly', 'quarterly', 'yearly']),
  features: z.array(z.string()).min(1, 'At least one feature is required'),
})

export async function GET() {
  try {
    const plans = await getPaymentPlans()
    
    return NextResponse.json(
      { 
        success: true, 
        data: plans 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching payment plans:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch payment plans' 
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = paymentPlanSchema.parse(body)

    const plan = await createPaymentPlan({
      ...validatedData,
      is_active: true,
    })

    return NextResponse.json(
      { 
        success: true, 
        data: plan,
        message: 'Payment plan created successfully!' 
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

    console.error('Error creating payment plan:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to create payment plan. Please try again.' 
      },
      { status: 500 }
    )
  }
}
