import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh, Shape } from "three";
import { useStore } from "../store";

const Heart: React.FC<MeshProps> = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<Mesh>();

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (mesh.current) mesh.current.rotation.z = mesh.current.rotation.z += 0.01;
    });

    // Store
    const setCursor = useStore((state) => state.setCursor);
    const setPosition = useStore((state) => state.setPosition);

    // Heart Shape
    const heartShape = new Shape();
    const x = -1;
    const y = -5;
    heartShape.moveTo(x + 2.5, y + 2.5);
    heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    heartShape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    heartShape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    heartShape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    heartShape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [0.7, 0.7, 0.7] : [0.5, 0.5, 0.5]}
            onClick={() => setActive(!active)}
            onPointerOver={(event) => {
                console.log(event);
                setCursor("pointer");
                setHover(true);
            }}
            onPointerOut={() => {
                setCursor("default");
                setPosition({ x: -1, y: -1 });
                setHover(false);
            }}
            onPointerMove={(event) => {
                setPosition({ x: event.clientX, y: event.clientY });
            }}
            rotation={[0, 0, Math.PI]}
        >
            <shapeBufferGeometry args={[heartShape, 8]} />
            <meshBasicMaterial color={hovered ? 0xff69b4 : 0x990000} />
        </mesh>
    );
};

export { Heart };
