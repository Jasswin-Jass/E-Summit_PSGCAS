// Setup Supabase Client
// Note: Requires @supabase/supabase-js package

/*
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
*/

export const supabaseStub = {
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null })
  })
};
