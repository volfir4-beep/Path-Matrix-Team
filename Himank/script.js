function navigateTo(targetPage, clickedButton) {
  // 1. Hide the Welcome Page
  document.getElementById('welcome-view').classList.add('hidden');

  // 2. Hide both functional views first
  document.getElementById('optimization-view').classList.add('hidden');
  document.getElementById('ridesharing-view').classList.add('hidden');

  // 3. Show ONLY the requested section
  document.getElementById(targetPage + '-view').classList.remove('hidden');

  // 4. THE FIX: Remove 'active' from all buttons simultaneously
  const allButtons = document.querySelectorAll('.button');
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // 5. Add 'active' ONLY to the button that was just clicked
  clickedButton.classList.add('active');
}

function toggleTheme() {
    // 1. Target the top root level <html> container
    const rootElement = document.documentElement;
    
    // 2. Read the active state data attribute
    const currentTheme = rootElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch back to default Light Mode styles
        rootElement.setAttribute('data-theme', 'light');
    } else {
        // Apply the Dark Theme overrides
        rootElement.setAttribute('data-theme', 'dark');
    }
}

function goHome() {
  // 1. Reveal the Welcome Page container
  document.getElementById('welcome-view').classList.remove('hidden');

  // 2. Make sure both operational dashboards are completely hidden
  document.getElementById('optimization-view').classList.add('hidden');
  document.getElementById('ridesharing-view').classList.add('hidden');

  // 3. Grab all main dashboard option buttons
  const allButtons = document.querySelectorAll('.button');
  
  // 4. Strip away the 'active' class so they shrink back down smoothly
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });
}