import React, { Suspense } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Cube } from "./meshes/Cube";

const App: React.FC = () => {
    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <Suspense fallback={null}>
                <Cube />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[1, 1, 2]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { App };
