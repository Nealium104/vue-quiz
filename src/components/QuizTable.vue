<template>
    <section class="bg-anki-gray-200 rounded-xl p-8 mx-auto max-w-[600px] mt-8">
        <h2 class="text-2xl">Folders</h2>
        <ul>
            <li v-for="folder in folders" 
                @click="loadQuizTitle(folder)"
                :key="folder.id" 
                class="border-t-2 border-anki-gray-300">
            <span>+</span>
                {{ folder.name }}
                <component v-if="folder.showComponent" :is="folder.component" :folder="folder"/>
            </li>
        </ul>
    </section>
    <div>
        Edit
    </div>

</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import folderApi from '@/api/folders'

    const folders = ref([])
    const quiz = ref(null)

    console.log(folders)

    onMounted(() => {
        const fetchFolders = async () => folders.value = await folderApi.getFolders();
        fetchFolders();
    })

</script>
