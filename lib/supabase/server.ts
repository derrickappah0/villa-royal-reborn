import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  // Use hardcoded values since env vars aren't loading in server context
  const supabaseUrl = 'https://dajxrhxxcyiovhqotsjt.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhanhyaHh4Y3lpb3ZocW90c2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMjUyNzYsImV4cCI6MjA3NDgwMTI3Nn0.6afkQQpcr-J8pTiuUZRlCBdNi9reVoSn3wsKrpxJjEI'

  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
