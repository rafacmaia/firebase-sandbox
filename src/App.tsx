import LoggedOutView from "./components/LoggedOutView";
import LoggedInView from "./components/LoggedInView";
import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function flipLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <main className="my-12 flex w-screen flex-col items-center justify-center gap-8">
      {loggedIn ? (
        <LoggedInView onLogOut={flipLogin} />
      ) : (
        <LoggedOutView onLogin={flipLogin} />
      )}
    </main>
  );
}
