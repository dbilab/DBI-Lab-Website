---
title: SNIG
nav:
  order: 6
  tooltip: Singapore Nursing Innovation Group
---

<div class="snig-hero">
  <h1 class="snig-hero-title">Singapore Nursing Innovation Group (SNIG)</h1>
  <p class="snig-hero-subtitle">Driving healthcare innovation through student-led interdisciplinary collaboration.</p>
</div>

{% include section.html %}

<div class="snig-section">
  <div class="snig-section-header">
    <h2>Pictures & Short Bio of the Team</h2>
    <div class="header-divider"></div>
  </div>

  <div class="team-bio-wrapper">
    <p class="team-bio-text">
      <strong>Singapore Nursing Innovation Group (SNIG)</strong> is a student-led initiative by nursing undergraduates at the National University of Singapore (NUS). Guided by <strong>Dr Jocelyn Chew</strong>, this initiative aims to drive healthcare innovation through interdisciplinary collaboration.
    </p>

    <div class="team-photos-grid">
      <div class="team-photo-card">
        <img src="{{ 'images/snig/team-group-1.jpg' | relative_url }}" alt="SNIG Team Photo 1" {% include fallback.html %}>
      </div>
      <div class="team-photo-card">
        <img src="{{ 'images/snig/team-group-2.jpg' | relative_url }}" alt="SNIG Team Photo 2" {% include fallback.html %}>
      </div>
    </div>
  </div>
</div>

{% include section.html background-alt=true %}

<div class="snig-section">
  <div class="snig-section-header">
    <h2>Past Activities of SNIG</h2>
    <div class="header-divider"></div>
  </div>

  <div class="activities-grid">
    <!-- Activity 1: SHIFT Hackathon 2025 -->
    <div class="activity-card">
      <div class="activity-image-stack">
        <div class="activity-img-wrapper">
          <img src="{{ 'images/snig/shift-hackathon-2025-1.jpg' | relative_url }}" alt="SHIFT Hackathon 2025 Stage Photo" {% include fallback.html %}>
        </div>
        <div class="activity-img-wrapper">
          <img src="{{ 'images/snig/shift-hackathon-2025-2.jpg' | relative_url }}" alt="SHIFT Hackathon 2025 Poster Session" {% include fallback.html %}>
        </div>
      </div>
      <div class="activity-content">
        <span class="activity-badge">Hackathon</span>
        <h3 class="activity-title">SHIFT Hackathon 2025</h3>
        <p class="activity-desc">A nursing-led, interdisciplinary healthcare innovation hackathon.</p>
        <div class="activity-aim">
          <strong>Aim:</strong> Create a platform where students learn innovation by doing, collaborate with healthcare professionals and mentors, and appreciate the role of nurses as key stakeholders in healthcare innovation.
        </div>
      </div>
    </div>

    <!-- Activity 2: SNIG x CGH Networking -->
    <div class="activity-card">
      <div class="activity-image-stack">
        <div class="activity-img-wrapper">
          <img src="{{ 'images/snig/cgh-networking-1.jpg' | relative_url }}" alt="SNIG x CGH Networking Group Photo" {% include fallback.html %}>
        </div>
        <div class="activity-img-wrapper">
          <img src="{{ 'images/snig/cgh-networking-2.jpg' | relative_url }}" alt="SNIG x CGH Networking Workshop Discussion" {% include fallback.html %}>
        </div>
      </div>
      <div class="activity-content">
        <span class="activity-badge">Networking</span>
        <h3 class="activity-title">SNIG x CGH Networking</h3>
        <p class="activity-desc">A collaborative platform to allow SNIG members to network with innovators from CGH.</p>
        <div class="activity-aim">
          <strong>Aim:</strong> Aiming for future collaborative ideas to emerge, driving innovation between students and working nurses.
        </div>
      </div>
    </div>
  </div>
</div>

{% include section.html %}

