// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQEyhWx4utfPEbe_Pc_dgjdP3FEBmxSQI",
    authDomain: "simple-firebase-21dfe.firebaseapp.com",
    projectId: "simple-firebase-21dfe",
    storageBucket: "simple-firebase-21dfe.appspot.com",
    messagingSenderId: "253068273131",
    appId: "1:253068273131:web:e991844a92658411c765ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app