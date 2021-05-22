import React, { useEffect } from "react";
import * as THREE from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const ThreeObject = () => {
    return (<div></div>)
}

export default ThreeObject;

// // Basic Setup
// var scene = new Scene();
// scene.background = new Color("rgb(100, 100, 100)");
// // var camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
// var camera = new PerspectiveCamera();
// // camera.rotation.y = 45 / 180 * Math.PI;
// // camera.position.x = 800;
// // camera.position.y = 100;
// // camera.position.z = 1000;
// var renderer = new WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // The Lighting
// // var hlight = new AmbientLight(0x404040, 100);
// // scene.add(hlight);
// // var directionalLight = new DirectionalLight(0xffffff, 100);
// // directionalLight.position.set(0, 1, 0);
// // directionalLight.castShadow = true;
// // scene.add(directionalLight);
// // var light = new PointLight(0xc4c4c4, 10);
// // light.position.set(0, 300, 500);
// // scene.add(light);
// // var light2 = new PointLight(0xc4c4c4, 10);
// // light2.position.set(500, 100, 0);
// // scene.add(light2);
// // var light3 = new PointLight(0xc4c4c4, 10);
// // light3.position.set(0, 100, -500);
// // scene.add(light3);
// // var light4 = new PointLight(0xc4c4c4, 10);
// // light4.position.set(-500, 300, 500);
// // scene.add(light4);

// // Load model
// let loader = new GLTFLoader();
// loader.load('/public/source/datrun/scene.gltf', function (gltf) {
//     // var car = gltf.scene.children[0];
//     // car.scale.set(0.5, 0.5, 0.5);
//     scene.add(gltf.scene);
//     // animate();
// });

// // Orbit control
// // let controls = new OrbitControls(camera);
// // controls.addEventListener('change', renderer);

// // function animate() {
// //     renderer.render(scene, camera);
// //     requestAnimationFrame(animate);
// // }