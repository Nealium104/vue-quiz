<script setup>
import { defineProps } from "vue";

defineProps({
  question: Object,
});
</script>

<template>
  <div>
    {{ question.question_text }}
  </div>
  <p>
    {{ question.answer_text }}
  </p>
</template>
