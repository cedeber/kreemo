import React, { useEffect, useRef, useState } from "react";
import { PointsProps, useLoader } from "react-three-fiber";
import { BufferAttribute, Points, TextureLoader } from "three";
import { useDatGui } from "../hooks/useDatGui";
import mapTexture from "../assets/circle_03.jpg";

const RandomParticles: React.FC<PointsProps> = (props) => {
    const points = useRef<Points>();
    const count = useDatGui("Particles", 10000, 0, 200000, 100);
    const positions = useRef(new Float32Array(count * 3));
    const [forceUpdate, setForceUpdate] = useState(0);

    const [map] = useLoader(TextureLoader, [mapTexture]);

    useEffect(() => {
        positions.current = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions.current[i] = (Math.random() - 0.5) * 7;
        }
        setForceUpdate(forceUpdate + 1);
    }, [count]);

    return (
        <points {...props} ref={points}>
            <bufferGeometry
                attributes={{
                    position: new BufferAttribute(positions.current, 3),
                }}
            />
            <pointsMaterial
                size={0.05}
                sizeAttenuation
                color={0xffffff}
                transparent
                alphaMap={map}
                alphaTest={0.01}
            />
        </points>
    );
};

export { RandomParticles };
