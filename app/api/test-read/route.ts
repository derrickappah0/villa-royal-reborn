import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    
    // Test reading from appointments table
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .limit(1)

    if (error) {
      return Response.json(
        { 
          success: false, 
          message: 'Database read failed', 
          error: error.message,
          code: error.code,
          details: error
        },
        { status: 500 }
      )
    }

    return Response.json(
      { 
        success: true, 
        message: 'Database read successful!',
        data: data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Test read error:', error)
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
