<script setup lang="ts">
</script>

<template>
  <router-link class="hidden" to="/">Login</router-link>
  <router-link class="hidden" to="/register">Register</router-link>
  <router-link class="hidden" to="/dashboard">Dashboard</router-link>

  <router-view />
</template>