import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { TexturedCube } from "../objects/TexturedCube";

const TexturesPage: React.FC = () => {
    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <TexturedCube />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[1, 1, 10]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { TexturesPage };
