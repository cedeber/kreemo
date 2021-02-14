import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { SphereParticles } from "../meshes/SphereParticles";
import { RandomParticles } from "../meshes/RandomParticles";

const ParticlesPage: React.FC = () => {
    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)}>
            <ambientLight />
            {/* <pointLight position={[10, 10, 10]} /> */}
            <Suspense fallback={null}>
                <SphereParticles />
                <RandomParticles />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[1, 1, 5]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { ParticlesPage };
