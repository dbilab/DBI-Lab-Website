---
---

{% assign project_count = site.projects | where: "group", "Ongoing" | size %}

{% include section.html size="wide" %}

<div class="stats-bar">
  <div class="stat-item">
    <span class="stat-value">2023-</span>
    <span class="stat-label">LAB ESTABLISHED IN SINGAPORE</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">{{ project_count }}</span>
    <span class="stat-label">PROJECTS WITH ACTIVE RECRUITMENT</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">4</span>
    <span class="stat-label">RESEARCH THEMES</span>
  </div>
  <div class="stat-item">
    <span class="stat-value">2</span>
    <span class="stat-label">SITES: NUS • NUHS</span>
  </div>
</div>

{% include section.html background-alt=true %}

<div class="affiliation-banner">
  <span class="affiliation-title">AFFILIATED WITH</span>
  <div class="affiliation-list">
    <span>National University of Singapore (NUS)</span>
    <span>National University Health System (NUHS)</span>
  </div>
</div>

{% include section.html %}

<div class="pi-section">
  <div class="pi-content">
    <span class="pi-label">PRINCIPAL INVESTIGATOR</span>
    <h2>Dr Chew Han Shi Jocelyn</h2>
    <p>Assistant Professor and Clinician Scientist at the National University of Singapore. Studies digital phenotyping, behavioral science, and preventive cardiology to identify early cardiometabolic risk signals and support sustainable behavior change.</p>
    <p>Dr. Chew completed her PhD at the Chinese University of Hong Kong, becoming the youngest nurse in Singapore to obtain a PhD. Dr. Chew is also the first nurse to have received training in the Stanford Biodesign methodology as a Singapore Biodesign Innovation Fellow (FY23/24), which included immersion at regional and global centres such as Beijing and the United States</p>
    <div class="button-wrapper">
      <a href="{{ '/team/chew-jocelyn/' | relative_url }}" class="button" data-style="outline">Read Bio</a>
    </div>
  </div>
  <div class="pi-image">
    <img src="{{ 'images/team/Prof_Chew_Photo.jpg' | relative_url }}" alt="Dr Jocelyn Chew">
  </div>
</div>

{% include section.html %}

<div class="highlights-header">
  <h2>Our Research Themes</h2>
  <hr>
</div>

<div class="research-themes-grid">
  <a href="{{ '/research/?search=%22phenotyping%22+%22phenogroup%22+%22wearable%22+%22mobile%22+%22sensor%22&theme=true' | relative_url }}" class="theme-box">
    <i class="fa-solid fa-fingerprint"></i>
    <span>Digital Phenotyping</span>
  </a>
  <a href="{{ '/research/?search=%22behavioural%22+%22intervention%22+%22self-regulation%22+%22app-based%22+%22mHealth%22+%22digital+health%22&theme=true' | relative_url }}" class="theme-box">
    <i class="fa-solid fa-mobile-screen-button"></i>
    <span>Digital Behavioural Interventions</span>
  </a>
  <a href="{{ '/research/?search=%22cardiology%22+%22cardiometabolic%22+%22cardiovascular%22+%22heart%22+%22insulin%22&theme=true' | relative_url }}" class="theme-box">
    <i class="fa-solid fa-heart-pulse"></i>
    <span>Preventive Cardiology</span>
  </a>
  <a href="{{ '/research/?search=%22obesity%22+%22weight%22+%22diet%22+%22body+image%22+%22stigma%22+%22overweight%22&theme=true' | relative_url }}" class="theme-box">
    <i class="fa-solid fa-weight-scale"></i>
    <span>Obesity Management</span>
  </a>
</div>

<style>
.research-themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.theme-box {
  background: var(--background);
  border: 1px solid var(--light-gray);
  border-radius: var(--rounded);
  padding: 40px 20px;
  text-align: center;
  text-decoration: none;
  color: var(--text);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: var(--shadow);
}

.theme-box i {
  font-size: 3rem;
  color: var(--primary);
}

.theme-box span {
  font-weight: var(--bold);
  font-size: 1.1rem;
  line-height: 1.3;
}

.theme-box:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>

{% capture projects_text %}
DBI Lab leads and collaborates on interdisciplinary projects spanning digital weight management, cardiometabolic health, body image and weight stigma. Our projects range from observational trials, randomized controlled trials, implementation studies to the co-design and evaluation of digital health tools deployed in healthcare systems and communities.

<br><br>
<a href="{{ '/projects/' | relative_url }}" style="color: var(--primary); font-weight: var(--bold); text-decoration: none;">
  Browse our projects <i class="fa-solid fa-arrow-right"></i>
</a>
{% endcapture %}

{%
  include feature.html
  image="images/Project.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  text=projects_text
%}

{% capture team_text %}
To see the main members of our research team via the following link:

<br><br>
<a href="{{ '/team/' | relative_url }}" style="color: var(--primary); font-weight: var(--bold); text-decoration: none;">
  Meet our team <i class="fa-solid fa-arrow-right"></i>
</a>
{% endcapture %}

{%
  include feature.html
  image="images/Team_photo_updated.jpg"
  link="team"
  title="Our Team"
  text=team_text
%}

{% include section.html background-alt=true %}

<div class="grid" style="--repeat: 2; align-items: flex-start;">
  <div>
    <h2><a href="{{ '/news/' | relative_url }}" style="color: inherit; text-decoration: none;">Latest News</a></h2>
    {% include list.html data="posts" component="post-excerpt" %}
    <div style="margin-top: 20px;">
      {%
        include button.html
        link="/news/"
        text="View more news"
        icon="fa-solid fa-newspaper"
        style="bare"
      %}
    </div>
  </div>
  
  <div>
    <h2><a href="{{ '/projects/' | relative_url }}" style="color: inherit; text-decoration: none;">Our Research Projects</a></h2>
    <div class="grid" style="--repeat: 2; gap: 20px;">
      {% include list.html data="projects" component="card" style="overlay" filter="group == 'Ongoing'" %}
    </div>
  </div>
</div>
