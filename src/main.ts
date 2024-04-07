import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Link from "./components/Link.vue"
import Link2 from "./components/Link2.vue"

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Link },
    { path: '/xxx', component: Link2 }
  ]
});

const app = createApp(App)
app.use(router)
app.mount("#app");
