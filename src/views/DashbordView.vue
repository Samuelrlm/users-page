<template>
  <PageWarper :namePage="pageName" iconPage="md-dashboard">
    <div class="w-full h-auto felx flex-wrap">
      <div
        class="p-2 rounded-md border bg-gray-300 mt-3 w-[350px] hover:opacity-80
          shadow-md hover:shadow-none transition-all ease-in-out duration-300"
        v-for="(user, index) in sessionUsersList" :key="index"
        @click="handleClickCardUser(user._id)"
        >
        <p><span class="font-bold">Id: </span>{{ user._id }}</p>
        <p><span class="font-bold">Nome: </span>{{ user.name }}</p>
        <p><span class="font-bold">Email: </span>{{ user.email }}</p>
        <p><span class="font-bold">Nivel: </span>{{ user.permissionLevel }}</p>
      </div>

      <div class="w-full rounded-lg bg-black p-4" v-if="modal">
        
      </div>
    </div>
  </PageWarper>
</template>

<script lang="ts">
import { ref } from 'vue'
import websocketService from '../socket'
import PageWarper from '../components/PageWarper/PageWarper.vue'

export default {
  components: {
    PageWarper
  },
  setup() {
    let modal = ref(false)

    interface User {
      _id: string;
      name: string;
      email: string;
      permissionLevel: number;
    } 

    const pageName = ref('Dashboard')
    const sessionUsersList = ref<User[]>([])

    websocketService.on('usersList', (usersList: any) => {
      sessionUsersList.value = usersList
    })

    function handleClickCardUser(id: string) {
      console.log(id)
      modal.value = !modal.value
    }
    
    return {
      pageName,
      sessionUsersList,
      handleClickCardUser,
      modal
    }
  }
}
</script>
