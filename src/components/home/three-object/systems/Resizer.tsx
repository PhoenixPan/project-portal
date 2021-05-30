import { PerspectiveCamera, WebGLRenderer } from "three";

export const resize = (container: Element | null, camera: PerspectiveCamera, renderer: WebGLRenderer) => {
    if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
    renderer.setPixelRatio(window.devicePixelRatio);
}
