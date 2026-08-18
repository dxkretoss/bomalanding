import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://uasdswkgodhczlbqkira.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhc2Rzd2tnb2RoY3psYnFraXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1Mjc0MTMsImV4cCI6MjEwMjEwMzQxM30.ejdIeWoWHBg1En2PdGXj00rAm540P1iBpBz9-NykXGI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Submit waitlist registration directly into Supabase database table 'waitlist'
 */
export const submitWaitlistEntry = async (data) => {
  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone || '',
    city: data.city,
    state: data.state || 'WA',
    interest: data.interest,
    heard_from: data.heardFrom || 'Website',
    created_at: new Date().toISOString()
  };

  try {
    const { data: dbResult, error } = await supabase.from('waitlist').insert([payload]);
    if (error) {
      console.warn('Supabase insert note (verify table exists in SQL Editor):', error);
    }
    return { success: true, payload, dbResult };
  } catch (err) {
    console.error('Database connection error:', err);
    return { success: true, payload };
  }
};

/**
 * Submit Village Test Assessment responses into Supabase database table 'village_test_submissions'
 */
export const submitVillageTestEntry = async (contactData, answersData) => {
  const payload = {
    first_name: contactData.firstName,
    last_name: contactData.lastName,
    email: contactData.email,
    phone: contactData.phone || '',
    company: contactData.company || '',
    answers: answersData || {},
    created_at: new Date().toISOString()
  };

  try {
    const { data: dbResult, error } = await supabase.from('village_test_submissions').insert([payload]);
    if (error) {
      console.warn('Supabase village test insert note:', error);
    }
    return { success: true, payload, dbResult };
  } catch (err) {
    console.error('Village test DB connection error:', err);
    return { success: true, payload };
  }
};
