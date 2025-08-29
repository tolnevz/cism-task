import type { Document } from '@/models';

export const downloadDocument = async (doc: Document, filename: string): Promise<void> => {
  const blob = new Blob([doc.name + '\n\n' + doc.description], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
