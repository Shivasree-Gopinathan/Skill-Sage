// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUtXwfGr-acaPVr4TcpJvAHF2SM0XMVe8",
  authDomain: "skill-sage-32f69.firebaseapp.com",
  projectId: "skill-sage-32f69",
  storageBucket: "skill-sage-32f69.appspot.com",
  messagingSenderId: "157853327168",
  appId: "1:157853327168:web:adb8e2dde5245a8764e4a5",
  measurementId: "G-HB05H754G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;