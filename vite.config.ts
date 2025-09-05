import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: { host: true },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@fb": path.resolve(__dirname, "./src/lib/firebase"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        },
    },
});
