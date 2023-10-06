<template>
    <div class="w-full gap-3 max-h-full overflow-y-auto">
        <div
            v-for="(page, index) in pages"
            @click="navigate(page)"
            :key="index"
            class="w-full h-[50px] flex items-center justify-center rounded-xl p-3 cursor-pointer relative hover:bg-[#eeeeee] transition-all ease-in-out duration-300 mb-3"
            :class="page.url === pageUrlNow ? 'bg-[#d3e3ff] rounded-lg ' : ''"
        >
            <p class="text-xl font-bold text-gray-900">{{ page.name }}</p>
            <div class="absolute w-[20%] flex items-center justify-center left-0">
                <v-icon :name="page.icon" scale="1.5" />
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'


export default defineComponent({
    name: 'NavigateOptions',
    components: {
    },
    setup () {
        const router = useRouter()
        const getUrl = window.location.href
        const url = getUrl.split('/')
        const pageUrlNow = url[url.length - 1]

        const pages = [
            {
                name: 'Dashboard',
                icon: 'md-dashboard',
                url: 'dashboard'
            },
            {
                name: 'Usuários',
                icon: 'bi-people-fill',
                url: 'users'
            }
        ]

        function navigate(page: any) {
            if (page.url !== pageUrlNow) {
                router.push(`/${page.url}`)
            } else {
                return
            }
        }

        return {
            pageUrlNow,
            pages,
            navigate
        }
    }
})
</script>
