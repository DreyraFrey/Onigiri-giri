const SUPABASE_URL = 'https://crtldhyqkewfumgoikch.supabase.co';
const SUPABASE_KEY = 'REDACTED';

const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function getUser() {
  const { data: { user } } = await _supabase.auth.getUser();
  return user;
}

async function signUp(email, password) {
  const { data, error } = await _supabase.auth.signUp({ email, password });
  return { data, error };
}

async function signIn(email, password) {
  const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOut() {
  await _supabase.auth.signOut();
}

async function saveProgress(progress) {
  const user = await getUser();
  if (!user) return;
  await _supabase.from('progress').upsert({
    user_id: user.id,
    data: progress,
    updated_at: new Date().toISOString()
  });
}

async function loadProgress() {
  const user = await getUser();
  if (!user) return null;
  const { data } = await _supabase.from('progress').select('data').eq('user_id', user.id).single();
  return data?.data || null;
}

window.ogAuth = { getUser, signUp, signIn, signOut, saveProgress, loadProgress, supabase: _supabase };
