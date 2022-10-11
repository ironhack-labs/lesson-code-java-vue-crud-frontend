<script setup>
import { storeToRefs } from "pinia";
import { useProjectStore } from "../stores/project";
import { useRoute } from "vue-router";
import router from "../router";

const route = useRoute();
const projectId = route.params.projectId;

const { project } = storeToRefs(useProjectStore());
const { fetchProject, updateProject, deleteProject } = useProjectStore();

fetchProject(projectId);

async function handleFormSubmit() {
  updateProject(projectId).then((response) => {
    router.push(`/projects/${projectId}`);
  });
}

async function handleDeleteProject() {
  deleteProject(projectId).then(() => router.push("/projects"));
}
</script>

<template>
  <div className="EditProjectPage">
    <h3>Edit the Project</h3>

    <form @submit.prevent="handleFormSubmit">
      <label>Title:</label>
      <input type="text" name="title" v-if="project" v-model="project.title" />

      <label>Description:</label>
      <textarea
        name="description"
        v-if="project"
        v-model="project.description"
      />

      <button type="submit" value="Submit">Update Project</button>
    </form>
    <button @click="handleDeleteProject">Delete Project</button>
  </div>
</template>
