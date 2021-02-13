import React, { useRef } from "react";
import type { MeshProps } from "react-three-fiber";
import type { Mesh } from "three";

const WorkerCube: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial wireframe color={0xffffff} />
        </mesh>
    );
};

export { WorkerCube };
