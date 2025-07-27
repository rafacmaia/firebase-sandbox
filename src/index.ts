/* === Imports === */
import { initializeApp } from "firebase/app";

/* === Firebase Setup === */
const firebaseConfig = {
  apiKey: "AIzaSyBf5zWrejXmevLdDuXOlrf5U7Nbhv-hLWs",
  authDomain: "booky-cb727.firebaseapp.com",
  projectId: "booky-cb727",
  storageBucket: "booky-cb727.firebasestorage.app",
  messagingSenderId: "354433105854",
  appId: "1:354433105854:web:3acc1e8b43acab557443ef"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase initialized:");
console.log(app);

/* === Functions - Firebase Authentication == */

export function authSignInWithGoogle() {
  console.log("Sign in with Google");
}

export function authSignInWithEmail(callback: () => void) {
  console.log("Sign in with email and password");
  callback();
}

export function authCreateAccount() {
  console.log("Create account with email");
}

/* === Functions - UI === */