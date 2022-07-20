// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4bMCUGbYUoLRNYUSro8sPHiSBbL_krbI",
  authDomain: "reels-app-adb0a.firebaseapp.com",
  projectId: "reels-app-adb0a",
  storageBucket: "reels-app-adb0a.appspot.com",
  messagingSenderId: "168580898549",
  appId: "1:168580898549:web:755d7348bab6553c272fbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);