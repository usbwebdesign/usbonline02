// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'; // <--- Verifica que diga 'supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);