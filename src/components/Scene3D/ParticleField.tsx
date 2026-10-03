import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  scrollProgress: number;
  scrollVelocity: number;
  particleDensity?: 'high' | 'medium' | 'low';
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  scrollProgress,
  scrollVelocity,
  particleDensity = 'high'
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const count = useMemo(() => {
    if (particleDensity === 'low') return 600;
    if (particleDensity === 'medium') return 1100;
    return 1800;
  }, [particleDensity]);

  const [positions, colors, originalY, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const origY = new Float32Array(count);
    const spd = new Float32Array(count);

    const goldColor = new THREE.Color('#d4af37');
    const lightGold = new THREE.Color('#fae8b4');
    const whiteColor = new THREE.Color('#ffffff');
    const subtleGrey = new THREE.Color('#4a4a55');

    for (let i = 0; i < count; i++) {
      // Spatial distribution: wide cylinder around the camera trajectory
      const radius = 3.5 + Math.random() * 14;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 32;
      const z = (Math.random() - 0.5) * 28 - 2;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      origY[i] = y;
      spd[i] = 0.2 + Math.random() * 0.8;

      // Color selection (35% gold, 25% pale gold, 25% white, 15% dark graphite)
      const rand = Math.random();
      let chosenColor = whiteColor;
      if (rand < 0.35) chosenColor = goldColor;
      else if (rand < 0.6) chosenColor = lightGold;
      else if (rand > 0.85) chosenColor = subtleGrey;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col, origY, spd];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = positionAttr.array as Float32Array;

    const velocityImpact = Math.min(Math.abs(scrollVelocity) * 2.5, 3.0);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = speeds[i];

      // Subtle orbital drift
      posArray[i3] += Math.sin(time * 0.3 + i) * 0.003 * speed;

      // Scroll-driven vertical movement with velocity kick
      const scrollOffset = scrollProgress * 14;
      let newY = (originalY[i] - scrollOffset + time * 0.15 * speed) % 32;
      if (newY < -16) newY += 32;

      // Add velocity burst
      newY += (scrollVelocity > 0 ? -1 : 1) * velocityImpact * 0.02 * speed;
      posArray[i3 + 1] = newY;

      // Swirl depth slightly with scroll
      posArray[i3 + 2] += Math.cos(time * 0.25 + i * 0.5) * 0.004;
    }

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
