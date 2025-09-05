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
    return signInWithPopup(auth, provider);
}

export function authSignInWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function authCreateAccountWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function authSignOut() {
    return signOut(auth);
}
