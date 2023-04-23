<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom />
</template>
<script>
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationBottom from "@/components/NavigationBottom.vue";
export default {
  components: { NavigationBottom, NavigationHeader },
};
</script>
