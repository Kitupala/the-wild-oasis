import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nsinkhepcrkocialeuoh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaW5raGVwY3Jrb2NpYWxldW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzcxODAsImV4cCI6MjAwNTk1MzE4MH0.SSBG3coyuqmKrx8wN7JALbBeH9i6-ieFYjsIjHW1-D4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
