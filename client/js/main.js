import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const chargeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const chargeMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });

const arrowPosition = new THREE.Vector3(0.5, 0, 0);

const charge = new THREE.Mesh(chargeGeometry, chargeMaterial);

const direction = arrowPosition.clone().sub(charge.position);

direction.normalize();

const arrow = new THREE.ArrowHelper(direction, arrowPosition, 1, 0xffff00, 0.3, 0.2);

scene.add(charge);
scene.add(arrow);

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);