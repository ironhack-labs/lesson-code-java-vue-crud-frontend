<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div className="TaskCard card">
    <h3>{{ task.title }}</h3>
    <h4>Description:</h4>
    <p>{{ task.description }}</p>
  </div>
</template>
