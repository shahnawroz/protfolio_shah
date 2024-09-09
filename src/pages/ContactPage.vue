<template>
  <q-page class="contact-page">
    <div class="contact-container">
      <!-- Contact Section Heading -->
      <h1 class="contact-heading">Let's Connect</h1>
      <p class="contact-subheading">
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. Feel free to reach out via
        email or phone, or connect through my social media profiles.
      </p>

      <!-- Contact Information -->
      <div class="contact-info">
        <div class="contact-item">
          <q-icon name="mdi-email-outline" size="36px" class="icon-email" />
          <span class="contact-text">sh.nawrose@gmail.com</span>
        </div>
        <div class="contact-item">
          <q-icon name="mdi-phone-outline" size="36px" class="icon-phone" />
          <span class="contact-text">01761-867763</span>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="social-links">
        <q-btn
          flat
          icon="mdi-linkedin"
          class="social-btn linkedin-btn"
          href="https://www.linkedin.com/in/shah-nawrose"
          target="_blank"
          aria-label="LinkedIn"
        />
        <q-btn
          flat
          icon="mdi-github"
          class="social-btn github-btn"
          href="https://github.com/shahnawroz"
          target="_blank"
          aria-label="GitHub"
        />
        <q-btn
          flat
          icon="mdi-twitter"
          class="social-btn twitter-btn"
          href="https://twitter.com/yourusername"
          target="_blank"
          aria-label="Twitter"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
/* General Contact Page Layout */
.contact-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
  font-family: "Poppins", sans-serif;
}

/* Container for Content */
.contact-container {
  text-align: center;
  max-width: 700px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

/* Heading */
.contact-heading {
  font-size: 2.5rem;
  font-weight: bold;
  color: orange;
  margin-bottom: 20px;
}

/* Subheading Text */
.contact-subheading {
  font-size: 1.1rem;
  color: #bdc3c7;
  margin-bottom: 40px;
}

/* Contact Information */
.contact-info {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.q-icon {
  color: #3498db;
  margin-right: 10px;
}

/* Social Media Buttons */
.social-links {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-btn {
  font-size: 1.8rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.linkedin-btn:hover {
  background-color: #0e76a8;
}

.github-btn:hover {
  background-color: #333;
}

.twitter-btn:hover {
  background-color: #1da1f2;
}

.social-btn:hover {
  transform: scale(1.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .contact-heading {
    font-size: 2rem;
  }

  .contact-subheading {
    font-size: 1rem;
    padding: 0 20px;
  }

  .q-icon {
    font-size: 32px;
    margin-right: 10px;
  }

  .contact-text {
    font-size: 1rem;
  }

  .social-btn {
    font-size: 1.5rem;
    padding: 12px;
  }

  .social-links {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 20px;
    max-width: 100%;
  }

  .contact-heading {
    font-size: 1.8rem;
  }

  .contact-subheading {
    font-size: 0.9rem;
  }

  .social-btn {
    font-size: 1.4rem;
    padding: 10px;
  }
}
</style>
