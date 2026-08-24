---
title: SOCIAL MEDIA
nav:
  order: 5
  tooltip: Educational Bites
---

<div style="text-align: center; margin-bottom: 60px;">
  <img src="{{ 'images/TeaLogo.png' | relative_url }}" width="80" style="border-radius: 12px; box-shadow: var(--shadow); margin-bottom: 20px;">
  <h1 style="text-transform: uppercase; letter-spacing: 2px; font-weight: var(--bold);">Social Media</h1>
  <p style="color: var(--gray); font-size: 1.1rem;">Follow us on our social media channels for educational bites and lab updates.</p>
</div>

{% include section.html %}

<div class="social-grid">
  <div class="social-card">
    <div class="social-icon" style="color: #E1306C;">
      <i class="fa-brands fa-instagram fa-3x"></i>
    </div>
    <h3>Instagram</h3>
    <p>Educational bites and latest lab updates.</p>
    <a href="https://www.instagram.com/thepreventiontea/" class="button" data-style="outline">Follow Us</a>
  </div>
  
  <div class="social-card">
    <div class="social-icon" style="color: #000000;">
      <i class="fa-brands fa-tiktok fa-3x"></i>
    </div>
    <h3>TikTok</h3>
    <p>Short videos on cardiometabolic health and research.</p>
    <a href="https://www.tiktok.com/@the.prevention.tea" class="button" data-style="outline">Watch Now</a>
  </div>

  <div class="social-card">
    <div class="social-icon" style="color: var(--primary);">
      <i class="fa-solid fa-envelope fa-3x"></i>
    </div>
    <h3>Email</h3>
    <p>Reach out to us directly for inquiries or collaborations.</p>
    <a href="mailto:thepreventiontea@gmail.com" class="button" data-style="outline">Get in Touch</a>
  </div>
</div>

{% include section.html background-alt=true %}

<div class="health-promotion-section">
  <div style="text-align: center; margin-bottom: 50px;">
    <h2 style="text-transform: uppercase; letter-spacing: 2px; font-weight: var(--bold); border-bottom: none; margin-bottom: 10px;">Public Health Promotion</h2>
    <p style="color: var(--gray); font-size: 1.1rem; max-width: 800px; margin: 0 auto; line-height: 1.6;">Bridging the gap between digital health technology and daily wellness. Explore our evidence-based guides on leveraging wearable technology for sustainable healthy living.</p>
  </div>

  <div class="promotion-grid">
    <div class="promotion-card">
      <a href="{{ 'images/Posters/Connecting Health & Lifestyle with Wearables_page-0001.jpg' | relative_url }}" target="_blank" data-tooltip="Click to view full guide">
        <img src="{{ 'images/Posters/Connecting Health & Lifestyle with Wearables_page-0001.jpg' | relative_url }}" alt="Connecting Health & Lifestyle with Wearables - Guide Part 1">
      </a>
    </div>
    <div class="promotion-card">
      <a href="{{ 'images/Posters/Connecting Health & Lifestyle with Wearables_page-0002.jpg' | relative_url }}" target="_blank" data-tooltip="Click to view full guide">
        <img src="{{ 'images/Posters/Connecting Health & Lifestyle with Wearables_page-0002.jpg' | relative_url }}" alt="Connecting Health & Lifestyle with Wearables - Guide Part 2">
      </a>
    </div>
  </div>
</div>

{% include section.html %}

<div class="health-promotion-section">
  <div style="text-align: center; margin-bottom: 50px;">
    <h2 style="text-transform: uppercase; letter-spacing: 2px; font-weight: var(--bold); border-bottom: none; margin-bottom: 10px;">Perimenopause Symptoms and Lifestyle Modifications</h2>
    <p style="color: var(--gray); font-size: 1.1rem; max-width: 800px; margin: 0 auto; line-height: 1.6;">Understanding the transition and empowering wellness through informed lifestyle changes. Explore our evidence-based guide on managing perimenopause symptoms and optimizing health through daily habits.</p>
  </div>

  <div class="promotion-grid">
    <div class="promotion-card">
      <a href="{{ 'images/Posters/Perimenopause Symptoms and Lifestyle Modifications_page-0001.jpg' | relative_url }}" target="_blank" data-tooltip="Click to view full guide">
        <img src="{{ 'images/Posters/Perimenopause Symptoms and Lifestyle Modifications_page-0001.jpg' | relative_url }}" alt="Perimenopause Symptoms and Lifestyle Modifications - Guide Part 1">
      </a>
    </div>
    <div class="promotion-card">
      <a href="{{ 'images/Posters/Perimenopause Symptoms and Lifestyle Modifications_page-0002.jpg' | relative_url }}" target="_blank" data-tooltip="Click to view full guide">
        <img src="{{ 'images/Posters/Perimenopause Symptoms and Lifestyle Modifications_page-0002.jpg' | relative_url }}" alt="Perimenopause Symptoms and Lifestyle Modifications - Guide Part 2">
      </a>
    </div>
  </div>
</div>

<style>
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.social-card {
  background: var(--background);
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform var(--transition), box-shadow var(--transition);
  min-height: 320px;
}

.social-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px -15px rgba(0,0,0,0.15);
  border-color: var(--primary);
}

.social-icon {
  margin-bottom: 25px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-card h3 {
  font-size: 1.5rem;
  font-weight: var(--bold);
  margin-bottom: 15px;
  color: var(--text);
}

.social-card p {
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.5;
  margin-bottom: 30px;
  flex-grow: 1;
}

.social-card .button {
  width: 80%;
  margin: 0;
}

.health-promotion-section {
  max-width: 1000px;
  margin: 0 auto;
}

.promotion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.promotion-card {
  background: var(--background);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--light-gray);
  transition: all var(--transition);
}

.promotion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border-color: var(--primary);
}

.promotion-card img {
  width: 100%;
  display: block;
}

@media (max-width: 600px) {
  .promotion-grid {
    grid-template-columns: 1fr;
  }
}
</style>
