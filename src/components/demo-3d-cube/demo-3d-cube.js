import React, { Component } from 'react';
import * as THREE from 'three';
import './demo-3d-cube.scss';

class Demo3DCube extends Component {
    componentDidMount() {
        const selectSide = document.getElementById('side');
        const container = document.getElementById('container');

        // scene
        const WIDTH = 600;
        const HEIGHT = 400;

        // camera
        const VIEW_ANGLE = 45;
        const NEAR = 0.1;
        const FAR = 100;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, WIDTH / HEIGHT, NEAR, FAR);
        const renderer = new THREE.WebGLRenderer();

        // set resolution based on dpr
        renderer.setPixelRatio(window.devicePixelRatio);

        scene.background = new THREE.Color('hsl(0, 0%, 95%)');
        scene.add(camera);
        scene.add(new THREE.AmbientLight(0x606060));

        camera.translateX(4);
        camera.translateY(6);
        camera.translateZ(8);
        camera.lookAt(0, 0, 0);

        // create geometry
        const geometry = new THREE.BoxBufferGeometry(2, 4, 2);

        // create materials
        const materials = [
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Right')),
            }),
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Left')),
            }),
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Top')),
            }),
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Bottom')),
            }),
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Front')),
            }),
            new THREE.MeshLambertMaterial({
                map: new THREE.CanvasTexture(getTextCanvas('Back')),
            }),
        ];
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        // geometry edge
        var edges = new THREE.EdgesGeometry(geometry);
        var edgesMaterial = new THREE.LineBasicMaterial({
            color: 0xbbbbbb,
            linewidth: 10,
            linecap: 'round',
            linejoin: 'round',
        });
        var edgesMesh = new THREE.LineSegments(edges, edgesMaterial);
        scene.add(edgesMesh);

        // 创建一个点光源
        const pointLight = new THREE.PointLight(0xffffff, 1, 100, 2);
        pointLight.position.set(1, 4, 0);
        // 将点光源加入场景
        scene.add(pointLight);

        var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(4, 1, 6);
        scene.add(directionalLight);

        // 启动渲染器
        renderer.setSize(WIDTH, HEIGHT);
        // 将渲染器加到DOM
        container.appendChild(renderer.domElement);
        // 开始渲染
        renderer.render(scene, camera);

        function getTextCanvas(text) {
            var width = 512,
                height = 256;
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            var ctx = canvas.getContext('2d');
            ctx.fillStyle = '#dddddd';
            ctx.fillRect(0, 0, width, height);

            ctx.font = 50 + 'px " bold';
            ctx.fillStyle = 'hsl(200,0%,30%)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, width / 2, height / 2);
            return canvas;
        }

        function render() {
            // cube.rotateY(0.005);
            // line.rotateY(0.005);
            renderer.render(scene, camera);
        }

        function easeInOut(t, b, c, d) {
            if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
            return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
        }

        function rotate(dx, dy) {
            const st = new Date();
            const duration = 1000;
            const sx = cube.rotation.x;
            const sy = cube.rotation.y;
            (function animate() {
                const t = new Date() - st;
                if (t > duration) return;
                cube.rotation.x = edgesMesh.rotation.x = easeInOut(t, sx, dx - sx, duration);
                cube.rotation.y = edgesMesh.rotation.y = easeInOut(t, sy, dy - sy, duration);
                render();
                requestAnimationFrame(animate);
            })();
        }

        selectSide.onchange = function (e) {
            const val = this.value;
            switch (parseInt(val, 10)) {
                case 0:
                    rotate(0, 0);
                    break;
                case 1: //left
                    rotate(0, Math.PI / 2);
                    break;
                case 2: //back
                    rotate(0, Math.PI);
                    break;
                case 3: //right
                    rotate(0, -Math.PI / 2);
                    break;
                case 4: //top
                    rotate(Math.PI / 2, 0);
                    break;
                case 5: //bottom
                    rotate(-Math.PI / 2, 0);
                    break;
                default:
                    break;
            }
        };
    }

    render() {
        return (
            <div className="demo-container">
                <label htmlFor="side">select side: &nbsp;</label>
                <select id="side">
                    <option value="0">front</option>
                    <option value="1">left</option>
                    <option value="2">back</option>
                    <option value="3">right</option>
                    <option value="4">top</option>
                    <option value="5">bottom</option>
                </select>
                <div id="container"></div>
            </div>
        );
    }
}

export default Demo3DCube;
