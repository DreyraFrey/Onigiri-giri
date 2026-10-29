// Auth guard - redirects to login if not authenticated
(async function() {
  // Wait for ogAuth to be ready
  while (!window.ogAuth) {
    await new Promise(r => setTimeout(r, 50));
  }
  
  const { data: { user } } = await window.ogAuth.supabase.auth.getUser();
  if (!user && !window.location.pathname.includes('login.html')) {
    window.location.href = 'login.html';
    return;
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = async (e) => {
      e.preventDefault();
      await window.ogAuth.signOut();
      window.location.href = 'login.html';
    };
  }
})();
