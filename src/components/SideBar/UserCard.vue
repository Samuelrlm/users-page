<template>
    <div class="w-[80%] h-[50%] flex bg-[#e1e1e1] rounded-lg items-center">
        <div class="w-[30%] h-full flex items-center justify-center">
            <div class="w-[45px] h-[45px] rounded-full bg-mainColor">
                <p class="text-[30px] text-white flex items-center justify-center">{{ firstLetter }}</p>
            </div>
        </div>
        <div class="w-[70%] h-full flex justfy-center flex-col">
            <div class="w-full flex gap-2 pt-4">
                <p class="">{{ userName }}</p>
                <div class="w-[10px] h-[10px] rounded-full bg-green-600" />
            </div>
            <p class="italic text-gray-600">{{ permission }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'


export default defineComponent({
    name: 'UserCard',
    setup (
    ) {
        const store = useStore()
        const userName = store.state.user.name
        const permissionLevel = store.state.user.permissionLevel

        const getFirstLetterName = () => {
            return userName[0]
        }

        const switchPermissionLevel = () => {
            switch (permissionLevel) {
                case 2:
                    return 'Administrador'
                case 1:
                    return 'Editor'
                case 0:
                    return 'Usuário'
                default:
                    return 'Usuário'
            }
        }

        const firstLetter = getFirstLetterName()
        const permission = switchPermissionLevel()

        return {
            userName,
            firstLetter,
            permission
        }
    }
})
</script>
