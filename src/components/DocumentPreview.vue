<script setup lang="ts">
  import { computed } from 'vue';
  import { useDocumentStore } from '@/stores/documentStore';

  const documentStore = useDocumentStore();

  const selectedDocument = computed(() => documentStore.selectedDocument);
  const isDocumentSelected = computed(() => documentStore.isDocumentSelected);
  const canDelete = computed(() => documentStore.canDelete);

  const downloadDocument = () => {
    documentStore.downloadDocument();
  };

  const deleteDocument = () => {
    documentStore.deleteDocument();
  };
</script>

<template>
  <div class="document-preview">
    <div v-if="!isDocumentSelected" class="no-document-selected">
      <p>Выберите документ, чтобы посмотреть его содержимое</p>
    </div>

    <div v-else class="document-content">
      <div class="document-image-wrapper">
        <img v-if="selectedDocument?.image" :src="selectedDocument?.image" alt="Документ" class="document-image" />
        <div v-else class="image-placeholder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
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

      <div class="document-body">
        <h2 class="document-title">{{ selectedDocument?.name }}</h2>
        <div class="action-buttons">
          <button class="btn btn-download" @click="downloadDocument"> Скачать </button>
          <button class="btn btn-delete" @click="deleteDocument" :disabled="!canDelete"> Удалить </button>
        </div>
        <div class="document-description">
          <h3 class="description-title">Описание:</h3>
          <p class="description-text">{{ selectedDocument?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .document-preview {
    padding: 1.8rem;
    display: flex;
    min-height: 400px;
    height: 100%;
  }

  .no-document-selected {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
  }

  .document-content {
    display: flex;
    gap: 4rem;
    align-items: start;
  }

  .document-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
  }

  .document-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .document-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 0 auto;
  }

  .document-image {
    max-width: 400px;
    max-height: 400px;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .image-placeholder {
    width: 128px;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
  }

  .document-description {
    margin-top: 2rem;
  }

  .description-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }

  .description-text {
    margin: 0;
    line-height: 1.5;
    color: var(--secondary-text-color);
  }

  @media (max-width: 768px) {
    .document-preview {
      align-items: center;
    }
    .document-content {
      flex-direction: column;
      gap: 2rem;
    }
    .document-image-wrapper {
      width: 100%;
    }
    .document-image-wrapper img {
      max-width: 100%;
    }
  }
</style>
