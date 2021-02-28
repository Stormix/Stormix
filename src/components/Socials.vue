<template>
  <div class="py-4 mb-10">
    <ul class="flex flex-row gap-6 text-lg">
      <li v-for="social in socials" :key="social.title">
        <a :href="social.link" target="_blank" :title="`Follow Stromix on ${social.title}`">
          <span :class="social.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface Social {
  title: string;
  icon: string;
  link: string;
}
export default defineComponent({
  setup() {
    const socials: Social[] = [
      {
        title: "Facebook",
        icon: "ti-facebook",
        link: "https://www.facebook.com/stormiix",
      },
      {
        title: "Twitter",
        icon: "ti-twitter",
        link: "https://www.twitter.com/stormix_co",
      },
      {
        title: "Linkedin",
        icon: "ti-linkedin",
        link: "https://www.linkedin.com/in/anasmazouni/",
      },
      {
        title: "Instagram",
        icon: "ti-instagram",
        link: "https://instagram.com/stormix.co",
      },
      {
        title: "Github",
        icon: "ti-github",
        link: "https://github.com/stormix",
      },
      {
        title: "StackOverflow",
        icon: "ti-stack-overflow",
        link: "https://stackoverflow.com/users/3370660/stormix",
      },
      {
        title: "Medium",
        icon: "fab fa-medium-m",
        link: "https://medium.com/@anasmazouni",
      },
    ];

    return {
      socials,
    };
  },
});
</script>