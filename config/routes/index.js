import publicRoutes from './public'
import MainRoutes from './main'
import BlogRoutes from './blog'

export default [
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/public',
    component: '../layouts/PublicLayout',
    routes: publicRoutes
  },
  {
    path: '/main',
    component: '../layouts/MainLayout',
    routes: [...MainRoutes, ...BlogRoutes]
  }
]
