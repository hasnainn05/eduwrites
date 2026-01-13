"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function Canvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with fog for depth
    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.Fog(0x000000, 150, 200);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      2000,
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup with improved settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: "highp",
      powerPreference: "high-performance",
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.pointerEvents = "none";
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Key light (cyan) - primary illumination
    const keyLight = new THREE.PointLight(0x00d9ff, 1.2, 150);
    keyLight.position.set(40, 40, 40);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill light (indigo) - secondary illumination
    const fillLight = new THREE.PointLight(0x4f46e5, 0.8, 120);
    fillLight.position.set(-40, -40, 40);
    fillLight.castShadow = true;
    scene.add(fillLight);

    // Back light (purple) - rim lighting
    const backLight = new THREE.PointLight(0xc084fc, 0.6, 100);
    backLight.position.set(0, 0, -50);
    scene.add(backLight);

    // Create geometric meshes with enhanced materials
    const meshes: THREE.Mesh[] = [];

    // Torus - primary focal point
    const torusGeometry = new THREE.TorusGeometry(15, 4, 64, 128);
    const torusMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d9ff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.2,
      metalness: 0.5,
      roughness: 0.3,
      envMapIntensity: 1,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-20, 0, 0);
    torus.rotation.x = Math.PI * 0.3;
    torus.rotation.y = Math.PI * 0.5;
    torus.castShadow = true;
    torus.receiveShadow = true;
    scene.add(torus);
    meshes.push(torus);

    // Octahedron - geometric accent
    const octaGeometry = new THREE.OctahedronGeometry(12, 4);
    const octaMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.15,
      metalness: 0.4,
      roughness: 0.4,
      envMapIntensity: 0.8,
      clearcoat: 0.2,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(25, 15, -20);
    octahedron.rotation.x = Math.PI * 0.2;
    octahedron.rotation.y = Math.PI * 0.6;
    octahedron.castShadow = true;
    octahedron.receiveShadow = true;
    scene.add(octahedron);
    meshes.push(octahedron);

    // Icosahedron - smooth accent
    const icoGeometry = new THREE.IcosahedronGeometry(10, 5);
    const icoMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc084fc,
      emissive: 0xc084fc,
      emissiveIntensity: 0.18,
      metalness: 0.3,
      roughness: 0.5,
      envMapIntensity: 0.7,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(-25, 18, -15);
    icosahedron.rotation.x = Math.PI * 0.4;
    icosahedron.rotation.y = Math.PI * 0.3;
    icosahedron.castShadow = true;
    icosahedron.receiveShadow = true;
    scene.add(icosahedron);
    meshes.push(icosahedron);

    // Tetrahedron - dynamic accent
    const tetGeometry = new THREE.TetrahedronGeometry(9, 3);
    const tetMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.2,
      metalness: 0.6,
      roughness: 0.25,
      envMapIntensity: 1,
      clearcoat: 0.25,
    });
    const tetrahedron = new THREE.Mesh(tetGeometry, tetMaterial);
    tetrahedron.position.set(18, -15, -10);
    tetrahedron.rotation.x = Math.PI * 0.25;
    tetrahedron.rotation.y = Math.PI * 0.7;
    tetrahedron.castShadow = true;
    tetrahedron.receiveShadow = true;
    scene.add(tetrahedron);
    meshes.push(tetrahedron);

    // Dodecahedron - additional geometric interest
    const dodGeometry = new THREE.DodecahedronGeometry(8, 1);
    const dodMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.15,
      metalness: 0.35,
      roughness: 0.45,
      envMapIntensity: 0.6,
    });
    const dodecahedron = new THREE.Mesh(dodGeometry, dodMaterial);
    dodecahedron.position.set(-15, -18, -5);
    dodecahedron.rotation.x = Math.PI * 0.15;
    dodecahedron.rotation.y = Math.PI * 0.4;
    dodecahedron.castShadow = true;
    dodecahedron.receiveShadow = true;
    scene.add(dodecahedron);
    meshes.push(dodecahedron);

    // Wireframe sphere for layering
    const sphereGeometry = new THREE.SphereGeometry(20, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      fog: false,
    });
    const wireframeSphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    wireframeSphere.position.set(0, 0, 0);
    scene.add(wireframeSphere);
    meshes.push(wireframeSphere);

    // Additional small accent meshes
    const smallGeoGeometry = new THREE.BoxGeometry(3, 3, 3);
    const smallMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d9ff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
    });
    const smallBox = new THREE.Mesh(smallGeoGeometry, smallMaterial);
    smallBox.position.set(35, 25, -25);
    smallBox.castShadow = true;
    scene.add(smallBox);
    meshes.push(smallBox);

    meshesRef.current = meshes;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop with smooth easing
    const animate = () => {
      requestAnimationFrame(animate);
      timeRef.current += 0.002;

      // Smooth mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate and animate meshes
      meshes.forEach((mesh, index) => {
        // Smoother rotation with varying speeds
        mesh.rotation.x += 0.0008 + index * 0.0004;
        mesh.rotation.y += 0.0012 + index * 0.0006;
        mesh.rotation.z += 0.0004 + index * 0.0002;

        // Smooth floating motion with varied amplitudes
        const floatAmplitude = 0.03 + index * 0.01;
        const floatSpeed = 0.8 + index * 0.2;
        mesh.position.x +=
          Math.sin(timeRef.current * floatSpeed + index) *
          floatAmplitude *
          (1 + index * 0.2);
        mesh.position.y +=
          Math.cos(timeRef.current * (floatSpeed * 0.7) + index * 0.5) *
          floatAmplitude *
          (1 + index * 0.15);
      });

      // Smooth parallax camera movement
      camera.position.x += (mouseX * 20 - camera.position.x) * 0.08;
      camera.position.y += (mouseY * 20 - camera.position.y) * 0.08;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch (e) {
          // Element might already be removed
        }
      }
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => mat.dispose());
        } else {
          mesh.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, rgba(0,217,255,0.1) 0%, rgba(79,70,229,0.06) 35%, rgba(192,132,252,0.04) 70%, transparent 100%)",
      }}
    />
  );
}
