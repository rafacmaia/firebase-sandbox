import googleIcon from "../assets/auth-icons/google-icon.svg";
import {
  authCreateAccount,
  authSignInWithEmail,
  authSignInWithGoogle,
} from "./../index.ts";

type Props = {
  onLogin: () => void;
};

export default function LoggedOutView({ onLogin }: Props) {
  return (
    <>
      <h1 className="font-calistoga w-84 text-center text-6xl">Booky</h1>
      <button
        className="flex h-15 w-84 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-neutral-50 p-3 text-lg font-semibold shadow-[3px_3px_3px_1px_rgba(0,0,0,.25)] transition-shadow duration-200 ease-in-out hover:shadow-none active:shadow-none"
        onClick={authSignInWithGoogle}
      >
        <img className="w-6" src={googleIcon} alt="Google" />
        Sign in with Google
      </button>

      <div className="flex flex-col gap-4 text-lg font-semibold">
        <input
          className="h-15 w-84 cursor-text rounded-md border-3 border-black bg-amber-50 p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="h-15 w-84 cursor-text rounded-md border-3 border-black bg-amber-50 p-3 text-center font-light placeholder-neutral-500/70 focus:outline-none"
          type="text"
          placeholder="Password"
        />
        <button
          className="relative h-15 w-84 cursor-pointer rounded-md border-3 border-black bg-yellow-300 p-3 text-center shadow-[0_3px_0_0_rgba(0,0,0,1)] hover:top-[3px] hover:shadow-none active:top-[3px] active:shadow-none"
          onClick={() => authSignInWithEmail(onLogin)}
        >
          Sign In
        </button>
        <button
          className="h-11 w-84 cursor-pointer rounded-md border-3 border-black bg-transparent p-1 text-center hover:bg-black hover:text-white active:bg-black active:text-white"
          onClick={authCreateAccount}
        >
          Create Account
        </button>
      </div>
    </>
  );
}
