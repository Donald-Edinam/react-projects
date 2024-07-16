// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBokBD9xZYPu6pu3_1-W-9bWNFUgQhwfqY",
  authDomain: "noteplusplus-f7060.firebaseapp.com",
  projectId: "noteplusplus-f7060",
  storageBucket: "noteplusplus-f7060.appspot.com",
  messagingSenderId: "118013171852",
  appId: "1:118013171852:web:b45ad6d7e363713e8f43a9",
  measurementId: "G-8M7DH4T74E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

export {app, db, auth}