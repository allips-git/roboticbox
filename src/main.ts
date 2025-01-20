import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'

import { definePreset } from '@primevue/themes';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import 'primeicons/primeicons.css'; // 아이콘 CSS
const app = createApp(App)

import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{indigo.50}',
          100: '{indigo.100}',
          200: '{indigo.200}',
          300: '{indigo.300}',
          400: '{indigo.400}',
          500: '{blue.900}',
          600: '{blue.900}',
          700: '{indigo.700}',
          800: '{indigo.800}',
          900: '{indigo.900}',
          950: '{indigo.950}'
      },

  },
});



app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: 'dark', // 다크 모드 선택기
    }
  },
});
app.mount('#app')
