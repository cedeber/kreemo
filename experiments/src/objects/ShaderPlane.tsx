import React, { useRef } from "react";
import type { MeshProps } from "react-three-fiber";
import { DoubleSide, Mesh } from "three";
import vertexShaderString from "../shaders/plane/vertex.glsl?raw";
import fragmentShaderString from "../shaders/plane/fragment.glsl?raw";
import { useDatGui } from "../hooks/useDatGui";

// Allows to reload the whole component when shaders change
// @refresh reset

const ShaderPlane: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();
    const wireframe = useDatGui("Wireframe", false);

    return (
        <mesh {...props} ref={mesh}>
            <planeBufferGeometry args={[1, 1, 1, 1]} />
            <rawShaderMaterial
                vertexShader={vertexShaderString}
                fragmentShader={fragmentShaderString}
                side={DoubleSide}
                wireframe={wireframe}
            />
        </mesh>
    );
};

export { ShaderPlane };
