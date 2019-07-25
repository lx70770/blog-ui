import publicRoutes from './public'
import MainRoutes from './main'

export default [
  {
    path: '/public',
    component: '../layouts/PublicLayout',
    routes: publicRoutes
  },
  {
    path: '/main',
    component: '../layouts/MainLayout',
    routes: MainRoutes
  }
]
