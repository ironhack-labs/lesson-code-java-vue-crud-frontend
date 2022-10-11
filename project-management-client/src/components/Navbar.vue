<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav className="Navbar">
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>

    <RouterLink to="/projects">
      <button>Projects</button>
    </RouterLink>
  </nav>
</template>
