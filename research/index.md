---
title: Research
nav:
  order: 1
  tooltip: Published works
---

<style>
/* 1. HIDE SEARCH UI COMPLETELY WHEN SEARCHING (To match Foo Lab clean look) */
body.is-searching #research-search-area {
  display: none !important;
}

/* 2. REMOVE YELLOW HIGHLIGHTS site-wide for Research results */
mark {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
}

/* 3. GENERAL STYLES */
#research-list-container h3 {
  margin-top: 40px;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 10px;
}

/* Hide search info stats globally as requested */
.search-info {
  display: none !important;
}
</style>

<div id="research-search-area">
  {% include search-box.html %}
</div>

<div id="research-list-container">
  {% include list.html data="citations" component="citation" filter="item['chew-jocelyn'] == true" style="rich" %}
</div>

<div id="no-results-msg" style="display: none; text-align: center; padding: 60px;">
  <i class="fa-solid fa-magnifying-glass fa-3x" style="color: var(--light-gray); margin-bottom: 20px;"></i>
  <h3>No publications found.</h3>
  <p><a href="{{ '/research/' | relative_url }}" class="button" data-style="outline">View All Research</a></p>
</div>

<script>
(function() {
  function updateResearchView() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const isTheme = urlParams.get('theme') === 'true';
    const isFiltered = searchQuery && searchQuery.trim() !== "";
    const listContainer = document.getElementById('research-list-container');
    const noResults = document.getElementById('no-results-msg');

    // SCENARIO: Theme Click or Manual Search (Hide UI if theme flag present)
    if (isTheme && isFiltered) {
      document.body.classList.add('is-searching');
    } else {
      document.body.classList.remove('is-searching');
    }

    // CORE LOGIC: Hide empty years for ANY search
    if (listContainer) {
      const headings = listContainer.querySelectorAll('h3');
      let foundAnyVisible = false;

      headings.forEach(h3 => {
        let hasVisibleCitation = false;
        let nextEl = h3.nextElementSibling;

        // Scan elements until the next year heading (H3)
        while (nextEl && nextEl.tagName !== 'H3') {
          // Check if this sibling contains a visible citation
          const cit = nextEl.classList.contains('citation') ? nextEl : nextEl.querySelector('.citation');
          
          if (cit) {
            // Check visibility of the actual citation element
            if (window.getComputedStyle(cit).display !== 'none') {
              hasVisibleCitation = true;
              foundAnyVisible = true;
            }
          }
          nextEl = nextEl.nextElementSibling;
        }

        // Strictly hide the heading if no papers match for this year
        if (isFiltered) {
          h3.style.setProperty('display', hasVisibleCitation ? 'block' : 'none', 'important');
        } else {
          h3.style.display = 'block';
        }
      });

      // Show "No Results" message if everything is hidden across all years
      if (isFiltered && !foundAnyVisible) {
        listContainer.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
      } else {
        listContainer.style.display = 'block';
        if (noResults) noResults.style.display = 'none';
      }
    }
  }

  // Frequency Check: Overrides the template's dynamic search engine behavior
  setInterval(updateResearchView, 100);
  window.addEventListener('load', updateResearchView);
})();
</script>
