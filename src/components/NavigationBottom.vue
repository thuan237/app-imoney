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
footer#footer::before,
footer#footer::after {
  @apply absolute;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer::before {
  @apply bg-dark-light;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}
footer#footer::after {
  @apply -top-6 flex items-center justify-center text-white;
  @apply w-12 h-12 bg-primary rounded-full cursor-pointer;

  content: "\e921";
  font-family: "t2ico";
}
</style>
