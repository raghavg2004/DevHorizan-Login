import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCH4S-mIQOSPztnf1px29A51GMPD3uiVuA",
    authDomain: "devhorizan-57cac.firebaseapp.com",
    projectId: "devhorizan-57cac",
    storageBucket: "devhorizan-57cac.firebasestorage.app",
    messagingSenderId: "283295027663",
    appId: "1:283295027663:web:150a985293b60a2c0842ba",
    measurementId: "G-DGKQ13MBKL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-name").textContent = user.displayName || "User";
    } else {
        window.location.href = "index.html";
    }
});

document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "https://devhorizan.vercel.app/";
    });
});