<div class="snig-section">
  <div class="snig-section-header">
    <h2>Upcoming Activities for SNIG</h2>
    <div class="header-divider"></div>
  </div>

  <div class="upcoming-grid">
    <!-- Item 1 -->
    <div class="upcoming-card">
      <div class="upcoming-number">01</div>
      <div class="upcoming-details">
        <span class="upcoming-badge">Webinar & Workshop</span>
        <h3>Education-Capability Workshop with Dr Peter Carr</h3>
        <p>An online educational webinar introducing Dr Peter Carr’s innovation in ultrasound-guided IV catheterisation, while highlighting nurses’ unique role in healthcare innovation and providing practical insights into developing an innovative mindset in nursing.</p>
      </div>
    </div>

    <!-- Item 2 -->
    <div class="upcoming-card">
      <div class="upcoming-number">02</div>
      <div class="upcoming-details">
        <span class="upcoming-badge">Hackathon</span>
        <h3>SHIFT Hackathon 2027</h3>
        <p>The second iteration of the SHIFT Hackathon, providing students with a platform to identify healthcare challenges, develop nurse-led innovative solutions and translate ideas into actionable projects through collaborative problem-solving.</p>
      </div>
    </div>

    <!-- Item 3 -->
    <div class="upcoming-card">
      <div class="upcoming-number">03</div>
      <div class="upcoming-details">
        <span class="upcoming-badge">Collaboration</span>
        <h3>Collaboration with CGH</h3>
        <p>A continuation of our engagement with CGH, aimed at deepening collaboration following the initial networking session and exploring opportunities for joint innovation initiatives and knowledge exchange.</p>
      </div>
    </div>

    <!-- Item 4 -->
    <div class="upcoming-card">
      <div class="upcoming-number">04</div>
      <div class="upcoming-details">
        <span class="upcoming-badge">Networking</span>
        <h3>Networking with TTSH</h3>
        <p>An exploratory engagement with TTSH to build collaborative relationships and identify potential opportunities for innovation-related activities, such as idea development, project collaboration, and clinical or innovation shadowing.</p>
      </div>
    </div>
  </div>
</div>

<style>
.snig-hero {
  text-align: center;
  margin-bottom: 50px;
}

.snig-hero-title {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--bold);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin-bottom: 12px;
  color: var(--text);
}

.snig-hero-subtitle {
  color: var(--gray);
  font-size: 1.15rem;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.6;
}

.snig-section {
  max-width: 1000px;
  margin: 0 auto;
}

.snig-section-header {
  text-align: center;
  margin-bottom: 40px;
}

.snig-section-header h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--bold);
  border-bottom: none;
  margin-bottom: 12px;
  font-size: 1.6rem;
  color: var(--text);
}

.header-divider {
  width: 60px;
  height: 4px;
  background: var(--accent);
  margin: 0 auto;
  border-radius: 2px;
}

/* Team Section */
.team-bio-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.team-bio-text {
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.8;
  text-align: center;
  max-width: 850px;
  background: var(--background);
  padding: 25px 30px;
  border-radius: var(--rounded);
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
}

.team-photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  width: 100%;
}

.team-photo-card {
  background: var(--background);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
  transition: transform var(--transition), box-shadow var(--transition);
}

.team-photo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.12);
  border-color: var(--accent);
}

.team-photo-card img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
}

/* Activities Section */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.activity-card {
  background: var(--background);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
  border-color: var(--accent);
}

.activity-image-stack {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--light-gray);
}

.activity-img-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.activity-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.activity-card:hover .activity-img-wrapper img {
  transform: scale(1.03);
}

.activity-content {
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.activity-badge {
  align-self: flex-start;
  background: rgba(14, 165, 233, 0.1);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: var(--bold);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.activity-title {
  font-size: 1.35rem;
  font-weight: var(--bold);
  margin-bottom: 12px;
  color: var(--text);
}

.activity-desc {
  font-size: 1rem;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 18px;
  font-weight: var(--semi-bold);
}

.activity-aim {
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.6;
  background: var(--background-alt);
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
  margin-top: auto;
}

/* Upcoming Activities Section */
.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.upcoming-card {
  background: var(--background);
  border-radius: 14px;
  padding: 30px 25px;
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.upcoming-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px -10px rgba(0,0,0,0.12);
  border-color: var(--accent);
}

.upcoming-number {
  font-size: 2.2rem;
  font-weight: var(--bold);
  color: var(--accent);
  opacity: 0.4;
  margin-bottom: 10px;
  line-height: 1;
  font-family: var(--heading);
}

.upcoming-badge {
  display: inline-block;
  background: var(--background-alt);
  color: var(--gray);
  font-size: 0.75rem;
  font-weight: var(--bold);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 1px solid var(--light-gray);
}

.upcoming-details h3 {
  font-size: 1.2rem;
  font-weight: var(--bold);
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.4;
}

.upcoming-details p {
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .team-photos-grid, .activities-grid, .upcoming-grid {
    grid-template-columns: 1fr;
  }

  .team-photo-card img {
    height: 280px;
  }

  .activity-img-wrapper {
    height: 180px;
  }
}
</style>
