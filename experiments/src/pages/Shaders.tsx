import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { ShaderPlane } from "../objects/ShaderPlane";

const ShadersPage: React.FC = () => {
    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <ambientLight />
            <Suspense fallback={null}>
                <ShaderPlane />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[0.5, 0.5, 1]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { ShadersPage };
