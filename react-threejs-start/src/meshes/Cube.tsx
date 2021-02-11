import { once } from "ramda";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MeshProps } from "react-three-fiber";
import type { Mesh } from "three";
import { useDatGui } from "../hooks/useDatGui";

const Cube: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();
    const { wireframe } = useDatGui("wireframe", false);

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial wireframe={wireframe} />
        </mesh>
    );
};

export { Cube };
