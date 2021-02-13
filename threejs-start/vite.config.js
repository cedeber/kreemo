import { defineConfig } from "vite";

export default defineConfig({
    build: {
        target: "esnext",
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ["three"],
                },
            },
        },
        chunkSizeWarningLimit: 600, // default 500
    },
});
