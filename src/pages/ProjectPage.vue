<template>
  <q-page class="q-pa-md bg-dark text-white">
    <!-- Title of the Projects Page -->
    <h2 class="q-mb-lg text-center text-primary">My Projects</h2>

    <!-- Projects Container -->
    <div class="project-grid">
      <!-- Project Cards -->
      <q-card
        v-for="project in projects"
        :key="project.id"
        bordered
        flat
        class="project-card q-mb-lg"
      >
        <q-img :src="project.image" class="project-image" />

        <q-card-section>
          <div class="text-h6">{{ project.title }}</div>
          <div class="text-subtitle2">{{ project.description }}</div>

          <!-- Technologies used in the project -->
          <div class="q-mt-md">
            <q-chip
              v-for="tech in project.technologies"
              :key="tech"
              color="secondary"
              class="q-mr-sm"
            >
              {{ tech }}
            </q-chip>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="View Project"
            color="primary"
            :href="project.link"
            target="_blank"
            icon="launch"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// Projects data
const projects = ref([
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Vue.js and Quasar Framework.",
    image: "https://via.placeholder.com/400x200?text=Portfolio+Website",
    technologies: ["Vue.js", "Quasar", "CSS"],
    link: "https://github.com/johndoe/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with Node.js, Vue.js, and MongoDB.",
    image: "https://via.placeholder.com/400x200?text=E-commerce+Platform",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description:
      "A real-time chat application built with Vue.js, Socket.IO, and Node.js.",
    image: "https://via.placeholder.com/400x200?text=Real-time+Chat+App",
    technologies: ["Vue.js", "Node.js", "Socket.IO"],
    link: "https://github.com/johndoe/chat-app",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather app that fetches real-time weather data from an external API.",
    image: "https://via.placeholder.com/400x200?text=Weather+App",
    technologies: ["Vue.js", "OpenWeather API", "Tailwind CSS"],
    link: "https://github.com/johndoe/weather-app",
  },
  // Add more projects here
]);
</script>

<style scoped>
/* Container for the project grid */
.project-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Individual project card styling */
.project-card {
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Project image styling */
.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Hover effect for project cards */
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Responsive design for mobile screens */
@media (max-width: 600px) {
  .project-card {
    max-width: 100%;
  }
}
</style>
