---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Meet our Team

DBI Lab is comprised of a multidisciplinary team of behavioral scientists, data scientists, and clinicians dedicated to improving cardiometabolic health through digital innovation.

<div class="team-filter-container" id="team-filter-bar" style="position: sticky; top: 100px; z-index: 1000; background: white; padding: 15px; border-radius: 50px; margin-bottom: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); display: flex; justify-content: center; gap: 10px; pointer-events: auto;">
  <button class="team-tab-btn active" data-filter="all">All Members</button>
  <button class="team-tab-btn" data-filter="pi">PI</button>
  <button class="team-tab-btn" data-filter="researchers">Researchers</button>
  <button class="team-tab-btn" data-filter="students">Students</button>
  <button class="team-tab-btn" data-filter="engagement">Engagement</button>
</div>

<div class="team-grid-container" id="team-grid">
  <div class="team-group-section" data-group="pi">
    <h2 class="team-group-title">Principal Investigator</h2>
    <div class="team-grid">
      {% include list.html data="members" component="portrait" style="card" filter="role == 'principal-investigator'" %}
    </div>
  </div>

  <div class="team-group-section" data-group="researchers">
    <h2 class="team-group-title">Researchers</h2>
    <div class="team-grid">
      {% include list.html data="members" component="portrait" style="card" filter="role == 'datascientist' or role == 'nutritionscientist' or role == 'ra' or role == 'pm'" %}
    </div>
  </div>

  <div class="team-group-section" data-group="students">
    <h2 class="team-group-title">Students & Interns</h2>
    <div class="team-grid">
      {% include list.html data="members" component="portrait" style="card" filter="role == 'phd' or role == 'undergrad' or role == 'intern'" %}
    </div>
  </div>

  <div class="team-group-section" data-group="engagement">
    <h2 class="team-group-title">Digital Engagement</h2>
    <div class="team-grid">
      {% include list.html data="members" component="portrait" style="card" filter="role == 'associates'" %}
    </div>
  </div>
</div>

{% include section.html background-alt=true %}

## Join Us

We are always looking for passionate individuals to join our lab. If you are interested in behavioral science, digital health, or AI, please reach out to us.

{% include button.html link="contact" text="Contact Us" icon="fa-solid fa-envelope" style="outline" %}
