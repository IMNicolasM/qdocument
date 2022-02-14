export default {
  documents: {
    permission: 'idocs.documents.manage',
    activated: true,
    authenticated: true,
    path: '/document/documents',
    name: 'qdocument.panel.documents',
    crud : import('@imagina/qdocument/_crud/documents'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master'),
    title: 'idocs.cms.sidebar.panelDocuments',
    icon: 'fas fa-folder-open',
    subHeader: {
      refresh: true,
    }
  }
}
