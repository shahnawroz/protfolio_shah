<template>
  <q-page class="q-pa-md bg-dark text-white">
    <div class="q-pa-md text-center">
      <!-- Contact Section Heading -->
      <h1 class="q-mb-lg contact-heading">Get In Touch</h1>

      <!-- Contact Information -->
      <div class="q-mb-lg contact-info">
        <p class="q-mb-md">
          Whether you have a question or just want to say hello, feel free to
          reach out.
        </p>
        <div class="q-mb-md">
          <q-icon name="mdi-email-outline" size="36px" class="q-mr-sm" />
          <span>sh.nawrose@gmail.com</span>
        </div>
        <div class="q-mb-md">
          <q-icon name="mdi-phone-outline" size="36px" class="q-mr-sm" />
          <span>01761-867763</span>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="social-links q-mt-lg">
        <q-btn
          flat
          icon="mdi-linkedin"
          class="social-btn"
          href="https://www.linkedin.com/in/shah-nawrose?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          aria-label="LinkedIn"
        />
        <q-btn
          flat
          icon="mdi-github"
          class="social-btn"
          href="https://github.com/shahnawroz?tab=repositories"
          target="_blank"
          aria-label="GitHub"
        />
        <q-btn
          flat
          icon="mdi-facebook"
          class="social-btn"
          href="https://www.facebook.com/nawrose.shah/"
          target="_blank"
          aria-label="Twitter"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
/* Contact Page Styles */
.q-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: #2c3e50; /* Dark background */
}

.contact-heading {
  font-size: 2.8rem;
  color: #3498db;
}

.contact-info p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #bdc3c7;
}

.contact-info div {
  font-size: 1.4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.q-icon {
  color: #3498db;
}

/* Social Media Buttons */
.social-links {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-btn {
  font-size: 2rem;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.2);
  color: #ffcc00; /* Hover effect */
}
</style>
