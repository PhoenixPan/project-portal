

import { BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three';

export const createTestCube = () => {
    var geometry = new BoxBufferGeometry(1, 1, 1);
    // var material = new MeshBasicMaterial({ color: 0xff0000 });
    var material = new MeshStandardMaterial({ color: 'purple' });
    var cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;
}
