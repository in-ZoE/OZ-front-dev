import '@/assets/tailwind.css'; // Tailwind / Global Style
import '@/assets/main.css'; // 일반 커스텀 CSS

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VueAwesomePaginate from 'vue-awesome-paginate';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAwesomePaginate);

app.mount('#app');
