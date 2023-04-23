<!-- eslint-disable prettier/prettier -->
<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="absolute top-0 left-1/2 -translate-x-1/2"></div>
    <router-link :to="{ name: 'newTransaction', params: {} }">
      <div
        data-circle-inset
        class="absolute flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 -translate-x-1/2"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </router-link>
  </footer>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        text: "Home",
        name: "Home",
      },
      {
        icon: "t2ico-chart",
        text: "Report",
        name: "Home",
      },
      {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "Home",
      },
      {
        icon: "t2ico-profile",
        text: "Home",
        name: "profile",
      },
    ]);
    return { navItems };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle] {
  @apply bg-dark-light;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer > div[data-circle] > div {
  font-family: "t2ico";
}
</style>
