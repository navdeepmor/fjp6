// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4g5Gtqj4buM2boNZxpcoSWstxVX05aOo",
  authDomain: "nav-learn-firebase.firebaseapp.com",
  projectId: "nav-learn-firebase",
  storageBucket: "nav-learn-firebase.appspot.com",
  messagingSenderId: "390549844985",
  appId: "1:390549844985:web:a9ff3e5338841236d0c328"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)                                                                      // const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users')
}

/* 
                                                            -------- firebase --------
    firestore DB:
        - No sql                                                                                            no sql means key - value pair in an obj
            - collection                                                                                    in our case 'users'
                - document                                                                                  user1 data, user2 data .. 
                    - Multiple key-value pairs
                                                            
*/