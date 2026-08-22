{
  const updateFilters = () => {
    const container = document.querySelector(".project-groups");
    if (!container) return;

    container.setAttribute("data-filtered", "true");

    // Default to 'ongoing' if no valid hash is present
    let hash = window.location.hash.replace("#", "").toLowerCase();
    const validGroups = ["ongoing", "upcoming", "closed"];

    if (!validGroups.includes(hash)) {
      hash = "ongoing";
    }

    const groups = container.querySelectorAll(".project-group");
    const navItems = document.querySelectorAll(".project-nav-item");

    groups.forEach((group) => {
      if (group.dataset.group === hash) {
        group.style.display = "block";
      } else {
        group.style.display = "none";
      }
    });

    navItems.forEach((item) => {
      // Check if the href ends with the hash
      if (item.getAttribute("href").split("#")[1] === hash) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  window.addEventListener("hashchange", updateFilters);
  window.addEventListener("load", updateFilters);
}
