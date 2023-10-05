<template>
  <div>
    <h1>Home</h1>
    <div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const userList = ref([]);

onMounted(async () => {
  store.state.websocket.socket.on('usersList', (users: any) => {
  userList.value = users;

  console.log(userList.value);
  });
});

  
</script>

