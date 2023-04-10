<template>
  <!-- test pull request 4-->
  <component :is="layout">
    <!-- hien thi du lieu trong component theo tung router, khi go home thi direct toi home -->
    <router-view />
  </component>
</template>

<script>
import { PUBLIC_LAYOUT } from "@/constants";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
