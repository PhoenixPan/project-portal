import { DirectionalLight, Scene } from 'three';

export const createDirectionalLight = (scene: Scene) => {
    const light = new DirectionalLight('white', 8);
    light.position.set(10, 10, 10);
    scene.add(light);

    return light;
}
