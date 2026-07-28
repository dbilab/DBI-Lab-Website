---
title: Research
nav:
  order: 1
  tooltip: Published works
---

<style>
/* 1. THEME MODE STYLES (Activated when ?theme=true in URL) */
body.is-theme-filtered #research-search-area {
  display: none !important;
}

body.is-theme-filtered mark {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
}

/* 2. GENERAL STYLES */
#research-list-container h3 {
  margin-top: 40px;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 10px;
}

/* Hide search info stats globally */
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

    // SCENARIO 1: THEME CLICK (Clean UI)
    if (isTheme && isFiltered) {
      document.body.classList.add('is-theme-filtered');
    } else {
      document.body.classList.remove('is-theme-filtered');
    }

    // SCENARIO 2: DUPLICATE HIDING (Keep most recent)
    const titlesSeen = new Map();
    const allCitations = document.querySelectorAll('.citation');
    
    // First, reset all citations so the check is fresh
    allCitations.forEach(cit => cit.removeAttribute('data-duplicate'));

    allCitations.forEach(cit => {
      const titleLink = cit.querySelector('.citation-title');
      if (!titleLink) return;
      
      const fullTitle = titleLink.innerText.trim().toLowerCase();
      // Group by base title (ignore preprints)
      const baseTitle = fullTitle.split(' (preprint')[0]; 
      
      const dateEl = cit.querySelector('.citation-date');
      const dateStr = dateEl ? dateEl.innerText.trim() : "01 Jan 1900";
      const timestamp = new Date(dateStr).getTime();

      if (titlesSeen.has(baseTitle)) {
        const existing = titlesSeen.get(baseTitle);
        if (timestamp > existing.timestamp) {
          // Current is newer: hide existing
          existing.element.setAttribute('data-duplicate', 'true');
          existing.element.style.setProperty('display', 'none', 'important');
          titlesSeen.set(baseTitle, { timestamp, element: cit });
        } else {
          // Current is older: hide current
          cit.setAttribute('data-duplicate', 'true');
          cit.style.setProperty('display', 'none', 'important');
        }
      } else {
        titlesSeen.set(baseTitle, { timestamp, element: cit });
      }
    });

    // SCENARIO 3: HIDE EMPTY YEARS
    if (listContainer) {
      const headings = listContainer.querySelectorAll('h3');
      let foundAnyVisible = false;

      headings.forEach(h3 => {
        let hasVisibleCitation = false;
        let nextEl = h3.nextElementSibling;

        // Scan elements between this H3 and the next H3
        while (nextEl && nextEl.tagName !== 'H3') {
          // Find the actual citation element inside the container
          const cit = nextEl.classList.contains('citation') ? nextEl : nextEl.querySelector('.citation');
          
          if (cit) {
            const isMatch = window.getComputedStyle(cit).display !== 'none';
            const isDuplicate = cit.getAttribute('data-duplicate') === 'true';
            
            // Only count as visible if it matches search AND isn't a duplicate
            if (isMatch && !isDuplicate) {
              hasVisibleCitation = true;
              foundAnyVisible = true;
            }
          }
          nextEl = nextEl.nextElementSibling;
        }

        // Apply strict hiding to the year heading
        if (isFiltered) {
          h3.style.setProperty('display', hasVisibleCitation ? 'block' : 'none', 'important');
        } else {
          h3.style.display = 'block';
        }
      });

      // Handle "No Results" message
      if (isFiltered && !foundAnyVisible) {
        listContainer.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
      } else {
        listContainer.style.display = 'block';
        if (noResults) noResults.style.display = 'none';
      }
    }
  }

  // Frequency Check (50ms) to ensure we win over the default search script
  setInterval(updateResearchView, 50);
  window.addEventListener('load', updateResearchView);
})();
</script>
