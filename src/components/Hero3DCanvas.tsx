import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Cpu, ShieldCheck, Cog, Eye, Play, Pause, RotateCw } from 'lucide-react';

type VisualizationMode = 'mechanical' | 'cyber' | 'nexus';

interface Hero3DCanvasProps {
  onInteract?: (info: string) => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ onInteract }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<VisualizationMode>('mechanical');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [hudStatus, setHudStatus] = useState<string>('Gdx2 Mechanical Synchronizer: Nominal');
  const animationFrameIdRef = useRef<number | null>(null);

  // Store references for animation updates
  const sceneElementsRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    gearGroup: THREE.Group;
    cyberGroup: THREE.Group;
    particlesMesh: THREE.Points;
    coreMesh: THREE.Mesh;
    wireframeDome: THREE.Mesh;
    lights: THREE.PointLight[];
  } | null>(null);

  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 480;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Context loss listener
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('WebGL context lost');
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x06b6d4, 4, 30);
    lightCyan.position.set(5, 5, 5);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0xa855f7, 3.5, 30);
    lightViolet.position.set(-5, -4, 4);
    scene.add(lightViolet);

    const lightAmber = new THREE.PointLight(0xf59e0b, 2.5, 25);
    lightAmber.position.set(0, -6, 2);
    scene.add(lightAmber);

    // 5. Build 3D Mechanical Assembly (representing Piyal's high-precision Gdx2 packaging expertise)
    const gearGroup = new THREE.Group();

    // Outer Gear Rim
    const gearGeometry = new THREE.TorusGeometry(2.3, 0.12, 16, 64);
    const gearMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    });
    const gearRing = new THREE.Mesh(gearGeometry, gearMaterial);
    gearGroup.add(gearRing);

    // Gear Teeth
    const teethCount = 18;
    for (let i = 0; i < teethCount; i++) {
      const toothGeo = new THREE.BoxGeometry(0.16, 0.35, 0.2);
      const toothMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        metalness: 0.9,
        roughness: 0.25,
      });
      const tooth = new THREE.Mesh(toothGeo, toothMat);
      const angle = (i / teethCount) * Math.PI * 2;
      tooth.position.set(Math.cos(angle) * 2.35, Math.sin(angle) * 2.35, 0);
      tooth.rotation.z = angle;
      gearGroup.add(tooth);
    }

    // Secondary Interlocking Ring
    const innerRingGeo = new THREE.TorusGeometry(1.65, 0.08, 16, 48);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.8,
      roughness: 0.3,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 4;
    gearGroup.add(innerRing);

    // Third Gyro Ring
    const gyroRingGeo = new THREE.TorusGeometry(1.2, 0.06, 16, 36);
    const gyroRingMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.7,
      roughness: 0.3,
    });
    const gyroRing = new THREE.Mesh(gyroRingGeo, gyroRingMat);
    gyroRing.rotation.y = Math.PI / 3;
    gearGroup.add(gyroRing);

    scene.add(gearGroup);

    // 6. Build Cybernetic OT Shield Group (representing Cyber Security & ICS protection)
    const cyberGroup = new THREE.Group();

    // Protective geodesic dome
    const domeGeo = new THREE.IcosahedronGeometry(2.6, 2);
    const domeMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeDome = new THREE.Mesh(domeGeo, domeMat);
    cyberGroup.add(wireframeDome);

    // Cyber Nodes
    const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.6;
      node.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      cyberGroup.add(node);
    }
    scene.add(cyberGroup);

    // 7. Central Crystalline / Cyber Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.8,
      ior: 1.5,
      thickness: 1.2,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // 8. Particle Cloud
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x06b6d4); // Cyan
    const c2 = new THREE.Color(0xa855f7); // Violet
    const c3 = new THREE.Color(0xf59e0b); // Amber

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    sceneElementsRef.current = {
      scene,
      camera,
      renderer,
      gearGroup,
      cyberGroup,
      particlesMesh,
      coreMesh,
      wireframeDome,
      lights: [lightCyan, lightViolet, lightAmber],
    };

    // Mouse movement handler for interactive parallax
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x * 0.7;
      mousePos.current.targetY = y * 0.7;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Smooth mouse lerping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.06;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.06;

      const speedMultiplier = isRotating ? rotationSpeed : 0.05;

      // Rotate Gear Mechanism
      gearGroup.rotation.z += 0.012 * speedMultiplier;
      gearGroup.rotation.x = mousePos.current.y * 0.5 + Math.sin(elapsedTime * 0.5) * 0.1;
      gearGroup.rotation.y = mousePos.current.x * 0.5;

      innerRing.rotation.y += 0.018 * speedMultiplier;
      gyroRing.rotation.x += 0.02 * speedMultiplier;

      // Rotate Cyber Shield
      cyberGroup.rotation.y -= 0.008 * speedMultiplier;
      cyberGroup.rotation.x = mousePos.current.y * 0.4;
      wireframeDome.rotation.z += 0.004;

      // Pulse Core
      const pulse = Math.sin(elapsedTime * 2.5) * 0.08 + 1;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreMesh.rotation.y += 0.015 * speedMultiplier;
      coreMesh.rotation.x += 0.01 * speedMultiplier;

      // Particles Swirl
      particlesMesh.rotation.y += 0.003 * speedMultiplier;
      particlesMesh.rotation.x = mousePos.current.y * 0.2;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating, rotationSpeed]);

  // Handle Mode Changes
  const handleModeChange = (mode: VisualizationMode) => {
    setActiveMode(mode);
    const elements = sceneElementsRef.current;
    if (!elements) return;

    if (mode === 'mechanical') {
      elements.gearGroup.visible = true;
      elements.cyberGroup.visible = false;
      elements.coreMesh.material = new THREE.MeshPhysicalMaterial({
        color: 0x0ea5e9,
        emissive: 0x0284c7,
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
      });
      setHudStatus('Gdx2 Mechanical Synchronizer: 420 packs/min [Calibrated]');
      onInteract?.('Inspecting Mechanical Gear Synchronization & Cam Drive');
    } else if (mode === 'cyber') {
      elements.gearGroup.visible = false;
      elements.cyberGroup.visible = true;
      elements.coreMesh.material = new THREE.MeshPhysicalMaterial({
        color: 0x10b981,
        emissive: 0x047857,
        emissiveIntensity: 0.6,
        roughness: 0.15,
        wireframe: true,
      });
      setHudStatus('Industrial OT Firewall: Modbus & SCADA Intrusion Guard [Active]');
      onInteract?.('Inspecting Industrial OT & SCADA Network Isolation Dome');
    } else {
      // Nexus mode (both active)
      elements.gearGroup.visible = true;
      elements.cyberGroup.visible = true;
      elements.coreMesh.material = new THREE.MeshPhysicalMaterial({
        color: 0x8b5cf6,
        emissive: 0x6d28d9,
        emissiveIntensity: 0.7,
        roughness: 0.2,
      });
      setHudStatus('Cyber-Physical Nexus: Integrated Mechanical + OT Protection [Online]');
      onInteract?.('Cyber-Physical Dual Architecture: Physical Plant + Cyber Resilience');
    }
  };

  const cycleSpeed = () => {
    const nextSpeed = rotationSpeed === 1 ? 1.8 : rotationSpeed === 1.8 ? 0.4 : 1;
    setRotationSpeed(nextSpeed);
  };

  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 shadow-2xl flex flex-col">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full" />

      {/* Top Floating Glass HUD */}
      <div className="relative z-10 p-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
          <Eye className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-medium text-slate-300">3D Interactive Core</span>
          <span className="text-slate-600">·</span>
          <span className="text-xs font-mono text-cyan-400">Three.js</span>
        </div>

        {/* Speed & Rotation Quick Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            aria-label={isRotating ? 'Pause 3D rotation' : 'Resume 3D rotation'}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
            title={isRotating ? 'Pause rotation' : 'Resume rotation'}
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={cycleSpeed}
            aria-label="Adjust 3D rotation speed"
            className="px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            title="Cycle rotation speed"
          >
            <RotateCw className="w-3 h-3" />
            <span>{rotationSpeed}x</span>
          </button>
        </div>
      </div>

      {/* Bottom Interactive HUD & Mode Tabs */}
      <div className="mt-auto relative z-10 p-4 space-y-3 pointer-events-auto">
        {/* Status ticker */}
        <div className="px-3.5 py-2 rounded-lg bg-slate-950/85 border border-slate-800 backdrop-blur-md flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="font-mono text-slate-300 truncate">{hudStatus}</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500 hidden sm:inline shrink-0 pl-2">
            Move mouse to orbit
          </span>
        </div>

        {/* Mode Selector Segmented Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800/80 backdrop-blur-md">
          <button
            onClick={() => handleModeChange('mechanical')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
              activeMode === 'mechanical'
                ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cog className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Mechanical Core</span>
          </button>

          <button
            onClick={() => handleModeChange('cyber')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
              activeMode === 'cyber'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">OT Cyber Shield</span>
          </button>

          <button
            onClick={() => handleModeChange('nexus')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
              activeMode === 'nexus'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Integrated Nexus</span>
          </button>
        </div>
      </div>
    </div>
  );
};
