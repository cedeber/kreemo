import React, { useRef } from "react";
import type { MeshProps } from "react-three-fiber";
import type { Mesh } from "three";

const Plane: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();

    return (
        <mesh {...props} rotation={[-Math.PI * 0.5, 0, 0]} position={[0.7, -0.65, -1.5]} ref={mesh}>
            <planeBufferGeometry args={[5, 5]} />
        </mesh>
    );
};

export { Plane };
