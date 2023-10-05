<template>
  <div class="w-[99vw] h-screen flex">
    <div class="w-1/2 h-full bg-blue-900 rounded-tr-xl max-md:hidden"></div>
    <div class="w-1/2 h-full flex items-center justify-center max-md:w-full">
      <div class="w-full h-[60%] flex items-center justify-center flex-col">
        <form @submit.prevent="login" class="bg-white rounded-lg shadow-md w-[80%] h-[90%]">
          <div class="w-full h-[15%] flex items-center justify-center">
            <p class="text-2xl text-blue-800 font-bold">LOGIN</p>
          </div>
          <div class="w-full h-[70%] flex flex-col gap-4 items-center">
            <div class="w-[85%] gap-2">
              <label for="user"> Usuário </label>
              <input
                type="text"
                id="user"
                v-model="user.email"
                class="w-full h-[40px] border-2 focus:border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              />
            </div>
            <div class="w-[85%] gap-2">
              <label for="password"> Senha </label>
              <input
                type="password"
                id="password"
                v-model="user.password"
                class="w-full h-[40px] border-2 focus:border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              />
            </div>
          </div>
          <div class="w-full h-[15%] flex items-center justify-center">
            <button
              type="submit"
              class="w-[85%] h-[70%] bg-blue-800 text-white font-bold text-xl rounded-lg shadow-md hover:opacity-80 transition-all ease-in-out duration-300"
            >
              Entrar
            </button>
          </div>
        </form>
        <div class="w-[75%] h-[8%] flex justify-end items-center">
          <span
            >Não possui uma conta?
            <a
              href="/register"
              class="text-blue-900 hover:text-blue-700 transition-all ease-in-out duration-200"
            >
              Cadastre-se aqui!</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import api from '../services/api'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import websocketService from '../socket';

const router = useRouter()
const store = useStore()
const user = reactive({
  email: '',
  password: ''
})

onMounted(async () => {
  const user = store.state.user
  const token = localStorage.getItem('token')

  if (token && user.token !== '' && user.token !== null && user.token !== undefined) {
    const isAuth = await api.post('/auth/verify-token', { token: user.token })

    if (isAuth?.data?.token === true) {
      router.push({ name: 'DashboardView' })
    }
  }
})

async function login() {
  try {
    const response = await api.post('auth/login', user)
    const data = response.data
    store.dispatch('setUser', data)

    toast.success('Login realizado com sucesso!')

    localStorage.setItem('token', data.token)    

    if (!localStorage.getItem('websocketId')) {
      websocketService.connect();
    }

    setTimeout(() => {
      router.push('/dashboard')
    }, 1000)
  } catch (error: any) {
    toast.error(
      error?.response?.data.message ? error.response.data.message : error.response.data.error
    )
  }
}
</script>
