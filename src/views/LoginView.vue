<template>
  <div class="w-screen h-screen flex">
    <div class="w-1/2 h-full bg-blue-900 rounded-tr-xl max-md:hidden"></div>
    <div class="w-1/2 h-full flex items-center justify-center max-md:w-full">
      <form @submit.prevent="login" class="bg-white rounded-lg shadow-md w-[80%] h-[50%]">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import api from '../services/api'

const user = reactive({
  email: '',
  password: ''
})

async function login() {
  try {
    const response = await api.post('auth/login', user)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>
