<template>
  <PageWarper :namePage="pageName" iconPage="md-dashboard">
    <div class="w-full h-auto">
      <div class="" v-for="(user, index) in sessionUsersList" :key="index">
        <p>{{ user.email }}</p>
      </div>
    </div>
  </PageWarper>
</template>

<script lang="ts">
import { onMounted, ref, onBeforeMount  } from 'vue'
import websocketService from '../socket'
import PageWarper from '../components/PageWarper/PageWarper.vue'

export default {
  components: {
    PageWarper
  },
  setup() {
    const pageName = ref('Dashboard')
    const sessionUsersList = ref([])

    onBeforeMount(async () => {
      await websocketService.on('sessionUsersList', (usersList: any) => {
        sessionUsersList.value = usersList
      })
    })


    return {
      pageName,
      sessionUsersList
    }
  }
}
</script>
