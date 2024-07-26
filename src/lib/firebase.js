// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "recatchatapp.firebaseapp.com",
    projectId: "recatchatapp",
    storageBucket: "recatchatapp.appspot.com",
    messagingSenderId: "236716534856",
    appId: "1:236716534856:web:16752393ef65a9f3d57c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
