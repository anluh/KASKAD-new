import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCAkbndVAQz4fDaMBeHuyKdFgPzt_Zr22Y',
  authDomain: 'kaskad-37e58.firebaseapp.com',
  projectId: 'kaskad-37e58',
  storageBucket: 'kaskad-37e58.appspot.com',
  messagingSenderId: '646068798719',
  appId: '1:646068798719:web:785431912f3203f278b8ca',
  measurementId: 'G-3WRYZE89FG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
