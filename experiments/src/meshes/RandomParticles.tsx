import React, { useEffect, useRef, useState } from "react";
import { PointsProps, useLoader } from "react-three-fiber";
import { AdditiveBlending, BufferAttribute, Color, Points, TextureLoader } from "three";
import { useDatGui } from "../hooks/useDatGui";
import mapTexture from "../assets/circle_03.jpg";

const RandomParticles: React.FC<PointsProps> = (props) => {
    const points = useRef<Points>();

    // settings
    const count = useDatGui("Particles", 30000, 0, 100000, 100);
    const size = useDatGui("Size", 0.05, 0.005, 0.3, 0.001);
    const radius = useDatGui("Radius", 10, 1, 20, 0.1);
    const branches = useDatGui("Branches", 3, 3, 9, 1);
    const spin = useDatGui("Spin", 0.5, -5, 5, 0.001);
    const random = useDatGui("Randomness", 0.5, 0.001, 1, 0.001);
    const power = useDatGui("Power", 3, 1, 6, 0.01);

    const positions = useRef(new Float32Array(count * 3));
    const colors = useRef(new Float32Array(count * 3));
    const [forceUpdate, setForceUpdate] = useState(0);

    const [map] = useLoader(TextureLoader, [mapTexture]);

    useEffect(() => {
        positions.current = new Float32Array(count * 3);
        colors.current = new Float32Array(count * 3);

        const insideColor = new Color("#ff6030");
        const outsideColor = new Color("#1b3984");

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const r = Math.random() * radius;
            const s = r * spin;
            const angle = ((i % branches) / branches) * Math.PI * 2;

            const rdm = () =>
                Math.pow(Math.random(), power) * (Math.random() < 0.5 ? 1 : -1) * random * r;

            positions.current[i3] = rdm() * random + Math.cos(angle + s) * r;
            positions.current[i3 + 1] = rdm() * random;
            positions.current[i3 + 2] = rdm() * random + Math.sin(angle + s) * r;

            const mixedColor = insideColor.clone();
            mixedColor.lerp(outsideColor, r / radius);

            colors.current[i3] = mixedColor.r;
            colors.current[i3 + 1] = mixedColor.g;
            colors.current[i3 + 2] = mixedColor.b;
        }
        setForceUpdate(forceUpdate + 1);
    }, [count, radius, branches, spin, random, power]);

    return (
        <points {...props} ref={points}>
            <bufferGeometry
                attributes={{
                    position: new BufferAttribute(positions.current, 3),
                    color: new BufferAttribute(colors.current, 3),
                }}
            />
            <pointsMaterial
                size={size}
                sizeAttenuation
                // color={0xffffff}
                transparent
                alphaMap={map}
                // alphaTest={0.01}
                depthWrite={false}
                blending={AdditiveBlending}
                vertexColors
            />
        </points>
    );
};

export { RandomParticles };
