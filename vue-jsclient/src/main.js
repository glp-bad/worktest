import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appHelper from "@/plugin/appHelper";

let app = createApp(App);

// 2. Assign the global variable before mounting    // app.config.globalProperties.$globalVar = 'globalVar';

app.use(store).use(router).use(appHelper).mount('#app');
