import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCH4S-mIQOSPztnf1px29A51GMPD3uiVuA",
    authDomain: "devhorizan-57cac.firebaseapp.com",
    projectId: "devhorizan-57cac",
    storageBucket: "devhorizan-57cac.firebasestorage.app",
    messagingSenderId: "283295027663",
    appId: "1:283295027663:web:150a985293b60a2c0842ba",
    measurementId: "G-DGKQ13MBKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect user if already logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "dashboard.html";  // Redirect to Dashboard
    }
});

// Select Elements
const authForm = document.getElementById("auth-form");
const nameField = document.getElementById("name-field");
const toggleLink = document.getElementById("toggle-link");
const submitBtn = document.getElementById("submit-btn");
const forgotPassword = document.getElementById("forgot-password");
let isSignup = false;

// Toggle Signup/Login
toggleLink.addEventListener("click", function(event) {
    event.preventDefault();
    isSignup = !isSignup;

    if (isSignup) {
        nameField.classList.remove("hidden");
        submitBtn.textContent = "Sign Up";
        toggleLink.textContent = "Login";
    } else {
        nameField.classList.add("hidden");
        submitBtn.textContent = "Sign In";
        toggleLink.textContent = "Create an account";
    }
});

// Form Submit (Login/Signup)
authForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isSignup) {
        // Signup User
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                showToast("✅ Account created successfully!", "success");
                authForm.reset();
                window.location.href = "dashboard.html";  // Redirect to Dashboard
            })
            .catch((error) => {
                showToast(`❌ ${error.message}`, "error");
            });
    } else {
        // Login User
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                showToast("✅ Logged in successfully!", "success");
                authForm.reset();
                window.location.href = "dashboard.html";  // Redirect to Dashboard
            })
            .catch((error) => {
                showToast(`❌ ${error.message}`, "error");
            });
    }
});

// Forgot Password
forgotPassword.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    if (!email) {
        showToast("⚠️ Please enter your email to reset password", "warning");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            showToast("📩 Password reset email sent!", "success");
        })
        .catch((error) => {
            showToast(`❌ ${error.message}`, "error");
        });
});

// Show Toast Notification
function showToast(message, type) {
    const toastContainer = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.className = `p-3 rounded-lg shadow-lg text-white text-sm flex items-center gap-2 
        ${type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-yellow-500"}`;

    toast.innerHTML = `<span>${message}</span>`;

    toastContainer.appendChild(toast);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
