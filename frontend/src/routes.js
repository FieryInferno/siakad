import React from 'react';

const Siswa = React.lazy(() => import('./views/pages/Siswa'));

const routes = [
  {path: '/dashboard', exact: true, name: 'Dashboard', component: Siswa},
  {path: '/siswa', exact: true, name: 'Siswa', component: Siswa},
];

export default routes;
