import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { TexturedCube } from "../objects/TexturedCube";
import { TorusKnotMatcap } from "../objects/TorusKnotMatcap";
import { TorusEnvironment } from "../objects/TorusEnvironment";

const TexturesPage: React.FC = () => {
    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <TexturedCube position={[0, 0, 0]} />
                <TorusKnotMatcap position={[-8, 0, 0]} />
                <TorusEnvironment position={[8, 0, 0]} />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[1, 1, 12]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { TexturesPage };
