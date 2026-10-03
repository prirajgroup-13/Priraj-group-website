import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LightingRigProps {
  scrollProgress: number;
}

export const LightingRig: React.FC<LightingRigProps> = ({ scrollProgress }) => {
  const dynamicGoldLightRef = useRef<THREE.PointLight>(null);
  const secondaryLightRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (dynamicGoldLightRef.current) {
      // Calculate target position based on scroll milestones
      let targetX = 1.5;
      let targetY = 2.0;
      let targetZ = 4.0;
      let intensity = 2.8;

      if (scrollProgress < 0.25) {
        // Hero to Services
        const t = scrollProgress / 0.25;
        targetX = THREE.MathUtils.lerp(1.5, 0.0, t);
        targetY = THREE.MathUtils.lerp(2.0, 3.2, t);
        targetZ = THREE.MathUtils.lerp(4.0, 5.5, t);
        intensity = THREE.MathUtils.lerp(2.8, 3.2, t);
      } else if (scrollProgress < 0.5) {
        // Services to Work
        const t = (scrollProgress - 0.25) / 0.25;
        targetX = THREE.MathUtils.lerp(0.0, -2.8, t);
        targetY = THREE.MathUtils.lerp(3.2, 0.5, t);
        targetZ = THREE.MathUtils.lerp(5.5, 4.8, t);
        intensity = 3.0;
      } else if (scrollProgress < 0.75) {
        // Work to About
        const t = (scrollProgress - 0.5) / 0.25;
        targetX = THREE.MathUtils.lerp(-2.8, 2.5, t);
        targetY = THREE.MathUtils.lerp(0.5, 1.8, t);
        targetZ = THREE.MathUtils.lerp(4.8, 4.2, t);
        intensity = 3.2;
      } else {
        // About to Process and Contact
        const t = (scrollProgress - 0.75) / 0.25;
        targetX = THREE.MathUtils.lerp(2.5, 0.0, t);
        targetY = THREE.MathUtils.lerp(1.8, 0.2, t);
        targetZ = THREE.MathUtils.lerp(4.2, 5.0, t);
        intensity = THREE.MathUtils.lerp(3.2, 3.8, t);
      }

      dynamicGoldLightRef.current.position.x = THREE.MathUtils.lerp(
        dynamicGoldLightRef.current.position.x,
        targetX,
        0.05
      );
      dynamicGoldLightRef.current.position.y = THREE.MathUtils.lerp(
        dynamicGoldLightRef.current.position.y,
        targetY,
        0.05
      );
      dynamicGoldLightRef.current.position.z = THREE.MathUtils.lerp(
        dynamicGoldLightRef.current.position.z,
        targetZ,
        0.05
      );
      dynamicGoldLightRef.current.intensity = THREE.MathUtils.lerp(
        dynamicGoldLightRef.current.intensity,
        intensity,
        0.05
      );
    }

    if (secondaryLightRef.current) {
      secondaryLightRef.current.position.x = Math.sin(scrollProgress * Math.PI) * 4.0;
    }
  });

  return (
    <>
      {/* Dark luxury ambient light */}
      <ambientLight intensity={0.4} color="#18181c" />

      {/* Main directional key light (warm gold highlight) */}
      <directionalLight
        position={[6, 8, 7]}
        intensity={2.2}
        color="#fae8b4"
      />

      {/* Rim light from behind-left (cool charcoal separation) */}
      <directionalLight
        position={[-8, -4, -6]}
        intensity={1.4}
        color="#64748b"
      />

      {/* Primary Dynamic Gold Accent Point Light */}
      <pointLight
        ref={dynamicGoldLightRef}
        position={[1.5, 2.0, 4.0]}
        intensity={2.8}
        color="#d4af37"
        distance={22}
        decay={2}
      />

      {/* Secondary fill light */}
      <pointLight
        ref={secondaryLightRef}
        position={[-3, -2, 3]}
        intensity={1.0}
        color="#937a34"
        distance={18}
        decay={2}
      />
    </>
  );
};
