const scene = new THREE.Scene();
const camera = new THREE.PrespectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry( 1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()
