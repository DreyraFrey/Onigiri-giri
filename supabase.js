const SUPABASE_URL = 'https://crtldhyqkewfumgoikch.supabase.co';
const SUPABASE_KEY = 'REDACTED';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Auth helpers
async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOut() {
  await supabase.auth.signOut();
}

// Progress sync
async function saveProgress(progress) {
  const user = await getUser();
  if (!user) return;
  await supabase.from('progress').upsert({
    user_id: user.id,
    data: progress,
    updated_at: new Date().toISOString()
  });
}

async function loadProgress() {
  const user = await getUser();
  if (!user) return null;
  const { data } = await supabase.from('progress').select('data').eq('user_id', user.id).single();
  return data?.data || null;
}

window.ogAuth = { getUser, signUp, signIn, signOut, saveProgress, loadProgress, supabase };
