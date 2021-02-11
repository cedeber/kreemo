import type { Scene } from "three";
import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from "three";

function renderCube(scene: Scene): (time: number) => void {
    const cube = new Mesh(
        new BoxBufferGeometry(1, 1, 1),
        new MeshStandardMaterial({ color: 0xdd0099 }),
    );
    scene.add(cube);

    return function loop(time) {
        cube.rotation.x = 0.15 * time;
        cube.rotation.y = 0.1 * time;
    };
}

export { renderCube };
