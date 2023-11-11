import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/interpretes',
      name: 'interpretes',
      component: () => import('../views/InterpreteView.vue'),
      children: [
        { path: '', component: () => import('../components/interprete/InterpreteList.vue') },
        { path: 'crear', component: () => import('../components/interprete/InterpreteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/interprete/InterpreteEdit.vue')
        }
      ]
    },
    {
      path: '/generos',
      name: 'generos',
      component: () => import('../views/GeneroView.vue'),
      children: [
        { path: '', component: () => import('../components/genero/GeneroList.vue') },
        { path: 'crear', component: () => import('../components/genero/GeneroCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/genero/GeneroEdit.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/', '/about', '/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
