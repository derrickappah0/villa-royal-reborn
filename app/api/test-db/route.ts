import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    
    // Test the connection by trying to fetch from a table
    const { data, error } = await supabase
      .from('appointments')
      .select('count')
      .limit(1)

    if (error) {
      return Response.json(
        { 
          success: false, 
          message: 'Database connection failed', 
          error: error.message,
          hint: 'You need to run the SQL schema in your Supabase dashboard first'
        },
        { status: 500 }
      )
    }

    return Response.json(
      { 
        success: true, 
        message: 'Database connection successful!',
        data: data
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Test connection error:', error)
    return Response.json(
      { 
        success: false, 
        message: 'Connection test failed', 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
