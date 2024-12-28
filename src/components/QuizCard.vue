  
<template>
    <section v-if="question" class="bg-anki-gray-300 rounded-xl w-1/2 mx-auto p-8 flex flex-col justify-between min-h-80"> 
        <article> 
          <p class="text-3xl"> {{ question.question }}</p>
          <p v-show="isVisible" class="bg-anki-gray-100 rounded-xl h-40 px-4">{{ question.answer }}</p>
        </article>
        <div class="flex justify-between">
          <button @click="isVisible = !isVisible" class="bg-anki-gray-100 px-4 py-2 rounded-full w-20 text-center hover:scale-110 trans
          ition duration-150">Show</button>
          <div v-show="isVisible" class="flex gap-2">
            <button class="bg-anki-gray-100 px-4 py-2 rounded-full w-20 text-center hover:scale-110 trans
          ition duration-150 text-green-500">Easy</button>
            <button class="bg-anki-gray-100 px-4 py-2 rounded-full w-20 text-center hover:scale-110 trans
          ition duration-150 text-blue-500">Good</button>
            <button class="bg-anki-gray-100 px-4 py-2 rounded-full w-20 text-center hover:scale-110 trans
          ition duration-150 text-red-500">Hard</button>
          </div>
          <button class="bg-anki-gray-100 px-4 py-2 rounded-full w-20 text-center hover:scale-110 transition duration-150">Edit</button>
        </div>
      </section>
      <p v-else>Loading questions...</p>
  </template>

<script setup>
  import { ref } from "vue"

    const question = { 
        id: 1,
        question: "Is this right?",
        answer: "I suppose..."
      }

      let isVisible = ref(false);
  </script>