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