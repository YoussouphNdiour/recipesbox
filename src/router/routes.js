const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/addrecipe",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/addRecipe.vue") }],
  },
  {
    path: "/detailsinstructions/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/detailsinstructions.vue") }],
  },
  {
    path: "/detailsdirectives/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/detailsdirectives.vue") }],
  },
  {
    path: "/directivesdetails/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Directivesdetails.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
