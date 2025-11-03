
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/layla-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/layla-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/layla-portfolio/work"
  },
  {
    "renderMode": 2,
    "route": "/layla-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/layla-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/layla-portfolio",
    "route": "/layla-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8398, hash: 'acba03a338eade275d4c12ca38eca770f86c056892c0f13c4e99ffeeb13b46ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4518, hash: 'd09bae5ae49b8349104d134a28c32ecf93a93535d34ef207b16456fbf7ee5115', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 49776, hash: 'af4da0047cf5ffd1745da00f81c62161a77aa87f99df7b2e57ebb858c3d2a949', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'work/index.html': {size: 49776, hash: 'af4da0047cf5ffd1745da00f81c62161a77aa87f99df7b2e57ebb858c3d2a949', text: () => import('./assets-chunks/work_index_html.mjs').then(m => m.default)},
    'index.html': {size: 49776, hash: 'af4da0047cf5ffd1745da00f81c62161a77aa87f99df7b2e57ebb858c3d2a949', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 49776, hash: 'af4da0047cf5ffd1745da00f81c62161a77aa87f99df7b2e57ebb858c3d2a949', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'main-IIO3AIVH.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-D7TR4DIO.css': {size: 316376, hash: 'Cxj/XtACrnA', text: () => import('./assets-chunks/styles-D7TR4DIO_css.mjs').then(m => m.default)}
  },
};
