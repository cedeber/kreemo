import { Clock, AmbientLight, DirectionalLight, DirectionalLightHelper } from "three";
import type { Scene } from "three";
import { GUI } from "dat.gui";
import { renderCube } from "./objects/cube";

function start(scene: Scene): () => void {
    const gui = new GUI();
    const clock = new Clock();

    // Default lights
    const ambientLight = new AmbientLight("#ffffff", 1);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight("#ffffff", 1);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 256;
    directionalLight.shadow.mapSize.height = 256;
    directionalLight.shadow.camera.far = 15;
    directionalLight.position.set(4, 5, -2);
    scene.add(directionalLight);
    scene.add(new DirectionalLightHelper(directionalLight));

    const loopCube = renderCube(scene);

    return function loop() {
        const elapsedTime = clock.getElapsedTime();

        loopCube(elapsedTime);
    };
}

export { start };
