<script setup lang="ts">
  import DashboardView from './views/DashboardView.vue';
</script>

<template>
  <div id="app">
    <DashboardView />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--body-color);
    color: var(--text-color);
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 768px) {
    .dashboard-container {
      flex-direction: column;
    }

    .sidebar,
    .content-area {
      flex: none;
    }

    .app-header {
      flex-direction: column;
      gap: 1rem;
    }

    .username {
      order: -1;
    }
  }
</style>
