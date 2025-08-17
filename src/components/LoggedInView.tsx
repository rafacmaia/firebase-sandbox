import { authSignOut } from "@fb/auth.ts";
import Footer from "@components/Footer.tsx";
import logoutIcon from "@assets/logout-icon1.svg";

export default function LoggedInView() {
    return (
        <>
            <main className="flex h-screen w-screen items-center justify-center">
                <nav className="absolute top-0 right-0">
                    <button
                        type="button"
                        className="mt-5 mr-5 cursor-pointer border-none bg-transparent p-0"
                        onClick={() => authSignOut()}
                    >
                        <img
                            className="size-14 hover:size-15 hover:opacity-65 active:size-15 active:opacity-65"
                            src={logoutIcon}
                            alt="Booky"
                        />
                    </button>
                </nav>

                <div className="relative aspect-[4/3] w-96 overflow-hidden rounded-lg border-5 border-text">
                    <iframe
                        src="https://giphy.com/embed/VcizxCUIgaKpa"
                        className="absolute top-0 left-0 size-full brightness-125"
                        title="Giphy embed"
                    ></iframe>
                </div>

                {/*<button*/}
                {/*    className="border-text bg-primary relative h-15 w-84 cursor-pointer rounded-md border-3 p-3 text-center text-lg font-semibold shadow-[0_3px_0_0_rgba(0,0,0,1)] hover:top-[3px] hover:shadow-none active:top-[3px] active:shadow-none"*/}
                {/*    type="button"*/}
                {/*    onClick={onLogout}*/}
                {/*>*/}
                {/*    Logout*/}
                {/*</button>*/}
            </main>

            <Footer />
        </>
    );
}
