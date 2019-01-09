export const gameRoutes = [
  {
    path: '/',
    name: 'game',
    component: () => import('./pages').then(({ Game }) => Game),
  },
]
