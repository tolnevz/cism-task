<script setup lang="ts">
  import { watch } from 'vue';
  import { useDocumentStore } from '@/stores/documentStore';
  import { storeToRefs } from 'pinia';

  const documentStore = useDocumentStore();
  const { searchTerm } = storeToRefs(documentStore);
  let debounceTimer: number | undefined = undefined;

  watch(searchTerm, newTerm => {
    documentStore.setSearchTerm(newTerm);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearch();
    }, 500);
  });

  const handleSearch = () => {
    documentStore.clearSelection();

    if (!searchTerm.value) {
      documentStore.resetDocuments();
      return;
    }
    documentStore.searchDocuments(searchTerm.value);
  };
</script>

<template>
  <div class="search-input">
    <label for="search" class="section-title">Поиск документа</label>
    <input id="search" v-model="searchTerm" type="text" placeholder="Введите ID документа" @keyup.enter="handleSearch" class="input-field" />
  </div>
</template>

<style scoped>
  .search-input {
    margin-bottom: 2rem;
  }

  .input-field {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    transition: border-color 0.2s ease;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--border-color-focus);
  }
</style>
