import React, { useEffect, useRef } from "react";
// import OffscreenWorker from "../workers/offscreen.tsx?worker";

const OffscreenPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!.transferControlToOffscreen();
        const worker = new Worker(new URL("../workers/offscreen.js", import.meta.url), {
            type: "module",
        });
        // const worker = new OffscreenWorker();

        worker.postMessage({ canvas }, [canvas]);
    }, []);

    return <canvas ref={canvasRef} />;
};

export { OffscreenPage };
