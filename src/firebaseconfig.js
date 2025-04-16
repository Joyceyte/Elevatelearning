import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDR4ePKKVKnr7Y3UTP8-1QLjhczg9ZchaY",
  authDomain: "cortexa-e57ad.firebaseapp.com",
  projectId: "cortexa-e57ad",
  storageBucket: "cortexa-e57ad.firebasestorage.app",
  messagingSenderId: "870416122401",
  appId: "1:870416122401:web:7bb3276c2cb23a472b1960",
  measurementId: "G-C7MKZVN13N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)