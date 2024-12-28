<template>
    <p class="text-3xl"> {{ question }}</p>
    <p>{{ answer }}</p>
</template>

<script setup>
    const props = defineProps({
        question: String,
        answer: String
    })
    console.log("Question")
</script>