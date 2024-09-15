<template>
  <q-page class="bg-gradient text-white">
    <div class="skills-container">
      <!-- Frontend Section -->
      <div class="skills-section">
        <h2 class="skills-heading">Frontend Skills</h2>
        <div class="skills-grid">
          <div
            v-for="skill in frontendSkills"
            :key="skill.name"
            class="skill-card"
          >
            <q-icon :name="skill.icon" size="48px" class="skill-icon" />
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>

      <!-- Backend Section -->
      <div class="skills-section">
        <h2 class="skills-heading">Backend Skills</h2>
        <div class="skills-grid">
          <div
            v-for="skill in backendSkills"
            :key="skill.name"
            class="skill-card"
          >
            <q-icon :name="skill.icon" size="48px" class="skill-icon" />
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>

      <!-- Frameworks Section -->
      <div class="skills-section">
        <h2 class="skills-heading">Frameworks</h2>
        <div class="skills-grid">
          <div v-for="skill in frameworks" :key="skill.name" class="skill-card">
            <q-icon :name="skill.icon" size="48px" class="skill-icon" />
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>

      <!-- Other Skills Section -->
      <div class="skills-section">
        <h2 class="skills-heading">Other Skills</h2>
        <div class="skills-grid">
          <div
            v-for="skill in otherSkills"
            :key="skill.name"
            class="skill-card"
          >
            <q-icon :name="skill.icon" size="48px" class="skill-icon" />
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const frontendSkills = [
  { name: "HTML", icon: "mdi-language-html5" },
  { name: "CSS", icon: "mdi-language-css3" },
  { name: "JavaScript", icon: "mdi-language-javascript" },
  { name: "Vue.js", icon: "mdi-vuejs" },
  { name: "React", icon: "mdi-react" },
];

const backendSkills = [
  { name: "Node.js", icon: "mdi-nodejs" },
  { name: "PHP", icon: "mdi-language-php" },
  { name: "Java", icon: "mdi-language-java" },
];

const frameworks = [
  { name: "Quasar", icon: "mdi-star" },
  { name: "Express.js", icon: "mdi-nodejs" },
];

const otherSkills = [
  { name: "C", icon: "mdi-language-c" },
  { name: "C++", icon: "mdi-language-cpp" },
  { name: "Git", icon: "mdi-git" },
  { name: "Dot Net", icon: "mdi-language-csharp" },
];
</script>

<style scoped>
/* Main Container */
.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Background Gradient */
.bg-gradient {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
  min-height: 100vh;
}

/* Skills Section */
.skills-section {
  margin-bottom: 50px;
}

/* Section Heading */
.skills-heading {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00b4d8;
  margin-bottom: 40px;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Multiple columns based on screen size */
  gap: 30px;
  width: 100%;
}

/* Skill Card */
.skill-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

/* Skill Icon */
.skill-icon {
  color: #f39c12;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.skill-card:hover .skill-icon {
  color: #00b4d8;
}

/* Skill Name */
.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr; /* Single column for mobile screens */
  }
  .skills-heading {
    font-size: 2rem;
  }
  .skill-name {
    font-size: 1.2rem;
  }
}
</style>
