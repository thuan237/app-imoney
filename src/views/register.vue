<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form
        @submit.prevent="onsubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full name</span>
            <input
              id="fullName"
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            />
          </label>
        </div>
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              placeholder="Example"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
      <!-- End: Form -->

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link to="/login" class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
      <!-- End: Direction -->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function onsubmit() {}
    return { onsubmit };
  },
};
</script>
