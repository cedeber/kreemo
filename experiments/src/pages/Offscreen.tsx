import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Cube } from "../meshes/Cube";

const OffscreenPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!.transferControlToOffscreen();
        const worker = new Worker(new URL("../workers/offscreen.js", import.meta.url), {
            type: "module",
        });

        worker.postMessage({ canvas }, [canvas]);
    }, []);

    return <canvas ref={canvasRef} />;

    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Cube />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[1, 1, 2]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { OffscreenPage };
