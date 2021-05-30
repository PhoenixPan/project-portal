import { DirectionalLight, Scene } from 'three';

export const createDirectionalLight = () => {
    const light = new DirectionalLight('white', 10);
    light.position.set(10, 10, 10);

    return light;
}
