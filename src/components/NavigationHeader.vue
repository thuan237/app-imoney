<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8" v-if="meta.leading">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 overflow-hidden rounded-full">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar image"
              size="sm"
              class="w-full h-auto object-cover"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div class="flex items-center">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"> </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
