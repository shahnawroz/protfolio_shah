<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Header -->
    <q-header class="header text-white">
      <q-toolbar class="text-white">
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
          <span class="text-h5 text-center">Shah Nawrose</span>
        </q-toolbar-title>

        <q-space />
        <!-- Desktop navigation links (shown only on large screens) -->
        <q-btn
          flat
          :class="{ active: route.path === '/' }"
          label="Home"
          class="nav-btn"
          :to="{ path: '/' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="{ active: route.path === '/projects' }"
          label="Projects"
          class="nav-btn"
          :to="{ path: '/projects' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="{ active: route.path === '/skills' }"
          label="Skills"
          class="nav-btn"
          :to="{ path: '/skills' }"
          v-if="$q.screen.gt.md"
        />
        <q-btn
          flat
          :class="{ active: route.path === '/contact' }"
          label="Contact"
          class="nav-btn"
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
        <q-item clickable v-ripple :to="{ path: '/' }">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/projects' }">
          <q-item-section>Projects</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/skills' }">
          <q-item-section>Skills</q-item-section>
        </q-item>
        <q-item clickable v-ripple :to="{ path: '/contact' }">
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
        <div class="text-h6">Shah Nawrose</div>
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
  background: linear-gradient(135deg, #1c3b57, #283e59, #1f1f3a);
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

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .nav-btn {
    font-size: 0.9rem;
  }
}
</style>
