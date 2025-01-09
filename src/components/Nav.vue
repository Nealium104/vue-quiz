<script setup>
import { ref } from "vue";
let isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const due = 10;
</script>

<template>
  <nav class="text-xl font-semibold relative">
    <div class="w-fit ml-auto p-4" @click="toggleMenu">
      <img src="../../public/more_vert.svg" alt="more button" />
    </div>
    <ul
      class="flex flex-col absolute gap-4 justify-around items-center w-full h-screen bg-white/20"
      v-show="isOpen"
    >
      <li>Card Browser (not implemented)</li>
      <li>Add</li>
      <li>Browse</li>
      <li>Stats</li>
      <li>Sync</li>
    </ul>
  </nav>
</template>
