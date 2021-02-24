import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
    plugins: [reactRefresh()],
    build: {
        target: "esnext",
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom", "react-three-fiber", "@react-three/drei"],
                    three: ["three"],
                    pixi: ["pixi.js-legacy"],
                },
            },
        },
        chunkSizeWarningLimit: 600, // default 500
    },
});
