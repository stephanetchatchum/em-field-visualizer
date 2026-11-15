import * as THREE from "three";

console.log(THREE.REVISION);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const chargeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const chargeMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333});

const charge = new THREE.Mesh(chargeGeometry, chargeMaterial)

scene.add(charge)

function animate() {
    charge.rotation.x += 0.01;
    charge.rotation.y += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);