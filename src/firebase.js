// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvl8S1EdBfuskoYpKAz0k-g-ayb9PNlHE",
  authDomain: "motor-world-e3c57.firebaseapp.com",
  projectId: "motor-world-e3c57",
  storageBucket: "motor-world-e3c57.appspot.com",
  messagingSenderId: "871726390541",
  appId: "1:871726390541:web:afac15ea74f23e4a30e444",
  measurementId: "G-KHEK1GZ6NS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore database lưu trữ csdl

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
