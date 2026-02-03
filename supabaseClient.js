import { createClient } from '@supabase/supabase-js'

// 따옴표 '' 안에 아까 복사한 대표님 거 넣으세요!
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)