import { WebGLRenderer } from 'three';

export const createRenderer = () => {
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });;
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.physicallyCorrectLights = true;

    return renderer;
}
