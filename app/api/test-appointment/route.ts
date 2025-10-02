import { createClient } from '@/lib/supabase/server'

export async function POST() {
  try {
    const supabase = createClient()
    
    // Test inserting a simple appointment
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+233123456789',
        preferred_date: '2024-10-15',
        preferred_time: '10:00',
        message: 'Test appointment',
        status: 'pending'
      })
      .select()
      .single()

    if (error) {
      return Response.json(
        { 
          success: false, 
          message: 'Database insert failed', 
          error: error.message,
          details: error
        },
        { status: 500 }
      )
    }

    return Response.json(
      { 
        success: true, 
        message: 'Appointment created successfully!',
        data: data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Test appointment error:', error)
    return Response.json(
      { 
        success: false, 
        message: 'Test failed', 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
