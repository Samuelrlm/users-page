<template>
  <div
    class="min-w-[330px] h-full shadow-md bg-white rounded-br-md border border-gray-300 flex flex-col"
  >
    <div class="w-full h-[20%] flex items-center justify-center">
      <UserCardVue />
    </div>
    <div class="w-full h-[80%] flex flex-col">
      <div class="w-full h-[90%] px-4">
        <NavigateOptionsVue />
      </div>
      <div class="w-full h-[10%] flex items-center justify-center">
        <div
            @click="logout"
          class="w-[90%] h-[50px] flex rounded-xl shadow-sm shadow-red-50 bg-red-100 items-center justify-center  hover:shadow-none hover:cursor-pointer hover:bg-red-200 transition-all ease-in-out duration-300"
        >
          <div class="w-full relative flex items-center justify-center">
            <p class="text-red-600 font-bold text-lg">SAIR</p>
            <div class="absolute right-0 w-[20%] flex items-center justify-center">
              <v-icon name="io-exit-outline" scale="1.5"  ffill="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigateOptionsVue from './NavigateOptions.vue'
import UserCardVue from './UserCard.vue'
import api from '../../services/api'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import websocketService from '../../socket';

export default defineComponent({
  name: 'SideBar',
  components: {
    UserCardVue,
    NavigateOptionsVue
  },
  setup() {
    const store = useStore()
    const router = useRouter()

   async function logout() {
        const token = localStorage.getItem('token')

        await api.post('session-user/logout', {
            token
        }).then(() => {
            toast.success('Logout realizado com sucesso!')
        }).catch(() => {
            toast.error('Erro ao realizar logout!')
        })
        websocketService.disconnect()
        await store.dispatch('logout')
        localStorage.removeItem('token')
        setTimeout(() => {
            router.push({ name: 'LoginView' })
        }, 1500)
    }
    return {
        logout
    }
  }
})
</script>
