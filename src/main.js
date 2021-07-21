import { createApp } from "vue";
import App from "./App.vue";

import components from "./components/UI";
import router from "./router/router";
import store from "./store";

import directives from "./directives";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((d) => {
  app.directive(d.name, d);
});
// import router from "./router";
// import store from "./store";

// createApp(App).use(store).use(router).mount("#app");

app.use(router).use(store).mount("#app");
