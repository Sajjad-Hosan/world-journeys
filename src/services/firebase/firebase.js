// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIRE_APIKEY,
  authDomain: import.meta.env.FIRE_AUTHDOMAIN,
  projectId: import.meta.env.FIRE_PROJECTID,
  storageBucket: import.meta.env.FIRE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.FIRE_MESSAGINGSENDERID,
  appId: import.meta.env.FIRE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
