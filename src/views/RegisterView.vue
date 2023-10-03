<template>
  <div class="w-[99vw] h-screen flex items-center justify-center">
    <div class="w-[60%] h-[95%] bg-white shadow-md rounded-lg">
      <div class="w-full h-[10%] flex items-center justify-center">
        <p class="text-2xl font-bold">Cadastro</p>
      </div>
      <form @submit.prevent="cadastro" class="w-full h-[90%]">
        <div class="p-4 flex flex-col gap-2 w-full h-[90%]">
          <div v-for="(input, index) in inputs" :key="index" class="mb-4 flex flex-col w-full">
            <label :for="input.id" class="text-md">{{ input.label }}</label>
            <input
              required
              class="w-full h-[50px] px-2 border-b-2"
              :type="input.type"
              :id="input.id"
              v-model="user[input.id]"
              :placeholder="input.placeholder"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <p>Permissão do usuário</p>
            <div class="w-full flex">
              <div
                v-for="(input, index) in permissionLevel"
                :key="index"
                class="w-[33.33%] flex items-center justify-center flex-col"
              >
                <label :for="input.label">
                  {{ input.label }}
                </label>
                <input
                  class="w-[20px] h-[20px] border-2"
                  type="radio"
                  :name="'permissionLevel'"
                  :id="input.label"
                  :value="input.value"
                  v-model="user.permissionLevel"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[10%]">
          <button
            type="submit"
            class="w-[85%] h-[90%] bg-blue-500 text-white font-bold text-xl rounded-md flex items-center justify-center mx-auto"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import api from '../services/api'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const inputs = [
  {
    label: 'Nome',
    type: 'text',
    id: 'name',
    model: 'user.name',
    placeholder: 'Digite seu nome'
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
    model: 'user.email',
    placeholder: 'Digite seu email'
  },
  {
    label: 'Senha',
    type: 'password',
    id: 'password',
    model: 'user.password',
    placeholder: 'Digite sua senha'
  },
  {
    label: 'Confirmação de senha',
    type: 'password',
    id: 'passwordConfirmation',
    model: 'user.passwordConfirmation',
    placeholder: 'Confirme sua senha'
  }
]

const permissionLevel = [
  {
    label: 'Administrador',
    value: 2
  },
  {
    label: 'Editor',
    value: 1
  },
  {
    label: 'Visualizador',
    value: 0
  }
]

const user = reactive({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  permissionLevel: 0
})

async function cadastro() {
  try {
    if (user.password !== user.passwordConfirmation) {
      toast.error('As senhas não coincidem')
      return
    }
    await api.post('auth/signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      permissionLevel: user.permissionLevel
    })
    toast.success('Usuário cadastrado com sucesso')
  } catch (error: any) {
    toast.error(error.response.data.message)
  }
}
</script>
