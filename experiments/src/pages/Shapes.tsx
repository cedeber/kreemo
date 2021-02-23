import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Heart } from "../objects/Heart";
import { useStore } from "../store";
import { Smiley } from "../objects/Smiley";
import { Text } from "../objects/Text";
import { useDatGui } from "../hooks/useDatGui";
import { uuidv4 } from "../utils";
import { ThreeShape } from "../objects/ThreeShape";

const ShapesPage: React.FC = () => {
    const cursor = useStore((state) => state.cursor);
    const [hearts, setHearts] = useState<JSX.Element[]>([]);
    const count = useDatGui("Shapes", 3, 1, 10000, 1);

    useEffect(() => {
        let h: JSX.Element[] = [];

        for (let i = 0; i < count; i += 1) {
            // h.push(<Heart key={uuidv4()} position={[randomX, randomY, 0]} />);
            h.push(<ThreeShape key={uuidv4()} />);
        }

        setHearts(h);
    }, [count]);

    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)} style={{ cursor }}>
            <Suspense fallback={null}>
                {hearts}
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
