import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { MeshProps, useFrame, useThree } from "react-three-fiber";
import type { Mesh } from "three";
import matcapTexture from "../assets/matcap.jpg";

const TorusKnotMatcap: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();
    const { clock } = useThree();

    const matcap = useTexture(matcapTexture);

    useFrame(() => {
        mesh.current!.rotation.x = 0.15 * clock.elapsedTime;
        mesh.current!.rotation.y = 0.1 * clock.elapsedTime;
    });

    return (
        <mesh {...props} ref={mesh}>
            <torusKnotBufferGeometry args={[2, 0.7, 100, 16]} />
            <meshMatcapMaterial matcap={matcap} />
        </mesh>
    );
};

export { TorusKnotMatcap };
