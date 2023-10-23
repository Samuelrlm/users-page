<template>
  <PageWarper :namePage="pageName" iconPage="md-dashboard">
    <div class="w-full h-auto felx flex-wrap">
      <div class="p-2 rounded-md border bg-gray-300 mt-3 w-[400px]" v-for="(user, index) in sessionUsersList" :key="index">
        <p>{{ user._id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.permissionLevel }}</p>
      </div>

      <div class="w-full rounded-lg">
        
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
      console.log('usersList', usersList)
    })


    return {
      pageName,
      sessionUsersList
    }
  }
}
</script>
