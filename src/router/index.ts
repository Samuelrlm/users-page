import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashbordView from '../views/DashbordView.vue'
import { useStore } from 'vuex'
import api from '@/services/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashbordView,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.auth) {
    const store = useStore()
    const user = store.state.user
    
    if (user.token !== '' && user.token !== null && user.token !== undefined) {
      const isAuth = await api.post('/auth/verify-token', { token: user.token })

      if (isAuth?.data?.token === true) {
        next()
      } else {
        next({ name: 'LoginView' })
      }
    } else {
      next({ name: 'LoginView' })
    }
  } else {
    next()
  }
})

export default router
