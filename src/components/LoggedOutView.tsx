import googleIcon from "../assets/auth-icons/google-icon.svg";
import {
  authCreateAccountWithEmail,
  authSignInWithEmail,
  authSignInWithGoogle,
} from "./../index.ts";
import { useState } from "react";

type Props = {
  onLogin: () => void;
};

export default function LoggedOutView({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="font-heading w-84 text-center text-6xl">Booky</h1>

      {/* Google Sign In*/}
      <button
        className="flex h-15 w-84 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-zinc-50 p-3 text-lg font-semibold shadow-[3px_3px_3px_1px_rgba(0,0,0,.25)] transition-shadow duration-200 ease-in-out hover:shadow-none active:shadow-none"
        onClick={authSignInWithGoogle}
      >
        <img className="w-6" src={googleIcon} alt="Google" />
        Sign in with Google
      </button>

      {/* Email & Password Sign In and Create Account*/}
      <form
        className="flex flex-col gap-4 text-lg font-semibold"
        onSubmit={() => authSignInWithEmail(onLogin)}
      >
        <input
          className="border-text bg-secondary h-15 w-84 cursor-text rounded-md border-3 p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
          aria-label="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-text bg-secondary h-15 w-84 cursor-text rounded-md border-3 p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
          aria-label="Password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-primary border-text relative h-15 w-84 cursor-pointer rounded-md border-3 p-3 text-center shadow-[0_3px_0_0_rgba(0,0,0,1)] hover:top-[3px] hover:shadow-none active:top-[3px] active:shadow-none"
          type="submit"
        >
          Sign In
        </button>
        <button
          className="border-text hover:bg-text active:bg-text active:zinc-white h-11 w-84 cursor-pointer rounded-md border-3 bg-transparent p-1 text-center hover:text-zinc-50"
          type="button"
          onClick={() => authCreateAccountWithEmail(email, password, onLogin)}
        >
          Create Account
        </button>
      </form>
    </>
  );
}
