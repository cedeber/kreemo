import React from "react";
import { render } from "react-three-fiber";
import { WebGLRenderer, Scene, PerspectiveCamera } from "three";
import { WorkerCube } from "../objects/WorkerCube";

let ctx = (self as unknown) as Worker;

ctx.onmessage = (event) => {
    const { canvas } = event.data;

    const scene = new Scene();
    const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    const camera = new PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 100);

    camera.position.set(1, 1, 2);
    camera.lookAt(0, 0, 0);

    render(
        <>
            <ambientLight color={0x990099} />
            <WorkerCube />
        </>,
        scene,
    );

    renderer.render(scene, camera);
};
