import { Scene, WebGLRenderer, PCFSoftShadowMap, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import "./index.css";
import { start } from "./app";

const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
const scene = new Scene();
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// Renderer
const renderer = new WebGLRenderer({ canvas });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.setClearColor(0x000000);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(4, 2, 5);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Resize
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Stats
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

const loop = start(scene);

// Loop
function tick() {
    stats.begin();
    loop();
    controls.update();
    renderer.render(scene, camera);
    stats.end();
    window.requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
