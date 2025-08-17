import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "@fb/config.ts";
import LoggedOutView from "@components/LoggedOutView";
import LoggedInView from "@components/LoggedInView";

export default function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedIn(!!user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <main className="flex h-dvh w-screen items-center justify-center">
                <h1 className="font-zain text-5xl tracking-wider text-black/80">
                    Loading...
                </h1>
            </main>
        );
    }

    return (
        <main className="relative flex h-dvh w-screen flex-col items-center justify-center gap-8">
            {loggedIn ? <LoggedInView /> : <LoggedOutView />}
        </main>
    );
}
