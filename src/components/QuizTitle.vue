<template>
    <div class="bg-anki-gray-200 px-2">
        <ul>
            <li v-for="quiz in folder.quizzes" :key="quiz.id">
                <span> {{ quiz.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps({
        folder: {
            type: Object,
            required: true
        }
    })
</script>
