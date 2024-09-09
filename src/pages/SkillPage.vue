<template>
  <q-page class="q-pa-md bg-dark text-white">
    <!-- Title of the Skills Page -->
    <h2 class="q-mb-lg text-center text-info">My Skills</h2>

    <!-- Skills Container -->
    <div class="skills-container">
      <!-- Skill Chips -->
      <q-chip
        v-for="skill in skills"
        :key="skill.name"
        color="primary"
        text-color="white"
        icon="code"
        clickable
        @click="showSkillInfo(skill)"
        class="skill-chip"
      >
        {{ skill.name }}
        <!-- Tooltip to show more info on hover -->
        <q-tooltip>{{ skill.description }}</q-tooltip>
      </q-chip>
    </div>

    <!-- Skill Info Modal Dialog -->
    <q-dialog v-model="isModalOpen">
      <q-card>
        <q-card-section class="text-primary">
          <div class="text-h6">{{ selectedSkill.name }}</div>
          <div class="q-mt-sm">{{ selectedSkill.description }}</div>
          <div class="q-mt-md">{{ selectedSkill.details }}</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" @click="closeModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// Skill data with descriptions
const skills = ref([
  {
    name: "Vue.js",
    description: "A progressive JavaScript framework.",
    details: "Vue.js is great for building interactive interfaces.",
  },
  {
    name: "Quasar",
    description: "A high-performance Vue.js framework.",
    details: "Quasar Framework helps build responsive UIs.",
  },
  {
    name: "JavaScript",
    description: "A versatile programming language.",
    details: "JavaScript is essential for modern web development.",
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime.",
    details: "Node.js is widely used for backend applications.",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for modern apps.",
    details: "MongoDB is ideal for handling large datasets.",
  },
  {
    name: "Git",
    description: "Version control system.",
    details: "Git helps manage code changes efficiently.",
  },
  {
    name: "Docker",
    description: "Container platform.",
    details: "Docker is used to package applications into containers.",
  },
]);

// Modal state and functions
const isModalOpen = ref(false);
const selectedSkill = ref({});

const showSkillInfo = (skill) => {
  selectedSkill.value = skill;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
/* Flexbox container to arrange chips */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
}

/* Style for individual skill chips */
.skill-chip {
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: 1rem;
}

/* Hover effect for skill chips */
.skill-chip:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive design for mobile devices */
@media (max-width: 600px) {
  .skills-container {
    flex-direction: column;
    align-items: center;
  }

  .skill-chip {
    width: 80%; /* Make chips fit well on mobile */
  }
}
</style>
