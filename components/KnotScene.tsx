'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function KnotScene({ scrollYProgress }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, 2]} intensity={2.5} color="#ff6a2a" />
      <pointLight position={[5, 3, -2]} intensity={1.2} color="#7eb89a" />
      <pointLight position={[0, -5, 3]} intensity={0.8} color="#c8a8d0" />
      <Knot scrollYProgress={scrollYProgress} />
      <Environment preset="sunset" />
    </Canvas>
  );
}

function Knot({ scrollYProgress }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    const progress = scrollYProgress.get();
    meshRef.current.rotation.y = progress * Math.PI * 4;
    meshRef.current.rotation.x = -0.3 + progress * 0.6;
  });

  return (
    <mesh ref={meshRef} scale={1.4}>
      <torusKnotGeometry args={[1, 0.38, 200, 32, 2, 3]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        thickness={0.4}
        chromaticAberration={0.06}
        anisotropy={0.5}
        distortion={0.1}
        distortionScale={0.5}
        temporalDistortion={0.1}
        iridescence={1}
        iridescenceIOR={1.4}
        iridescenceThicknessRange={[100, 800]}
        clearcoat={1}
        clearcoatRoughness={0.1}
        roughness={0.05}
        metalness={0.85}
        color="#2a1820"
      />
    </mesh>
  );
}
