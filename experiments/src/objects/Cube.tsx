import React, { useRef } from "react";
import { MeshProps, useFrame, useThree } from "react-three-fiber";
import type { Mesh } from "three";

const Cube: React.FC<MeshProps> = (props) => {
    const { clock } = useThree();
    const mesh = useRef<Mesh>();

    useFrame(() => {
        mesh.current!.rotation.x = 0.15 * clock.elapsedTime;
        mesh.current!.rotation.y = 0.1 * clock.elapsedTime;
    });

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry args={[0.75, 0.75, 0.75]} />
        </mesh>
    );
};

export { Cube };
