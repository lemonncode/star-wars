import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { useRoute, createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  useRoute: useRoute(),
  routes,
});

app.use(router);

app.mount("#app");
