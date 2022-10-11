<script setup>
import { ref, toRefs } from "vue";
import { useProjectStore } from "../stores/project";
import { useTaskStore } from "../stores/task";

const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
});

const { projectId } = toRefs(props);

const title = ref("");
const description = ref("");

const { addTask } = useTaskStore();
const { fetchProject } = useProjectStore();

async function handleSubmit() {
  addTask(title.value, description.value, projectId.value).then(() => {
    title.value = "";
    description.value = "";
    fetchProject(projectId.value);
  });
}
</script>
<template>
  <div className="AddTask">
    <h3>Add New Task</h3>

    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" name="title" v-model="title" />

      <label>Description:</label>
      <textarea type="text" name="description" v-model="description" />

      <button type="submit">Add Task</button>
    </form>
  </div>
</template>
