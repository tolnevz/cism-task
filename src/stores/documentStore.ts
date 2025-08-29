import { defineStore } from 'pinia';
import type { Document } from '@/models';
import { useHttpService } from '@/composables/useHttpService';
import { downloadDocument } from '@/helper/helper';

interface State {
  documents: Document[];
  selectedDocument: Document | null;
  searchTerm: string;
  loading: boolean;
  error: string | null;
}

export const useDocumentStore = defineStore('document', {
  state: (): State => ({
    documents: [],
    selectedDocument: null,
    searchTerm: '',
    loading: false,
    error: null,
  }),

  getters: {
    hasDocuments(): boolean {
      return this.documents.length > 0;
    },

    isDocumentSelected(): boolean {
      return !!this.selectedDocument;
    },

    canDelete(): boolean {
      return this.selectedDocument?.image !== undefined && this.selectedDocument?.image !== null;
    },
  },

  actions: {
    async searchDocuments(search: string) {
      this.loading = true;
      this.error = null;

      try {
        const response = await useHttpService().get<Document[]>(`/user/docs`, { search });

        if (response.error) {
          this.error = response.error.toString();
          this.documents = [];
        } else {
          this.documents = response.data || [];
        }
      } catch (error) {
        this.error = `Failed to load documents. ${error}`;
        this.documents = [];
      } finally {
        this.loading = false;
      }
    },

    selectDocument(document: Document) {
      this.selectedDocument = document;
    },

    resetDocuments() {
      this.documents = [];
      this.selectedDocument = null;
    },

    clearSelection() {
      this.selectedDocument = null;
    },

    setSearchTerm(term: string) {
      this.searchTerm = term;
    },

    async downloadDocument() {
      if (!this.selectedDocument) return;

      await downloadDocument(this.selectedDocument, `${this.selectedDocument.name}.txt`);
    },

    async deleteDocument() {
      // Типа удаляем документ
      if (this.selectedDocument) {
        this.documents = this.documents.filter((doc) => doc.id !== this.selectedDocument?.id);
        this.clearSelection();
      }
    },
  },
});
