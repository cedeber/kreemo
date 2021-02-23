import React, { useRef } from "react";
import { MeshProps, useFrame, useThree } from "react-three-fiber";
import type { Mesh } from "three";

const ThreeShape: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();

    useFrame((_state, delta) => {
        if (mesh.current) mesh.current.rotation.z = mesh.current.rotation.z -= 0.1 * delta;
    });

    const randomX = Math.random() * 50 - 25;
    const randomY = Math.random() * 30 - 15;

    return (
        <mesh {...props} position={[randomX, randomY, 0]} ref={mesh}>
            <planeBufferGeometry args={[0.5, 0.5, 1, 1]} />
            <meshBasicMaterial color={0xde3249} />
        </mesh>
    );
};

export { ThreeShape };
