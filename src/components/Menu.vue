<template>
  <div class="flex items-center text-center">
    <ul class="flex flex-row mx-auto gap-14">
      <li v-for="i in Array(4)" :key="i" class="text-sm uppercase"><a href="#">Home</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {


    return {}
  }
})
</script>
