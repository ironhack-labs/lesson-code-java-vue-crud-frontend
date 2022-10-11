<script setup>
import { storeToRefs } from "pinia";
import ProjectCard from "../components/ProjectCard.vue";
import { useProjectStore } from "../stores/project";
import AddProject from "../components/AddProject.vue";

const { projects } = storeToRefs(useProjectStore());
const { fetchProjects } = useProjectStore();

fetchProjects();
</script>

<template>
  <AddProject />
  <div className="ProjectListPage">
    <ProjectCard
      v-if="projects"
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>
