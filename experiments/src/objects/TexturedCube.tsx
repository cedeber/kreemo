import React, { useRef } from "react";
import { MeshProps, useFrame, useLoader } from "react-three-fiber";
import { Mesh, MirroredRepeatWrapping, TextureLoader } from "three";
import { useDatGui } from "../hooks/useDatGui";
import mapTexture from "../assets/Standard_red_pxr128.jpg";
import bumpMapTexture from "../assets/Standard_red_pxr128_bmp.jpg";
import normalMapTexture from "../assets/Standard_red_pxr128_normal.jpg";

const TexturedCube: React.FC<MeshProps> = (props) => {
    const mesh = useRef<Mesh>();

    const isAnimate = useDatGui("Animate", true);
    const hasWireframe = useDatGui("Wireframe", false);
    const segments = useDatGui("Segments", 100, 30, 300, 1);
    const repeat = useDatGui("Repeat", 3, 1, 10, 1);
    const displacementScale = useDatGui("Displacement", 0.15, 0, 1, 0.001);
    const metalness = useDatGui("Metalness", 0.1, 0, 1, 0.001);
    const roughness = useDatGui("Roughness", 0.7, 0, 1, 0.001);

    const [map, bumpMap, normalMap] = useLoader(TextureLoader, [
        mapTexture,
        bumpMapTexture,
        normalMapTexture,
    ]);

    map.wrapS = MirroredRepeatWrapping;
    map.wrapT = MirroredRepeatWrapping;
    map.repeat.set(repeat, repeat);
    bumpMap.wrapS = MirroredRepeatWrapping;
    bumpMap.wrapT = MirroredRepeatWrapping;
    bumpMap.repeat.set(repeat, repeat);
    normalMap.wrapS = MirroredRepeatWrapping;
    normalMap.wrapT = MirroredRepeatWrapping;
    normalMap.repeat.set(repeat, repeat);

    useFrame(() => {
        if (mesh.current && isAnimate) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry args={[5, 5, 5, segments, segments, segments]} />
            {/* <meshBasicMaterial wireframe={hasWireframe} color={"#990000"} /> */}
            <meshStandardMaterial
                color={0xffffff}
                metalness={metalness}
                roughness={roughness}
                map={map}
                displacementMap={bumpMap}
                displacementScale={displacementScale}
                displacementBias={-displacementScale / 2}
                normalMap={normalMap}
                wireframe={hasWireframe}
            />
        </mesh>
    );
};

export { TexturedCube };
