import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./config.ts";

export function authSignInWithGoogle() {
    console.log("Sign in with Google");
}

export async function authSignInWithEmail(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function authCreateAccountWithEmail(
    email: string,
    password: string,
) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function authSignOut() {
    signOut(auth)
        .then(() => {})
        .catch((error) => {
            console.error(error.message);
        });
}
