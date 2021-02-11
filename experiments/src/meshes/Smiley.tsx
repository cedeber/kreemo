import React, { useRef } from "react";
import type { MeshProps } from "react-three-fiber";
import { Mesh, Path, Shape } from "three";
import { useDatGui } from "../hooks/useDatGui";

const Smiley: React.FC<MeshProps> = (props) => {
    const segments = useDatGui("Segments", 8, 3, 20, 1);

    const mesh = useRef<Mesh>();
    const smileyShape = new Shape().moveTo(80, 40).absarc(40, 40, 40, 0, Math.PI * 2, false);
    const smileyEye1Path = new Path()
        .moveTo(35, 20)
        .absellipse(25, 20, 10, 10, 0, Math.PI * 2, true, 0);
    const smileyEye2Path = new Path().moveTo(65, 20).absarc(55, 20, 10, 0, Math.PI * 2, true);
    const smileyMouthPath = new Path()
        .moveTo(20, 40)
        .quadraticCurveTo(40, 60, 60, 40)
        .bezierCurveTo(70, 45, 70, 50, 60, 60)
        .quadraticCurveTo(40, 80, 20, 60)
        .quadraticCurveTo(5, 50, 20, 40);
    smileyShape.holes.push(smileyEye1Path);
    smileyShape.holes.push(smileyEye2Path);
    smileyShape.holes.push(smileyMouthPath);

    return (
        <mesh {...props} ref={mesh}>
            <shapeBufferGeometry args={[smileyShape, segments]} />
            <meshBasicMaterial color={0x4169e1} />
        </mesh>
    );
};

export { Smiley };
