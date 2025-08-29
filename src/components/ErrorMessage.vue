<script setup lang="ts">
  defineProps<{
    error: string | null;
  }>();
</script>

<template>
  <div v-if="error" class="error-message">
    <p>{{ error }}</p>
  </div>
</template>

<style scoped>
  .error-message {
    color: var(--error-color);
    padding: 0.75rem;
    background-color: var(--error-bg-color);
    border: 1px solid var(--error-border-color);
    border-radius: 6px;
    margin: 1rem 0;
  }
</style>
