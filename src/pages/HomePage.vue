<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content">
          <div>
            <h1 class="hero-heading no-gap">
              Hello, I'm<br />
              <span class="text-orange">Shah Nawrose</span>
            </h1>
          </div>

          <p class="hero-description">
            A skilled Front-End Developer with expertise in crafting dynamic,
            responsive, and user-friendly web applications using modern
            JavaScript frameworks like Vue.js, Quasar etc. I specialize in
            building scalable solutions that prioritize performance, usability,
            and design aesthetics to deliver a seamless user experience.
          </p>
          <div class="cta-buttons">
            <q-btn
              label="View My Projects"
              color="primary"
              class="q-mr-md hero-btn"
              icon="work"
              :to="{ path: '/projects' }"
            />
            <q-btn
              label="Download CV"
              color="secondary"
              class="hero-btn"
              icon="cloud_download"
              @click="downloadCV"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="technologies-section">
      <h2 class="section-title text-white">Technologies</h2>
      <div class="tech-grid">
        <q-icon name="mdi-vuejs" size="50px" color="text-white" />
        <q-icon name="mdi-nodejs" size="50px" color="text-white" />
        <q-icon name="mdi-react" size="50px" color="text-white" />
        <q-icon name="mdi-github" size="50px" color="text-white" />
      </div>
    </section>
  </q-page>
</template>

<script setup>
const downloadCV = () => {
  window.open(
    "https://drive.google.com/file/d/1XbSASS9QfxQe4MsZjXJxc-dlHxs1dgwm/view?usp=sharing",
    "_blank"
  );
};
</script>

<style scoped>
/* General Styling for the Home Page */
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #1e3c72;
  font-family: "Poppins", sans-serif;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(
      135deg,
      rgba(44, 62, 80, 0.8),
      rgba(52, 73, 94, 0.8)
    ),
    url("https://source.unsplash.com/featured/?coding") no-repeat center center;
  background-size: cover;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Responsive behavior for background image */
@media (max-width: 768px) {
  .hero-section {
    background-position: center;
    background-size: cover;
  }
}

.hero-overlay {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
}

.hero-heading {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.hero-heading .highlight {
  color: #3498db; /* Primary highlight color */
}

.hero-description {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 30px;
  color: white;
}

.cta-buttons {
  display: flex;
  justify-content: center;
}

.hero-btn {
  min-width: 200px;
  font-size: 1rem;
  padding: 12px 24px;
  margin: 0 10px;
}

/* Technologies Section */
.technologies-section {
  padding: 50px 20px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #34495e;
}

.tech-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.q-icon {
  transition: transform 0.3s ease;
}

.q-icon:hover {
  transform: scale(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-heading {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
