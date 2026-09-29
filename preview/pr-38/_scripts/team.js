/*
  DBI Lab Team Filtering
  Handles dynamic showing/hiding of team groups based on filter selection.
*/

(function() {
  document.addEventListener('click', function(e) {
    // Check if the clicked element is one of our team buttons
    const btn = e.target.closest('.team-tab-btn');
    if (!btn) return;

    e.preventDefault();
    const filter = btn.getAttribute('data-filter');
    console.log('DBI Filter Selected:', filter);

    const buttons = document.querySelectorAll('.team-tab-btn');
    const sections = document.querySelectorAll('.team-group-section');
    const grid = document.getElementById('team-grid');

    // 1. UI: Set active button
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Logic: Display sections with forced visibility
    sections.forEach(sec => {
      const group = sec.getAttribute('data-group');
      if (filter === 'all' || group === filter) {
        sec.style.setProperty('display', 'block', 'important');
      } else {
        sec.style.setProperty('display', 'none', 'important');
      }
    });

    // 3. UX: Scroll to grid area
    if (grid) {
      const offset = grid.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });

  console.log('DBI Lab Team Script Loaded');
})();
