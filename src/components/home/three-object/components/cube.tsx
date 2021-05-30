

import { BoxBufferGeometry, MeshStandardMaterial, Mesh, MathUtils } from 'three';

export const createCube = () => {
    var geometry = new BoxBufferGeometry(5, 5, 5);
    // var material = new MeshBasicMaterial({ color: 0xff0000 });
    const materialProps = { color: 'purple' };
    var material = new MeshStandardMaterial(materialProps);
    var cube = new Mesh(geometry, material);
    cube.position.z = 10;
    cube.rotation.set(MathUtils.degToRad(60), 0, Math.PI / 3);

    return cube;
}
