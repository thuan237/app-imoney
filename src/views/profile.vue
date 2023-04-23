<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Start: info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://www.w3schools.com/howto/img_avatar.png"
            size="xs"
            alt="User's is profile avatar"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">Sky Albert</div>
        <p class="font-semibold text-gray-400 mt-1">thuan.237@gmail.com</p>
      </div>
    </div>
  </div>
  <!-- End: info -->

  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-8">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="profileOption in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="[
                    profileOption.textColor ? profileOption.textColor : '',
                  ]"
                >
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- End: Menu -->
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          parmas: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "Home",
          parmas: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Home",
          parmas: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          parmas: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "login",
          parmas: {},
        },
        textColor: "text-red",
      },
    ]);
    return { profileOptions };
  },
};
</script>
