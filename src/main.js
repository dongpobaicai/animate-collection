import { createApp } from "vue";
import App from "./App.vue";
import useAntd from "./core/useAntd";

const app = createApp(App);

app.use(useAntd);
app.mount("#app");
