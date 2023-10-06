<template>
  <div class="w-screen h-screen flex">
      <SideBarVue />
      <div class="w-full h-full flex flex-col p-5">
        <div class="w-full gap-2 flex items-center" >
            <v-icon :name="iconPage" scale="2" />
            <p class="text-3xl font-bold text-gray-900">{{ namePage }}</p>
        </div>
        <div class="w-full h-auto overflow-scroll">
            <slot></slot>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBarVue from '../SideBar/SideBar.vue'

export default defineComponent({
  name: 'PageWarper',
  props: {
    namePage: {
      type: String,
      required: true
    },
    iconPage: {
      type: String,
      default: 'md-dashboard'
    }
  },
  components: {
    SideBarVue
  },
  setup() {
    return {}
  }
})
</script>
