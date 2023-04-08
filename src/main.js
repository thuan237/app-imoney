import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import tailwind
import "./assets/style/tailwind.css";

import "./assets/style/global.css";

createApp(App).use(router).mount("#app");
