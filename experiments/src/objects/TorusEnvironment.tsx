import { useCubeTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { MeshProps, useFrame, useThree } from "react-three-fiber";
import type { Mesh } from "three";
import { useDatGui } from "../hooks/useDatGui";

const TorusEnvironment: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();
    const { clock } = useThree();
    const metalness = useDatGui("Metalness", 1, 0.5, 1, 0.01);
    const roughness = useDatGui("Roughness", 0, 0, 0.5, 0.01);

    const envMap = useCubeTexture(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"], {
        path: "/assets/environment/",
    });

    useFrame(() => {
        mesh.current!.rotation.x = 0.25 * clock.elapsedTime;
        mesh.current!.rotation.y = 0.2 * clock.elapsedTime;
    });

    return (
        <mesh {...props} ref={mesh}>
            <torusBufferGeometry args={[2, 0.7, 100, 32]} />
            <meshStandardMaterial envMap={envMap} metalness={metalness} roughness={roughness} />
        </mesh>
    );
};

export { TorusEnvironment };
