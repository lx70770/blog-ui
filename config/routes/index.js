import publicRoutes from './public'
import HomeRoutes from './home'

export default [
  {
    path: '/public',
    component: '../layouts/PublicLayout',
    routes: publicRoutes
  },
  {
    path: '/main',
    component: '../layouts/MainLayout',
    routes: HomeRoutes
  }
]
