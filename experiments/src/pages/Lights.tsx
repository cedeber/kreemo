import React, { Suspense, useMemo } from "react";
import { Canvas, useResource } from "react-three-fiber";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { useDatGui } from "../hooks/useDatGui";
import { MeshStandardMaterial, PointLight } from "three";
import { Cube } from "../meshes/Cube";
import { Torus } from "../meshes/Torus";
import { Plane } from "../meshes/Plane";
import { Text } from "../meshes/Text";

const LightsPage: React.FC = () => {
    const light = useResource<PointLight>();

    const lightIntensity = useDatGui("Light", 0.7, 0, 1, 0.001);
    const showHelpers = useDatGui("Helper", false);

    const material = useMemo(() => new MeshStandardMaterial({ roughness: 4 }), []);

    return (
        // Keep pixelRatio to 1 for performance
        <Canvas pixelRatio={Math.min(1, window.devicePixelRatio)} shadowMap>
            <ambientLight color={0x4169e1} intensity={0.4} />
            <directionalLight
                color={0xff9000}
                intensity={lightIntensity}
                position={[-2.5, 0.8, 3]}
                castShadow
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
                shadow-camera-near={2}
                shadow-camera-far={9}
                shadow-camera-top={1}
                shadow-camera-right={2}
                shadow-camera-bottom={-1}
                shadow-camera-left={-2}
                ref={light}
            />
            {light.current && (
                <>
                    <pointLightHelper args={[light.current, 0.2]} visible={showHelpers} />
                    <cameraHelper args={[light.current.shadow.camera]} visible={showHelpers} />
                </>
            )}
            <Suspense fallback={null}>
                <Cube material={material} position={[-1, 0, 0]} castShadow receiveShadow />
                <Torus material={material} position={[0.5, 0, 0.18]} castShadow receiveShadow />
                <Plane material={material} receiveShadow />
                <Text
                    material={material}
                    position={[0, 0, 0.7]}
                    fontSize={0.4}
                    color={0x9966ff}
                    castShadow
                />
            </Suspense>
            <PerspectiveCamera makeDefault fov={75} near={0.1} far={100} position={[-0.5, 1, 2]} />
            <OrbitControls enableDamping />
            <Stats />
        </Canvas>
    );
};

export { LightsPage };
