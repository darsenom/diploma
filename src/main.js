import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'


import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
    apiKey: "AIzaSyCXBCGPAyco86WemPVB4nTUrhSCI-ap6u0",
    authDomain: "diploma-55d82.firebaseapp.com",
    projectId: "diploma-55d82",
    storageBucket: "diploma-55d82.appspot.com",
    messagingSenderId: "754553903304",
    appId: "1:754553903304:web:507eea45c0b362ab32adfd"
  };

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.mount('#app')
