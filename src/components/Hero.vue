<template>
  <div class="flex">
    <div class="flex flex-col w-1/2 my-auto">
      <div class="relative pl-12 mt-4 text-purple-600 uppercase intro">Hello</div>
      <div class="my-10 text-5xl">I'm <span class="text-purple-600">Anas</span> Mazouni</div>
      <div class="text-sm">
        I'm a self taught junior Software Engineer. Skilled in PHP, JS, Python,
        C++ and most Frontend Technologies.
      </div>
      <div class="mt-16">
        <Button>Resume</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  components: { Button },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.intro {
  &:before {
    position: absolute;
    top: 10px;
    left: 0;
    width: 35px;
    height: 1px;
    background: #7943eb;
    content: "";
  }
}
</style>