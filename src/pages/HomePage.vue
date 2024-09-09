<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-heading">
            Hello, I'm <span class="highlight">Shah Nawrose</span>
          </h1>
          <p class="hero-description">
            A passionate full-stack software developer skilled in modern
            JavaScript frameworks like Vue.js and Quasar. I build scalable web
            applications with real-world impact.
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
      <h2 class="section-title">Technologies I Work With</h2>
      <div class="tech-grid">
        <q-icon name="mdi-vuejs" size="50px" color="primary" />
        <q-icon name="mdi-nodejs" size="50px" color="primary" />
        <q-icon name="mdi-docker" size="50px" color="primary" />
        <q-icon name="mdi-react" size="50px" color="primary" />
        <q-icon name="mdi-github" size="50px" color="primary" />
      </div>
    </section>
  </q-page>
</template>

<script setup>
const downloadCV = () => {
  window.open("path-to-your-cv.pdf", "_blank");
};
</script>

<style scoped>
/* General Styling for the Home Page */
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #f5f6f7;
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
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-heading {
  font-size: 3rem;
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

@media (max-width: 768px) {
  .hero-heading {
    font-size: 2.2rem;
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
