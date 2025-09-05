import {
    authCreateAccountWithEmail,
    authSignInWithEmail,
    authSignInWithGoogle,
} from "@fb/auth";
import { getErrorMessage } from "@utils/utils.ts";

export function createAuthHandlers(
    setError: (error: string) => void,
    setLoading: (loading: boolean) => void,
    setIsCreatingAccount: (value: boolean) => void,
    clearAuthFields: () => void,
) {
    return {
        handleSignInGoogle: () => {
            setError("");
            setLoading(true);
            authSignInWithGoogle()
                .then((result) => {
                    console.log(
                        "User " + result.user + " signed in with Google",
                    );
                })
                .catch((error) => {
                    console.error(error);
                    setError(getErrorMessage(error.code));
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        handleSignInEmail: (email: string, password: string) => {
            setError("");
            setLoading(true);
            authSignInWithEmail(email, password)
                .then(() => {
                    clearAuthFields();
                    console.log("User signed with email and password");
                })
                .catch((error) => {
                    console.error(error);
                    setError(getErrorMessage(error.code));
                })
                .finally(() => {
                    setLoading(false);
                });
        },
        handleCreateAccount: (email: string, password: string) => {
            setError("");
            setLoading(true);
            setIsCreatingAccount(true);
            authCreateAccountWithEmail(email, password)
                .then(() => {
                    clearAuthFields();
                    console.log("User created account with email and password");
                })
                .catch((error) => {
                    console.error(error);
                    setError(getErrorMessage(error.code));
                })
                .finally(() => {
                    setLoading(false);
                    setIsCreatingAccount(false);
                });
        },
    };
}
