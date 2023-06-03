// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRNhHdL4wiOnmzuqLM1CAhQkuq8_leMo",
  authDomain: "react-practicas-a33b9.firebaseapp.com",
  projectId: "react-practicas-a33b9",
  storageBucket: "react-practicas-a33b9.appspot.com",
  messagingSenderId: "270630400291",
  appId: "1:270630400291:web:b7f1f038deb0eee5265c96"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);