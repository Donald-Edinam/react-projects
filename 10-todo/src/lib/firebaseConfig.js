// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYDgwYTfpXLHj5oDMZLDtoSezu1y4VN20",
  authDomain: "crud-tutorial-5038e.firebaseapp.com",
  projectId: "crud-tutorial-5038e",
  storageBucket: "crud-tutorial-5038e.appspot.com",
  messagingSenderId: "327618485314",
  appId: "1:327618485314:web:a2d21a4a172e7b9ccb21db",
  measurementId: "G-TY6P9VCZFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

const db = getFirestore(app)


export { auth, db }