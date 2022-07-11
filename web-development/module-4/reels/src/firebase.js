import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr8y3wWayJ-fmeqe9OHbYiUStcxs7n73Q",
    authDomain: "nav-reels.firebaseapp.com",
    projectId: "nav-reels",
    storageBucket: "nav-reels.appspot.com",
    messagingSenderId: "685082663668",
    appId: "1:685082663668:web:1b62fe8169f75677189ca1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)                                                                      // const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    getTimeStamp: firebase.firestore.FieldValue.getTimeStamp
}

export const storage = firebase.storage();


/*

    GLOBAL STORE ?
    - without global store we would have to use props to send user state but if user refersh then in present case it would have to re-login that is a bug
      to overcome it we can user a global store which is like a common accessible place to all components. With this user state can be fetch without depending
      on any other page. 
    How to create GLOBAL STORE ?
    - Context API
    
            Login                       home                       Profile 
        |           |               |           |               |           |
        |           |      --->     |           |      --->     |           |
        |           |      Props    |           |      Props    |           |
        |           |               |           |               |           |

                             -----------    
                            |   user    | 
                            |           |               
                            |           |
                            |           |
                             -----------
                             GLOBAL STORE
*/