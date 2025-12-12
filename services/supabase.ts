import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rbkgbketurnwfeabpjpy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJia2dia2V0dXJud2ZlYWJwanB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjgwNjgsImV4cCI6MjA4MTA0NDA2OH0.9WRCrygOYoNMsiOWIjh1qhQsnySY_a8bUkb2goC2MBo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  query: string;
}

export const submitEnquiry = async (data: EnquiryData) => {
  return await supabase.from('enquiries').insert([data]);
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};