<script setup>
import { RouterLink } from "vue-router";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div className="ProjectCard card">
    <RouterLink :to="`/projects/${project.id}`">
      <h3>{{ project.title }}</h3>
    </RouterLink>
    <p :style="{ maxWidth: '400px' }">{{ project.description }}</p>
  </div>
</template>
