<script setup lang="ts"></script>

<template>
  <header class="app-header">
    <h1 class="app-title">MyApp</h1>
    <span class="username">Username</span>
  </header>
</template>

<style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1266px;
    margin: 0 auto;
    padding: 2.5rem 0;
  }

  .app-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
  }

  .username {
    color: var(--secondary-text-color);
  }
</style>
