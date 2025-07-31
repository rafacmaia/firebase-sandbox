/* === Imports === */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth(app);

/* === Functions - Firebase Authentication == */

export function authSignInWithGoogle() {
  console.log("Sign in with Google");
}

export function authSignInWithEmail(callback: () => void) {
  console.log("Sign in with email and password");
  callback();
}

export function authCreateAccount(email: string, password: string) {
  console.log("Create account with email");

  if (!email || !password) {
    console.log("Email or password is empty");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Account created successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

/* === Functions - UI === */