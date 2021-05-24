import React, { Component } from 'react';
import * as THREE from 'three';
import { createScene } from './components/scene';
import { createCamera } from './components/camera';
import { createDirectionalLight } from './components/directionalLight';
import { createTestCube } from './components/test-cube';
import { createRenderer } from './systems/renderer';
import { createGLTFLoader } from './systems/GLTFLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { DRACODecoder } from "three//examples/js/libs/draco/draco_decoder.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Main extends Component {
    componentDidMount() {
        const container = document.querySelector('#three-container');

        var scene = createScene();
        var camera = createCamera(scene);
        var light = createDirectionalLight();

        scene.add(camera);
        scene.add(light);

        var cube = createTestCube();
        scene.add(cube);

        const loader = createGLTFLoader();
        loader.load("./LittlestTokyo.glb", (gltf) => {
            var obj = gltf.scene.children[0];
            console.log(obj);
            var model = gltf.scene;
            model.position.set(1, 1, 0);
            model.scale.set(0.03, 0.03, 0.03);
            scene.add(model);
            animate();
        });

        // loader.load("./Flamingo.glb", (gltf) => {
        //     var obj = gltf.scene.children[0];
        //     console.log(obj);

        //     var model = gltf.scene;
        //     model.position.set(0, 0, 0);
        //     model.scale.set(0.1, 0.1, 0.1);
        //     scene.add(model);
        //     animate();
        // });

        var renderer = createRenderer();
        container.appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);

        // const animate = () => {
        //     requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render(scene, camera);
        // };
        // animate();

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        // Orbit control
        // let controls = new OrbitControls(camera, renderer.domElement);
        // // controls.target.set(0, 0.5, 0);
        // controls.tick = () => controls.update();
    }

    render() {
        return (
            <div className="demo-container" >
                <div id="three-container"></div>
            </div>
        );
    }
}

export default Main;
