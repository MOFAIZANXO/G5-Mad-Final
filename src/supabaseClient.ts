// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';
// Updated Supabase URL and API Key
const supabaseUrl = 'https://hzpcpbdzeudjhupscjvm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGNwYmR6ZXVkamh1cHNjanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4OTgzNjgsImV4cCI6MjA1MDQ3NDM2OH0.ly0eyOpyDk1zjihQpG4erKx-_LgwQF3req50-yOdFLA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
