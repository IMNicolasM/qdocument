import pages from 'src/setup/pages' // Get Pages from config

//Blog
export default [
  {
    title: 'idocs.cms.sidebar.adminGroup',
    icon: 'fa-light fa-folder-open',
    children: [
      pages.qdocument.documents, // posts setup
      pages.qdocument.categories, // categories setup
    ]
  },
]
