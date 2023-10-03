
<template>
  <div>
    <h1>Home</h1>
    <div>
      <h2>Usuário: {{ user.email }}</h2>
      <h2>: {{ user.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
 import { useStore } from 'vuex';

const store = useStore()
const user = store.getters.getUser;

console.log(user)
</script>
