// Auth guard - redirects to login if not authenticated
(async function() {
  const client = window.ogAuth?.supabase || supabase;
  const { data: { user } } = await client.auth.getUser();
  if (!user && !window.location.pathname.includes('login.html')) {
    window.location.href = 'login.html';
    return;
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = async (e) => {
      e.preventDefault();
      await client.auth.signOut();
      window.location.href = 'login.html';
    };
  }
})();
