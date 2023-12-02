import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

const db = getFirestore();
export default db;
