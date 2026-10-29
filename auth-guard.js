// Auth guard - redirects to login if not authenticated
(async function() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user && !window.location.pathname.includes('login.html')) {
    window.location.href = 'login.html';
  }
  
  // Update logout button
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      await supabase.auth.signOut();
      window.location.href = 'login.html';
    };
  }
  
  // Show user email in nav if logged in
  const authLink = document.getElementById('auth-link');
  if (authLink && user) {
    authLink.textContent = 'Logout';
    authLink.href = '#';
    authLink.id = 'logout-btn';
    authLink.onclick = async (e) => {
      e.preventDefault();
      await supabase.auth.signOut();
      window.location.href = 'login.html';
    };
  }
})();
