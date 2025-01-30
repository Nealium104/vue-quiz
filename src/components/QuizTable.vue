<script setup>
import questionService from "@/api/questions";
import Question from "./Question.vue";
import { onMounted, ref } from "vue";

let questions = ref(null);

onMounted(async () => {
  questions.value = await questionService.getQuestions(1);
});
</script>

<template>
  <div class="bg-gray-700 p-4">
    <ul>
      <li v-for="question in questions">
        <Question :question="question" />
      </li>
    </ul>
  </div>
</template>
