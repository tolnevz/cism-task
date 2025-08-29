<script setup lang="ts">
  import SearchInput from '@/components/SearchInput.vue';
  import DocumentList from '@/components/DocumentList.vue';
  import DocumentPreview from '@/components/DocumentPreview.vue';
  import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="dashboard-view">
    <AppHeader />

    <main>
      <div class="container">
        <div class="dashboard-container">
          <div class="sidebar">
            <SearchInput />
            <DocumentList />
          </div>

          <div class="content-area">
            <DocumentPreview />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .dashboard-view {
    min-height: 100vh;
    background-color: var(--body-color);
  }

  .container {
    max-width: 1266px;
    margin: 0 auto;
  }

  .dashboard-container {
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--white-color);
    height: calc(100vh - 150px);
  }

  .sidebar {
    flex: 0.6;
    padding: 1.5rem;
    border-right: 1px solid var(--border-color);
    background-color: var(--sidebar-color);
    overflow: auto;
  }

  .content-area {
    flex: 2;
    padding: 1.5rem;
    overflow: auto;
  }

  @media (max-width: 768px) {
    .dashboard-container {
      margin: 1.5rem;
      height: unset;
    }
    .sidebar {
      margin: 1.5rem;
      border-right: none;
      overflow: unset;
    }
    .content-area {
      overflow: unset;
    }
  }
</style>
