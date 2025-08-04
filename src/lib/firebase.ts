// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl4s_NwUjKjLxBaA2nAGCxNGl-95a6IAY",
  authDomain: "note-nest-acafd.firebaseapp.com",
  projectId: "note-nest-acafd",
  storageBucket: "note-nest-acafd.firebasestorage.app",
  messagingSenderId: "352912144516",
  appId: "1:352912144516:web:b4fddd60a9b4e00cacaad1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};