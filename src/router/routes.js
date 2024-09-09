const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "projects", component: () => import("pages/ProjectPage.vue") },
      { path: "skills", component: () => import("pages/SkillPage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
    ],
  },
];

export default routes;
