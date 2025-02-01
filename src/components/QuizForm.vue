<script setup>
import { ref, onMounted } from "vue";
import folders from "@/api/folders";

let data = ref(null);

onMounted(async () => {
  data.value = await folders.getFolders();
  console.log(data.value);
});
</script>

<template>
  <form action="post" class="flex flex-col">
    <label for="folder">Folder</label>
    <select name="folder" id="folder" class="text-black">
      <option v-for="item in data">
        {{ item.name }}
      </option>
    </select>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" class="text-black" />
    <label for="description">Description</label>
    <input type="text" name="description" id="description" class="text-black" />
    <button type="submit" class="text-white">Submit</button>
  </form>
</template>
