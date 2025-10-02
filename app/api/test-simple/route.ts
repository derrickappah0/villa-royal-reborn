export async function GET() {
  try {
    // Test basic environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    return Response.json(
      { 
        success: true, 
        message: 'Environment variables check',
        supabaseUrl: supabaseUrl ? 'Present' : 'Missing',
        supabaseKey: supabaseKey ? 'Present' : 'Missing',
        fullUrl: supabaseUrl
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Simple test error:', error)
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
