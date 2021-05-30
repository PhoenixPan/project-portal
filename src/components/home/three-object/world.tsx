import { useEffect } from 'react';

import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createDirectionalLight } from './components/directionalLight';
import { createCube } from './components/cube';
import { createRenderer } from './systems/renderer';
import { createGLTFLoader } from './systems/GLTFLoader';
import { resize } from './systems/Resizer';
import throttle from 'lodash/throttle'

export const World = () => {
    useEffect(() => {
        const container = document.querySelector('#world-container');
        if (container) container.innerHTML = "";

        var scene = createScene();
        var camera = createCamera(scene);

        var light = createDirectionalLight();
        var cube = createCube();
        scene.add(light, cube);

        const loader = createGLTFLoader();
        loader.load("./LittlestTokyo.glb", (gltf) => {
            var model = gltf.scene;
            model.position.set(1, 1, 0);
            model.scale.set(0.02, 0.02, 0.02);
            scene.add(model);
            animate();
        });

        // loader.load("./Flamingo.glb", (gltf) => {
        //     var model = gltf.scene;
        //     model.position.set(0, 0, 0);
        //     model.scale.set(0.1, 0.1, 0.1);
        //     scene.add(model);
        //     animate();
        // });

        var renderer = createRenderer(container);
        renderer.render(scene, camera);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', throttle((e: Event) => { resize(container, camera, renderer); }, 200));
        // Orbit control
        // let controls = new OrbitControls(camera, renderer.domElement);
        // // controls.target.set(0, 0.5, 0);
        // controls.tick = () => controls.update();
    });

    return (
        <div id="world-container"></div>
    );

}

export default World;
