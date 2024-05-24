import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  canvas: document.querySelector('#canvas') 
});
renderer.setSize( 400, 400 );
camera.aspect = 1
camera.updateProjectionMatrix()
const loader = new THREE.TextureLoader()
const materials = [
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/woodSide.webp'),
    color: 0x80C96A
  }),
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/woodSide.webp'),
    color: 0x80C96A
  }),
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/highFive.png') }),
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/highFive.png') }),
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/highFive.png') }),
  new THREE.MeshBasicMaterial({ map: loader.load('assets/img/diamant2.jpg') })
]

const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} ); 
const cube = new THREE.Mesh( geometry, materials ); 
scene.add( cube );
cube.position.z = 0
camera.position.z = 8
cube.position.y = -0.4
cube.rotation.x = 0
cube.rotation.y = 5

let zSpeed = 0.01;

const animate = function() {
  cube.rotation.y += 0.01
  // Move the cube along z-axis
  camera.position.z += zSpeed;
  //console.log(camera.position.z)
  if (camera.position.z > 8 || camera.position.z < 5) {
      zSpeed = -zSpeed; // Reverse direction
  }
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()