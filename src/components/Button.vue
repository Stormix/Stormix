<template>
  <button class="px-8 py-4 text-sm tracking-widest uppercase" :class="buttonClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export type ButtonVariants = 'primary' | 'secondary' | 'success'

export default defineComponent({
  props: {
    variant: {
      type: String as () => ButtonVariants,
      default: 'primary'
    },
  },
  computed: {
    buttonClasses() {
      switch (this.variant) {
        case 'primary':
          return "bg-purple-600 text-white"
        default:
          return ''
      }
    }
  },
})
</script>
