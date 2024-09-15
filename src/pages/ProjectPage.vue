<template>
  <q-page class="bg-gradient text-white">
    <div class="projects-container text-left">
      <h2 class="projects-heading">My Projects</h2>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.name"
          class="project-card"
        >
          <div class="project-image-placeholder">
            <p class="project-title text-center">{{ project.name }}</p>
          </div>
          <div class="project-details">
            <div class="tech-stack">
              <q-chip
                v-for="tech in project.techStack"
                :key="tech"
                class="tech-chip"
                color="primary"
                label
              >
                {{ tech }}
              </q-chip>
            </div>
            <q-btn
              flat
              label="View Project"
              icon="open_in_new"
              color="orange"
              class="view-project-btn"
              :href="project.link"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const projects = [
  {
    name: "Abrar Awsaf Membership Vue",
    techStack: ["Vue.js", "Quasar", "Sass"],
    link: "https://member.abrarawsafagrofarm.com/#/",
  },
  {
    name: "Mians Official Website",
    techStack: ["React.js", "CSS"],
    link: "https://wanna-be-coder.github.io/MIANS/",
  },

  {
    name: "Marketing App",
    techStack: ["Vue.js", "Quasar.js", "Sass"],
    link: "https://onbez.com/",
  },
];
</script>

<style scoped>
/* Main Container */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Background Gradient */
.bg-gradient {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
  min-height: 100vh;
}

/* Projects Heading */
.projects-heading {
  font-size: 3rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #fdfdfd;
  margin-bottom: 40px;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  justify-items: center;
  padding: 0 20px;
}

/* Project Card */
.project-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 420px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* Project Image Placeholder */
.project-image-placeholder {
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f8c8d;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Project Title */
.project-title {
  color: #ecf0f1;
  font-size: 1.6rem;
  font-weight: 600;
}

/* Project Details */
.project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  margin-bottom: 20px;
}

/* Tech Chip */
.tech-chip {
  margin: 5px;
  background: linear-gradient(135deg, #8e44ad, #3498db);
  color: white !important;
}

/* View Project Button */
.view-project-btn {
  margin-top: 10px;

  color: #fff;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-heading {
    font-size: 2.5rem;
  }

  .project-card {
    width: 100%;
    height: auto;
  }

  .project-image-placeholder {
    height: 120px;
  }

  .project-title {
    font-size: 1.2rem;
  }
}
</style>
