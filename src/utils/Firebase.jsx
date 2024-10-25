// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfly4q5h0-ITo_PiJjj59odHUpDRU_CJg",
    authDomain: "netflixgpt-5f75b.firebaseapp.com",
    projectId: "netflixgpt-5f75b",
    storageBucket: "netflixgpt-5f75b.appspot.com",
    messagingSenderId: "1070791415676",
    appId: "1:1070791415676:web:4f29924529e527801a76f9",
    measurementId: "G-NVL1D7MHPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
