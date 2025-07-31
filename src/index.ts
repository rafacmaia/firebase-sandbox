/* === Imports === */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

/* === Firebase Setup === */
const firebaseConfig = {
  apiKey: "AIzaSyBf5zWrejXmevLdDuXOlrf5U7Nbhv-hLWs",
  authDomain: "booky-cb727.firebaseapp.com",
  projectId: "booky-cb727",
  storageBucket: "booky-cb727.firebasestorage.app",
  messagingSenderId: "354433105854",
  appId: "1:354433105854:web:3acc1e8b4 3acab557443ef"
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

export function authCreateAccountWithEmail(
  email: string,
  password: string,
  onLogin: () => void
) {
  console.log("Request to create account with email and password.");

  if (
    !email ||
    !password ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+/.test(email) ||
    password.length < 6
  ) {
    console.log("Email or password is invalid.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Account created successfully.");
      onLogin();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

/* === Functions - UI === */
