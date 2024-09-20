<template>
  <section id="about" class="about-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">About Me</h1>

      <!-- Introduction Section -->
      <div
        class="section-card introduction animate__animated animate__fadeInUp animate__delay-1s"
      >
        <h2>👋 Hello! I'm Shahnawroz</h2>
        <p>
          I’m a passionate web developer with a focus on building clean, modern
          web applications. I specialize in both frontend and backend
          development, delivering projects from concept to completion.
        </p>
      </div>

      <!-- Job Experience Section -->
      <div
        class="section-card job-experience animate__animated animate__fadeInUp animate__delay-2s"
      >
        <h2>🧑‍💻 Job Experience</h2>
        <div class="experience-item">
          <h3>Frontend Developer - ICHING Software Lab</h3>
          <p>2024 July - Present</p>
          <p>
            Developed and maintained modern web applications using Vue.js,
            focusing on improving user interfaces and overall performance.
          </p>
        </div>
        <div class="experience-item">
          <h3>Executive Post Sales - Bright-i System Limited</h3>
          <p>2023 May - 2024 July</p>
          <p>
            Worked on network security projects, focusing on enhancing system
            resilience and performance. Applied Trend Micro security solutions
            to ensure robust protection against threats, safeguarding
            infrastructure and optimizing network security protocols.
          </p>
        </div>
      </div>

      <!-- Education Section -->
      <div
        class="section-card education animate__animated animate__fadeInUp animate__delay-3s"
      >
        <h2>🎓 Education</h2>
        <div class="education-item">
          <h3>
            Bachelor's in Computer Science - American International University
            of Bangladesh (AIUB)
          </h3>
          <p>2016 - 2021</p>
          <p>
            Graduated with a focus on software development and web technologies,
            gaining hands-on experience in building scalable applications.
          </p>
        </div>
        <div class="education-item">
          <h3>High School Certificate - Adamjee Cantonment College</h3>
          <p>2013 - 2015</p>
          <p>
            Completed my studies in Science during this period, building a solid
            foundation in analytical thinking.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
@import "animate.css"; /* Import Animate.css */

.about-page {
  background-color: #1e3c72; /* Matches your portfolio background */
  padding: 3rem 0;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1 {
  text-align: center;
  font-size: 3rem;
  color: #58a6ff; /* Blue text for headings */
  margin-bottom: 2rem;
}

.section-card {
  background-color: #274880; /* Dark card background */
  border: 1px solid #30363d; /* Border for card */
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 1s ease, box-shadow 1s ease;
}

.section-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Hover effect */
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: white; /* Use blue color for subheadings */
}

p {
  font-size: 1rem;
  color: #c9d1d9; /* Light text for content */
  line-height: 1.6;
}

.experience-item,
.education-item {
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  color: white; /* White text for job and education titles */
  margin-bottom: 0.5rem;
  transition: color 1s ease;
}

h3:hover {
  color: #eec900; /* Hover effect for job and education titles */
}

p {
  margin: 0.3rem 0;
}
</style>
