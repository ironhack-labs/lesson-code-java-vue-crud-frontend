import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProjectDetailsView from "../views/ProjectDetailsView.vue";
import EditProjectView from "../views/EditProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectListView,
    },
    {
      path: "/projects/:projectId",
      component: ProjectDetailsView,
    },
    {
      path: "/projects/edit/:projectId",
      component: EditProjectView,
    },
  ],
});

export default router;
