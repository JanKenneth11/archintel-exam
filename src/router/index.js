import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AllMedia from '../views/AllMedia.vue'
import UserPage from '../views/UserPage.vue'
import CompanyPage from '../views/CompanyPage.vue'

import useUserStore from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        requiresAuth: false,
        permission: ['Writer', 'Editor']
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true,
        permission: ['Writer', 'Editor']
      }
    },
    {
      path: '/all-media',
      name: 'all-media',
      component: AllMedia,
      meta: {
        requiresAuth: true,
        permission: ['Writer', 'Editor']
      }
    },
    {
      path: '/user',
      name: 'users',
      component: UserPage,
      meta: {
        requiresAuth: true,
        permission: ['Editor']
      }
    },
    {
      path: '/company',
      name: 'companies',
      component: CompanyPage,
      meta: {
        requiresAuth: true,
        permission: ['Editor']
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  localStorage.setItem('from',from.fullPath)
  const userStore = useUserStore()
  let user = null
  userStore.getAuthUser(to.meta.permission)
  if(Object.keys(userStore.user).length > 0) {
    user = userStore.user
  } else {
    user = null
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (!requiresAuth && user) {
    next('/dashboard')
  } else if (requiresAuth && !user) {
    next('/login')
  } else if (requiresAuth && user && !user.isPermitted) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
