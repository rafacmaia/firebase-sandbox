export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-screen p-4 text-center text-text/60">
            <hr className="m-auto mb-3 w-4/5 opacity-30" />
            <small className="font-zain">
                Thoughtfully crafted by{" "}
                <a
                    className="cursor-pointer font-bold hover:text-text/100 hover:opacity-100 active:text-text/100 active:opacity-100"
                    href="https://github.com/rafacmaia"
                    target="_blank"
                    rel="noopener"
                >
                    Zou Labs 🐈‍⬛
                </a>
                <span className={`mx-[8px]`}>•</span>
                &copy; {new Date().getFullYear()} Licensed under MIT.
            </small>
        </footer>
    );
}
