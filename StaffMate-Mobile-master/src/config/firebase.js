// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jMYUyvqFuiP2N-UF_hV-frrdqdNw9rM",
  authDomain: "staffmate-1df34.firebaseapp.com",
  projectId: "staffmate-1df34",
  storageBucket: "staffmate-1df34.appspot.com",
  messagingSenderId: "926005930457",
  appId: "1:926005930457:web:5441025752de7b94cb51c8",
  measurementId: "G-521H0MFK5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()