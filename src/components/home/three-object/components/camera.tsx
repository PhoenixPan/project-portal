import { PerspectiveCamera, Scene } from 'three';

export const createCamera = (scene?: Scene) => {
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(20, 0, 20);
    if (scene) {
        camera.lookAt(scene.position);
        // camera.lookAt(new THREE.Vector3(0, 0, 0)); // same as above?
    }

    return camera;
}
