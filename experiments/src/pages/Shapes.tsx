import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Heart } from "../objects/Heart";
import { useStore } from "../store";
import { Smiley } from "../objects/Smiley";
import { Text } from "../objects/Text";

const ShapesPage: React.FC = () => {
    const cursor = useStore((state) => state.cursor);

    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)} style={{ cursor }}>
            <Suspense fallback={null}>
                <Heart />
                <Heart position={[10, 1.5, 0]} />
                <Smiley
                    scale={[0.08, 0.08, 1]}
                    position={[-7, 3.5, 0]}
                    rotation={[0, 0, Math.PI]}
                />
                <Text position={[0, 5, 0]} color={0xff00ff} />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[0, 0, 20]} />
            <OrbitControls />
            <Stats />
        </Canvas>
    );
};

export { ShapesPage };
