---
title: Contact
nav:
  order: 6
  tooltip: Email address, phone number and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

You can find us at National University of Singapore, Alice Lee Centre for Nursing Studies, Yong Loo Lin School of Medicine,  Centre for Translational Medicine, Block MD 6, Level 5, 14 Medical Drive, Singapore 117599

{%
  include button.html
  type="email"
  text="dbi-lab@nus.edu.sg"
  link="dbi-lab@nus.edu.sg"
%}
{% comment %}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{% endcomment %}
{%
  include button.html
  type="address"
  tooltip="Lab Location: Block MD 6, Level 5, 14 Medical Drive, Singapore 117599"
  link="https://www.google.com/maps"
%}

{% comment %}

{% include section.html %}

{% capture col1 %}

{% endcapture %}

{% capture col2 %}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
{% endcomment %}