import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dajxrhxxcyiovhqotsjt.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhanhyaHh4Y3lpb3ZocW90c2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMjUyNzYsImV4cCI6MjA3NDgwMTI3Nn0.6afkQQpcr-J8pTiuUZRlCBdNi9reVoSn3wsKrpxJjEI'

  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}
