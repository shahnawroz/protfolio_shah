<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Header -->
    <q-header class="header text-white">
      <q-toolbar class="text-white drawer">
        <!-- Show the menu button only on mobile screens (below md) -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawer"
          class="q-mr-sm"
          v-if="!$q.screen.gt.md"
        />
        <q-toolbar-title class="logo text-bold">
          <!-- Add your name or logo here -->
          <span
            class="text-h5 text-center animate__animated animate__fadeInLeft"
          >
            Shah Nawrose
          </span>
        </q-toolbar-title>

        <q-space />

        <!-- Desktop navigation links (shown only on large screens) -->
        <q-btn
          flat
          :class="[
            'nav-btn',
            { active: route.path === '/' },
            'animate__animated',
            'animate__fadeInRight',
            'delay-1',
          ]"
          label="Home"
          :to="{ path: '/' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="[
            'nav-btn',
            { active: route.path === '/about' },
            'animate__animated',
            'animate__fadeInRight',
            'delay-2',
          ]"
          label="About Me"
          :to="{ path: '/about' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="[
            'nav-btn',
            { active: route.path === '/projects' },
            'animate__animated',
            'animate__fadeInRight',
            'delay-3',
          ]"
          label="Projects"
          :to="{ path: '/projects' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="[
            'nav-btn',
            { active: route.path === '/skills' },
            'animate__animated',
            'animate__fadeInRight',
            'delay-4',
          ]"
          label="Skills"
          :to="{ path: '/skills' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="[
            'nav-btn',
            { active: route.path === '/contact' },
            'animate__animated',
            'animate__fadeInRight',
            'delay-5',
          ]"
          label="Contact"
          :to="{ path: '/contact' }"
          v-if="$q.screen.gt.md"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer (side navigation) -->
    <q-drawer
      v-model="drawer"
      side="left"
      bordered
      class="text-primary bg-dark drawer"
    >
      <q-list>
        <!-- Home Link -->
        <q-item clickable v-ripple to="/" exact>
          <q-item-section>Home</q-item-section>
        </q-item>

        <!-- About Me Link -->
        <q-item clickable v-ripple to="/about">
          <q-item-section>About Me</q-item-section>
        </q-item>

        <!-- Projects Link -->
        <q-item clickable v-ripple to="/projects">
          <q-item-section>Projects</q-item-section>
        </q-item>

        <!-- Skills Link -->
        <q-item clickable v-ripple to="/skills">
          <q-item-section>Skills</q-item-section>
        </q-item>

        <!-- Contact Link -->
        <q-item clickable v-ripple to="/contact">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="text-white q-pa-md q-pt-lg shadow-2 footer">
      <div class="q-gutter-md text-center">
        <div class="text-h6">© 2024</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

// Drawer state for mobile navigation
const drawer = ref(false);

// Function to toggle the drawer (for mobile screens)
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Get the current route using useRoute
const route = useRoute();
</script>

<style scoped>
@import "animate.css";

/* Header Styling */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
}

.logo {
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  flex: none !important;
}

/* Navigation Button Styles */
.nav-btn {
  color: white;
  font-weight: bold;
  font-size: 1rem;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffcc00;
}

/* Active button class */
.nav-btn.active {
  background: rgba(255, 255, 255, 0.2);
  color: #ffcc00; /* Active state color */
}

/* Mobile Drawer Styles */
.drawer {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
}

.drawer .q-item-section {
  font-weight: bold;
  color: white;
}

/* Footer Styling */
.footer {
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  background: linear-gradient(135deg, #1e3c72, #2a5298, #1e2a38);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-btn {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.2);
  color: #ffcc00;
}
.q-item.q-router-link--active,
.q-item--active {
  color: yellow !important;
}
.q-item.q-router-link,
.q-item {
  color: white !important;
}
.q-footer {
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}
/* You can adjust the delays for each button */
.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.3s;
}

.delay-3 {
  animation-delay: 0.4s;
}

.delay-4 {
  animation-delay: 0.5s;
}

.delay-5 {
  animation-delay: 0.6s;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .nav-btn {
    font-size: 0.9rem;
  }
}
</style>
