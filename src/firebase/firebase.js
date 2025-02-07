// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBSJITyFYE8zC1uZslwn33_nMv63IGzmyc",
    authDomain: "bookshop-128f9.firebaseapp.com",
    projectId: "bookshop-128f9",
    storageBucket: "bookshop-128f9.firebasestorage.app",
    messagingSenderId: "617082211710",
    appId: "1:617082211710:web:f8c684453462f3ee0db72f",
    measurementId: "G-LW9ZNSP62E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();