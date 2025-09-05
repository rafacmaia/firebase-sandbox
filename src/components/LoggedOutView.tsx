import { useState } from "react";
import { CircleSlash } from "lucide-react";
import { createAuthHandlers } from "@/lib/authHandlers.ts";
import googleIcon from "@assets/auth-icons/google-icon.svg";

export default function LoggedOutView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [error, setError] = useState("");

    function clearAuthFields() {
        setEmail("");
        setPassword("");
    }

    const { handleSignInGoogle, handleSignInEmail, handleCreateAccount } =
        createAuthHandlers(
            setError,
            setLoading,
            setIsCreatingAccount,
            clearAuthFields,
        );

    return (
        <>
            <h1 className="w-84 text-center font-heading text-6xl">Booky</h1>

            {/* Google Sign In*/}
            <button
                className="flex h-15 w-84 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-zinc-50 p-3 text-lg font-semibold shadow-[3px_3px_3px_1px_rgba(0,0,0,.25)] transition-shadow duration-200 ease-in-out hover:shadow-none active:shadow-none"
                onClick={handleSignInGoogle}
                disabled={loading}
            >
                <img className="w-6" src={googleIcon} alt="Google" />
                Sign in with Google
            </button>

            {/* Email & Password Sign In and Create Account*/}
            <form
                className="flex flex-col gap-4 text-lg font-semibold"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignInEmail(email, password);
                }}
            >
                {error && (
                    <p className="w-84 text-center text-base font-bold text-wrap text-red-500">
                        <CircleSlash className="mr-1 inline-block size-5 -translate-y-[1px]" />
                        {error}
                    </p>
                )}
                <input
                    className="h-15 w-84 cursor-text rounded-md border-3 border-text bg-secondary p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
                    aria-label="Email"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    disabled={loading}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="h-15 w-84 cursor-text rounded-md border-3 border-text bg-secondary p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
                    aria-label="Password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="relative h-15 w-84 cursor-pointer rounded-md border-3 border-text bg-primary p-3 text-center shadow-[0_3px_0_0_rgba(0,0,0,1)] hover:top-[3px] hover:shadow-none active:top-[3px] active:shadow-none"
                    type="submit"
                    disabled={loading}
                >
                    Sign In
                </button>
                <button
                    className={`active:zinc-white h-11 w-84 rounded-md border-3 border-text p-1 text-center hover:bg-text hover:text-zinc-50 active:bg-text ${isCreatingAccount ? "cursor-default bg-text text-zinc-50 opacity-80" : "cursor-pointer bg-transparent"}`}
                    type="button"
                    onClick={() => handleCreateAccount(email, password)}
                    disabled={loading}
                >
                    {isCreatingAccount
                        ? "Creating account..."
                        : "Create Account"}
                </button>
            </form>
        </>
    );
}
