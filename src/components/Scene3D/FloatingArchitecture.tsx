import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingArchitectureProps {
  scrollProgress: number;
  mode?: 'cinematic' | 'architectural' | 'minimal';
}

export const FloatingArchitecture: React.FC<FloatingArchitectureProps> = ({ scrollProgress, mode = 'cinematic' }) => {
  const centralGroupRef = useRef<THREE.Group>(null);
  const outerRing1Ref = useRef<THREE.Mesh>(null);
  const outerRing2Ref = useRef<THREE.Mesh>(null);
  const outerRing3Ref = useRef<THREE.Mesh>(null);
  const satelliteGroupRef = useRef<THREE.Group>(null);
  const monolithGroupRef = useRef<THREE.Group>(null);

  // Generate satellite architectural shapes
  const satellites = useMemo(() => {
    const items = [];
    const count = mode === 'minimal' ? 8 : 18;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3.8 + (i % 3) * 1.6;
      const x = Math.cos(angle) * radius;
      const y = ((i % 5) - 2) * 1.4;
      const z = Math.sin(angle) * radius - (i % 4) * 1.5;
      const scale = 0.22 + (i % 4) * 0.14;
      const type = i % 3; // 0: octahedron, 1: box, 2: icosahedron
      const speed = 0.3 + (i % 5) * 0.15;
      items.push({ x, y, z, scale, type, speed, initialAngle: angle, radius });
    }
    return items;
  }, [mode]);

  // Generate architectural monoliths in the background
  const monoliths = useMemo(() => {
    const list = [];
    const count = mode === 'minimal' ? 6 : 14;
    for (let i = 0; i < count; i++) {
      const x = (i % 2 === 0 ? -1 : 1) * (5 + (i * 0.9));
      const z = -4 - (i * 1.8);
      const height = 3.5 + (i % 4) * 2.2;
      const y = -height / 2 + 1;
      const width = 0.6 + (i % 3) * 0.3;
      list.push({ x, y, z, width, height });
    }
    return list;
  }, [mode]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Central geometric structure rotation
    if (centralGroupRef.current) {
      centralGroupRef.current.rotation.y = time * 0.18 + scrollProgress * Math.PI * 1.5;
      centralGroupRef.current.rotation.x = Math.sin(time * 0.12) * 0.25 + scrollProgress * 0.4;
      centralGroupRef.current.rotation.z = Math.cos(time * 0.15) * 0.15;

      // Subtle breath scale
      const breath = 1 + Math.sin(time * 0.8) * 0.03;
      centralGroupRef.current.scale.set(breath, breath, breath);
    }

    // Concentric orbiting rings
    if (outerRing1Ref.current) {
      outerRing1Ref.current.rotation.x = time * 0.22 + scrollProgress * 0.8;
      outerRing1Ref.current.rotation.y = time * 0.15;
    }
    if (outerRing2Ref.current) {
      outerRing2Ref.current.rotation.y = -time * 0.18 - scrollProgress * 0.6;
      outerRing2Ref.current.rotation.z = time * 0.25;
    }
    if (outerRing3Ref.current) {
      outerRing3Ref.current.rotation.x = -time * 0.12;
      outerRing3Ref.current.rotation.z = time * 0.16 + scrollProgress * 1.1;
    }

    // Satellites orbital movement
    if (satelliteGroupRef.current) {
      satelliteGroupRef.current.children.forEach((child, index) => {
        const item = satellites[index];
        if (!item) return;
        const currentAngle = item.initialAngle + time * 0.08 * item.speed + scrollProgress * 1.2;
        child.position.x = Math.cos(currentAngle) * item.radius;
        child.position.z = Math.sin(currentAngle) * item.radius + (scrollProgress * 2.5);
        child.position.y = item.y + Math.sin(time * 0.5 + index) * 0.4 - scrollProgress * 1.5;
        child.rotation.x += delta * item.speed * 0.8;
        child.rotation.y += delta * item.speed * 1.2;
      });
    }

    // Monoliths depth response
    if (monolithGroupRef.current) {
      monolithGroupRef.current.position.y = THREE.MathUtils.lerp(
        monolithGroupRef.current.position.y,
        -scrollProgress * 2.2,
        0.05
      );
    }
  });

  return (
    <group>
      {/* Central Hero Prism / Polyhedral Structure */}
      <group ref={centralGroupRef} position={[0, 0, 0]}>
        {/* Core faceted golden octahedron / diamond */}
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial
            color="#d4af37"
            emissive="#1a1405"
            metalness={0.92}
            roughness={0.18}
            clearcoat={0.6}
            clearcoatRoughness={0.1}
            reflectivity={0.9}
          />
        </mesh>

        {/* Inner glowing core */}
        <mesh>
          <icosahedronGeometry args={[0.75, 1]} />
          <meshStandardMaterial
            color="#fff6d6"
            emissive="#ffd700"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {/* Outer protective cage / Wireframe icosahedron */}
        <mesh>
          <icosahedronGeometry args={[2.0, 0]} />
          <meshStandardMaterial
            color="#e5c07b"
            emissive="#332200"
            metalness={0.95}
            roughness={0.15}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>

        {/* Orbiting Ring 1 (Gold Torus) */}
        <mesh ref={outerRing1Ref}>
          <torusGeometry args={[2.5, 0.022, 16, 100]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.95}
            roughness={0.1}
            emissive="#775500"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Orbiting Ring 2 (Titanium & Gold Thin Torus) */}
        <mesh ref={outerRing2Ref}>
          <torusGeometry args={[2.9, 0.016, 16, 100]} />
          <meshStandardMaterial
            color="#e0e0e0"
            metalness={0.9}
            roughness={0.2}
            emissive="#222222"
          />
        </mesh>

        {/* Orbiting Ring 3 (Outer Gold Boundary) */}
        <mesh ref={outerRing3Ref}>
          <torusGeometry args={[3.3, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#c5a059"
            metalness={0.95}
            roughness={0.15}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* Orbiting Satellite Shards and Prisms */}
      <group ref={satelliteGroupRef}>
        {satellites.map((s, idx) => (
          <mesh key={idx} position={[s.x, s.y, s.z]} scale={[s.scale, s.scale, s.scale]}>
            {s.type === 0 && <octahedronGeometry args={[1, 0]} />}
            {s.type === 1 && <boxGeometry args={[0.9, 0.9, 0.9]} />}
            {s.type === 2 && <tetrahedronGeometry args={[1, 0]} />}
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#d4af37' : '#2a2a2e'}
              metalness={0.88}
              roughness={0.22}
              emissive={idx % 3 === 0 ? '#443300' : '#111111'}
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* Architectural Monoliths in Deep Z */}
      <group ref={monolithGroupRef}>
        {monoliths.map((m, idx) => (
          <group key={idx} position={[m.x, m.y, m.z]}>
            {/* Dark monolithic pillar */}
            <mesh>
              <boxGeometry args={[m.width, m.height, m.width]} />
              <meshStandardMaterial
                color="#0f0f12"
                metalness={0.85}
                roughness={0.3}
                emissive="#08080a"
              />
            </mesh>
            {/* Subtle illuminated gold crown cap */}
            <mesh position={[0, m.height / 2 + 0.04, 0]}>
              <boxGeometry args={[m.width * 1.04, 0.08, m.width * 1.04]} />
              <meshStandardMaterial
                color="#d4af37"
                emissive="#8a6d1c"
                emissiveIntensity={0.6}
                metalness={0.9}
                roughness={0.15}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};
