---
title: Projects
nav:
  order: 2
  tooltip: Research interventions and projects
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

DBI Lab leads and collaborates on interdisciplinary projects spanning digital weight management, cardiometabolic health, body image and weight stigma.
Our projects range from observational trials, randomized controlled trials, implementation studies to the co-design and evaluation of digital health tools deployed in healthcare systems and communities.

{% include project-nav.html %}

<div class="project-groups">
  <section class="project-group" data-group="ongoing">
    <h2 id="ongoing">Recruitment: Ongoing</h2>
    {% include list.html component="card" data="projects" filter="group == 'Ongoing'" %}
  </section>

  <section class="project-group" data-group="upcoming">
    <h2 id="upcoming">Recruitment: Upcoming</h2>
    {% include list.html component="card" data="projects" filter="group == 'Upcoming'" %}
  </section>

  <section class="project-group" data-group="closed">
    <h2 id="closed">Recruitment: Closed</h2>
    {% include list.html component="card" data="projects" filter="group == 'Closed'" %}
  </section>
</div>

{% comment %}
## More
{% include list.html component="card" data="projects" filter="!group" %}
{% endcomment %}