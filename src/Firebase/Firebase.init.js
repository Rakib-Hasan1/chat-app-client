// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-P6XzQjVXNQg7p196d7tprsuWkdd0hiA",
    authDomain: "chat-app-decd7.firebaseapp.com",
    projectId: "chat-app-decd7",
    storageBucket: "chat-app-decd7.firebasestorage.app",
    messagingSenderId: "640588717191",
    appId: "1:640588717191:web:4368f6289aae7410766c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);