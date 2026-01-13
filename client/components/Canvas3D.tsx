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

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
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

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: "highp",
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.pointerEvents = "none";
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d9ff, 1, 100);
    pointLight1.position.set(30, 30, 30);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, 0.8, 100);
    pointLight2.position.set(-30, -30, 30);
    scene.add(pointLight2);

    // Create geometric meshes
    const meshes: THREE.Mesh[] = [];

    // Torus geometry - modern, flowing
    const torusGeometry = new THREE.TorusGeometry(15, 4, 32, 100);
    const toriusMaterial = new THREE.MeshPhongMaterial({
      color: 0x00d9ff,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.3,
      wireframe: false,
      shininess: 100,
    });
    const torus = new THREE.Mesh(torusGeometry, toriusMaterial);
    torus.position.set(-20, 0, 0);
    torus.rotation.x = Math.random() * Math.PI;
    torus.rotation.y = Math.random() * Math.PI;
    scene.add(torus);
    meshes.push(torus);

    // Octahedron - geometric, modern
    const octaGeometry = new THREE.OctahedronGeometry(12, 3);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x6366f1,
      emissiveIntensity: 0.2,
      wireframe: false,
      shininess: 80,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(20, 0, -10);
    octahedron.rotation.x = Math.random() * Math.PI;
    octahedron.rotation.y = Math.random() * Math.PI;
    scene.add(octahedron);
    meshes.push(octahedron);

    // Icosahedron - smooth, geometric
    const icoGeometry = new THREE.IcosahedronGeometry(10, 4);
    const icoMaterial = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.25,
      wireframe: false,
      shininess: 90,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(0, 20, -5);
    icosahedron.rotation.x = Math.random() * Math.PI;
    icosahedron.rotation.y = Math.random() * Math.PI;
    scene.add(icosahedron);
    meshes.push(icosahedron);

    // Wireframe torus for layering effect
    const wireframeGeometry = new THREE.TorusGeometry(8, 2, 32, 100);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireframeTorus = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframeTorus.position.set(-20, 0, 5);
    wireframeTorus.rotation.x = 0.5;
    wireframeTorus.rotation.y = 0.5;
    scene.add(wireframeTorus);
    meshes.push(wireframeTorus);

    // Tetrahedron for additional geometry
    const tetGeometry = new THREE.TetrahedronGeometry(8, 2);
    const tetMaterial = new THREE.MeshPhongMaterial({
      color: 0xec4899,
      emissive: 0xec4899,
      emissiveIntensity: 0.2,
      wireframe: false,
      shininess: 85,
    });
    const tetrahedron = new THREE.Mesh(tetGeometry, tetMaterial);
    tetrahedron.position.set(0, -20, -15);
    tetrahedron.rotation.x = Math.random() * Math.PI;
    tetrahedron.rotation.y = Math.random() * Math.PI;
    scene.add(tetrahedron);
    meshes.push(tetrahedron);

    meshesRef.current = meshes;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      timeRef.current += 0.002;

      // Rotate and animate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 + (index * 0.0005);
        mesh.rotation.y += 0.0015 + (index * 0.0008);
        mesh.rotation.z += 0.0005 + (index * 0.0003);

        // Subtle position animation
        mesh.position.x +=
          Math.sin(timeRef.current + index) * 0.02 * (1 + index * 0.3);
        mesh.position.y +=
          Math.cos(timeRef.current + index * 0.5) * 0.02 * (1 + index * 0.2);
      });

      // Camera position influenced by mouse
      camera.position.x = mouseX * 15;
      camera.position.y = mouseY * 15;
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
          "radial-gradient(circle at 30% 30%, rgba(0,217,255,0.08) 0%, rgba(99,102,241,0.05) 40%, transparent 80%)",
      }}
    />
  );
}
