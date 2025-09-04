import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "./config.ts";

export const provider = new GoogleAuthProvider();

export function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User " + result.user + " signed in with Google");
        })
        .catch((error) => {
            console.error(error.message);
        });
}

export function authSignInWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function authCreateAccountWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function authSignOut() {
    signOut(auth)
        .then(() => {})
        .catch((error) => {
            console.error(error.message);
        });
}
