<script setup>
import { storeToRefs } from "pinia";
import { useProjectStore } from "../stores/project";
import { RouterLink, useRoute } from "vue-router";
import AddTask from "../components/AddTask.vue";
import TaskCard from "../components/TaskCard.vue";

const route = useRoute();
const projectId = route.params.projectId;

const { project } = storeToRefs(useProjectStore());
const { fetchProject } = useProjectStore();

fetchProject(projectId);
</script>

<template>
  <div className="ProjectDetails">
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>

    <AddTask :projectId="projectId" />

    <TaskCard
      v-for="task in project.tasks"
      v-if="project && project.tasks"
      :task="task"
      className="TaskCard card"
      key="{task._id}"
    />

    <RouterLink to="/projects">
      <button>Back to projects</button>
    </RouterLink>

    <RouterLink :to="`/projects/edit/${projectId}`">
      <button>Edit Project</button>
    </RouterLink>
  </div>
</template>
