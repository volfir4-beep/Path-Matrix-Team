
function navigateTo(targetPage, clickedButton) {
  // 1. Hide the Welcome Page completely since the user made a choice
  document.getElementById('welcome-view').classList.add('hidden');

  // 2. Hide both functional views first to reset the display
  document.getElementById('optimization-view').classList.add('hidden');
  document.getElementById('ridesharing-view').classList.add('hidden');

  // 3. Show ONLY the specific page section the user requested
  document.getElementById(targetPage + '-view').classList.remove('hidden');

  // 4. Remove the 'active' (enlarged) styling from ALL navbar buttons
  const allButtons = document.querySelectorAll('.nav-btn');
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // 5. Add the 'active' class to the specific button that was clicked
  clickedButton.classList.add('active');
}
