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
</style>
