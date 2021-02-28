<template>
 <div class="w-full h-full app">
   <div class="flex flex-col h-screen">
    <Header />
    <Hero class="flex-1 ml-32" />
    <Socials class="ml-32"/>
   </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Socials from './components/Socials.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Hero,
    Socials
  }
})
</script>