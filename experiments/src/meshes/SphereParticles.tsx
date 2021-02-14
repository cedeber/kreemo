import React, { useRef } from "react";
import type { PointsProps } from "react-three-fiber";
import type { Points } from "three";

const SphereParticles: React.FC<PointsProps> = (props) => {
    const points = useRef<Points>();

    return (
        <points {...props} ref={points}>
            <sphereBufferGeometry args={[1, 32, 32]} />
            <pointsMaterial size={0.02} sizeAttenuation />
        </points>
    );
};

export { SphereParticles };
