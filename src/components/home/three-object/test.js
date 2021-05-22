import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Test extends Component {
    componentDidMount() {
        const container = document.querySelector('#three-container');

        // Basic Setup
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.set(0, 0, 10);
        // camera.lookAt(scene.position);

        // test
        var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);




        var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);

        // const gltfLoader = new GLTFLoader();
        // // const url = 'public/resources/city/scene.gltf';
        // const url = 'https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf';
        // gltfLoader.load(url, (gltf) => {
        //     var obj = gltf.scene.children[0];
        //     console.log(obj);
        //     // obj.scale.set(0.5, 0.5, 0.5);
        //     scene.add(gltf.scene);

        // });

        // Orbit control
        // let controls = new OrbitControls(camera);
        // controls.addEventListener('change', renderer);

        // function animate() {
        //     requestAnimationFrame(animate);
        //     renderer.render(scene, camera);
        // }
        // animate();


        // var animate = function () {
        //     requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render(scene, camera);
        // };
        // animate();
    }

    render() {
        return (
            <div className="demo-container">
                <div id="three-container"></div>
            </div>
        );
    }
}

export default Test;
