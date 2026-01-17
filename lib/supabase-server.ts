import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) throw new Error('Missing SUPABASE URL. Set NEXT_PUBLIC_SUPABASE_URL in .env.local')
if (!serviceKey) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in .env.local')

export const supabaseServer = createClient(supabaseUrl, serviceKey, {
  auth: { persistSession: false },
})
