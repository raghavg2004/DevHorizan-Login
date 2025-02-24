// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4S-mIQOSPztnf1px29A51GMPD3uiVuA",
  authDomain: "devhorizan-57cac.firebaseapp.com",
  projectId: "devhorizan-57cac",
  storageBucket: "devhorizan-57cac.appspot.com",
  messagingSenderId: "283295027663",
  appId: "1:283295027663:web:150a985293b60a2c0842ba",
  measurementId: "G-DGKQ13MBKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other files
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut };
