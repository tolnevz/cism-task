<script setup lang="ts">
  import { computed } from 'vue';
  import { useDocumentStore } from '@/stores/documentStore';
  import ErrorMessage from './ErrorMessage.vue';

  const documentStore = useDocumentStore();

  const documents = computed(() => documentStore.documents);
  const selectedDocument = computed(() => documentStore.selectedDocument);
  const loading = computed(() => documentStore.loading);
  const error = computed(() => documentStore.error);
  const hasDocuments = computed(() => documentStore.hasDocuments);

  const selectDocument = (doc: any) => {
    documentStore.selectDocument(doc);
  };
</script>

<template>
  <div class="document-list">
    <h3 class="section-title">Результаты</h3>

    <div v-if="loading" class="loading-state">
      <p>Загрузка...</p>
    </div>

    <ErrorMessage v-else-if="error" :error="error" />

    <div v-else-if="!hasDocuments" class="empty-state">
      <p>Ничего не найдено</p>
    </div>

    <ul v-else class="documents">
      <li v-for="doc in documents" :key="doc.id" class="document-item" :class="{ selected: selectedDocument?.id === doc.id }" @click="selectDocument(doc)">
        <div class="document-thumbnail">
          <img v-if="doc.image" :src="doc.image" alt="Документ" />
          <div v-else class="placeholder-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
        </div>
        <div class="document-info">
          <h4 class="document-name">{{ doc.name }}</h4>
          <p class="document-size">{{ doc.size }} Мб</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .documents {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .document-item {
    display: flex;
    align-items: center;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: var(--white-color);
  }

  .document-item:hover {
    background-color: var(--body-color);
  }

  .document-item.selected {
    background-color: var(--selection-color);
    color: var(--white-color);
  }

  .document-item.selected .document-thumbnail {
    border-right: 1px solid var(--selection-color);
  }

  .document-item.selected .document-name,
  .document-item.selected .document-size {
    color: var(--white-color);
  }

  .document-thumbnail {
    width: 70px;
    height: 70px;
    margin-right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--border-color);
  }

  .document-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-icon {
    width: 24px;
    height: 24px;
    color: var(--secondary-text-color);
  }

  .document-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .document-name {
    font-weight: 500;
    margin: 0;
  }

  .document-size {
    margin: 0;
    font-size: 0.85rem;
    color: var(--secondary-text-color);
  }

  .loading-state,
  .error-state,
  .empty-state {
    padding: 1rem 0;
    color: var(--secondary-text-color);
  }

  .loading-state {
    opacity: 0.7;
  }

  .error-state {
    color: var(--error-color);
  }
</style>
