// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importo il CSS di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importo il JS di Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')
