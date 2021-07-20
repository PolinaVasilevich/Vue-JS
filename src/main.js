import { createApp } from "vue";
import App from "./App.vue";

import components from "./components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
// import router from "./router";
// import store from "./store";

// createApp(App).use(store).use(router).mount("#app");

app.mount("#app");
