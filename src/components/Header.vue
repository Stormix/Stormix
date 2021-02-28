<template>
  <div class="flex flex-row items-center w-full py-4">
    <img src="../assets/logo.png" alt="Stormix logo" class="h-10 ml-10">
    <Menu class="flex-1" />
    <LanguageDropdown />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageDropdown from './LanguageDropdown.vue'
import Menu from './Menu.vue'

export default defineComponent({
  components: { Menu, LanguageDropdown },
  setup () {


    return {}
  }
})
</script>
