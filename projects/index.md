---
title: Projects
nav:
  order: 2
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

DBI Lab leads and collaborates on interdisciplinary projects spanning digital weight management, cardiometabolic health, body image and weight stigma.
Our projects range from observational trials, randomized controlled trials, implementation studies to the co-design and evaluation of digital health tools deployed in healthcare systems and communities.

{% comment %}
{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}
{% endcomment %}

## Recruitment: Ongoing

{% include list.html component="card" data="projects" filter="group == 'Ongoing'" %}

{% include section.html %}

## Recruitment: Closed

{% include list.html component="card" data="projects" filter="group == 'Closed'" %}

{% comment %}
## More
{% include list.html component="card" data="projects" filter="!group" %}
{% endcomment %}