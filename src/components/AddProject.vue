<script setup>
import { ref } from "vue";
import { useProjectStore } from "../stores/project";

const title = ref("");
const description = ref("");

const { addProject, fetchProjects } = useProjectStore();

async function handleSubmit() {
  addProject(title.value, description.value).then(() => {
    title.value = "";
    description.value = "";
    fetchProjects();
  });
}
</script>

<template>
  <div className="AddProject">
    <h3>Add Project</h3>

    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" name="title" v-model="title" />

      <label>Description:</label>
      <textarea type="text" name="description" v-model="description" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
