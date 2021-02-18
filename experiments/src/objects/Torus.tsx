import React, { useRef } from "react";
import { MeshProps, useFrame, useThree } from "react-three-fiber";
import type { Mesh } from "three";

const Torus: React.FC<MeshProps> = (props) => {
    const { clock } = useThree();
    const mesh = useRef<Mesh>();

    useFrame(() => {
        mesh.current!.rotation.x = 0.15 * clock.elapsedTime;
        mesh.current!.rotation.y = 0.1 * clock.elapsedTime;
    });

    return (
        <mesh {...props} ref={mesh}>
            <torusBufferGeometry args={[0.3, 0.2, 32, 64]} />
        </mesh>
    );
};

export { Torus };
