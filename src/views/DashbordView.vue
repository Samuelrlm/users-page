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
import websocketService from '../socket';

const store = useStore()
const userList = ref([]);

onMounted(async () => {
  websocketService.on('usersList', (usersList:any) => {
  // usersList é a lista de usuários recebida do servidor WebSocket
  console.log('Lista de Usuários:', usersList);
});
});

  
</script>

