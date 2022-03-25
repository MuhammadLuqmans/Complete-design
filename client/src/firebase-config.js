import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA1A3ECmiZ0mboZds9bQNSdLniPfl6s9So",
    authDomain: "new-app-e0737.firebaseapp.com",
    projectId: "new-app-e0737",
    storageBucket: "new-app-e0737.appspot.com",
    messagingSenderId: "787548885727",
    appId: "1:787548885727:web:ca7271ec07a9f6f2c58f6a",
    measurementId: "G-QQ10J6N65C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);