import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  scrollProgress: number;
  mouse: { x: number; y: number };
  viewMode?: 'cinematic' | 'architectural' | 'minimal';
}

export const CameraRig: React.FC<CameraRigProps> = ({
  scrollProgress,
  mouse,
  viewMode = 'cinematic'
}) => {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 8));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Determine target camera position based on scroll progress
    let targetX = 0;
    let targetY = 0;
    let targetZ = 7.8;

    let lookAtX = 0;
    let lookAtY = 0;
    let lookAtZ = 0;

    if (scrollProgress < 0.15) {
      // Hero (0.0 -> 0.15): Close to central prism
      const t = scrollProgress / 0.15;
      targetX = THREE.MathUtils.lerp(0, 0, t);
      targetY = THREE.MathUtils.lerp(0, 0.8, t);
      targetZ = THREE.MathUtils.lerp(7.8, 9.8, t);

      lookAtX = 0;
      lookAtY = THREE.MathUtils.lerp(0, 0.3, t);
      lookAtZ = 0;
    } else if (scrollProgress < 0.32) {
      // Services (0.15 -> 0.32): Pulls back slightly, reveals geometric satellites
      const t = (scrollProgress - 0.15) / 0.17;
      targetX = THREE.MathUtils.lerp(0, -1.8, t);
      targetY = THREE.MathUtils.lerp(0.8, 1.4, t);
      targetZ = THREE.MathUtils.lerp(9.8, 10.8, t);

      lookAtX = THREE.MathUtils.lerp(0, 0.4, t);
      lookAtY = THREE.MathUtils.lerp(0.3, 0.2, t);
      lookAtZ = 0;
    } else if (scrollProgress < 0.48) {
      // Packages (0.32 -> 0.48): Balanced framing with subtle elevated angle
      const t = (scrollProgress - 0.32) / 0.16;
      targetX = THREE.MathUtils.lerp(-1.8, 1.6, t);
      targetY = THREE.MathUtils.lerp(1.4, 0.5, t);
      targetZ = THREE.MathUtils.lerp(10.8, 9.5, t);

      lookAtX = THREE.MathUtils.lerp(0.4, -0.3, t);
      lookAtY = THREE.MathUtils.lerp(0.2, 0.1, t);
      lookAtZ = 0;
    } else if (scrollProgress < 0.65) {
      // Work (0.48 -> 0.65): Lateral movement through portfolio
      const t = (scrollProgress - 0.48) / 0.17;
      targetX = THREE.MathUtils.lerp(1.6, -2.6, t);
      targetY = THREE.MathUtils.lerp(0.5, -0.6, t);
      targetZ = THREE.MathUtils.lerp(9.5, 9.0, t);

      lookAtX = THREE.MathUtils.lerp(-0.3, 0.6, t);
      lookAtY = THREE.MathUtils.lerp(0.1, 0, t);
      lookAtZ = 0;
    } else if (scrollProgress < 0.80) {
      // About (0.65 -> 0.80): Deeper architectural view
      const t = (scrollProgress - 0.65) / 0.15;
      targetX = THREE.MathUtils.lerp(-2.6, 2.2, t);
      targetY = THREE.MathUtils.lerp(-0.6, 1.6, t);
      targetZ = THREE.MathUtils.lerp(9.0, 8.2, t);

      lookAtX = THREE.MathUtils.lerp(0.6, -0.4, t);
      lookAtY = THREE.MathUtils.lerp(0, 0.2, t);
      lookAtZ = 0;
    } else if (scrollProgress < 0.92) {
      // Process (0.80 -> 0.92): Sequential descending path
      const t = (scrollProgress - 0.80) / 0.12;
      targetX = THREE.MathUtils.lerp(2.2, 0, t);
      targetY = THREE.MathUtils.lerp(1.6, -1.6, t);
      targetZ = THREE.MathUtils.lerp(8.2, 9.0, t);

      lookAtX = THREE.MathUtils.lerp(-0.4, 0, t);
      lookAtY = THREE.MathUtils.lerp(0.2, -0.5, t);
      lookAtZ = 0;
    } else {
      // Contact (0.92 -> 1.0): Calm settle with spotlight on CTA
      const t = (scrollProgress - 0.92) / 0.08;
      targetX = THREE.MathUtils.lerp(0, 0, t);
      targetY = THREE.MathUtils.lerp(-1.6, 0.2, t);
      targetZ = THREE.MathUtils.lerp(9.0, 8.2, t);

      lookAtX = 0;
      lookAtY = THREE.MathUtils.lerp(-0.5, 0, t);
      lookAtZ = 0;
    }

    // ViewMode adjustments
    if (viewMode === 'architectural') {
      targetZ += 2.0;
      targetY += 1.0;
    }

    // Add mouse parallax (subtle, restrained dampening)
    const mouseOffsetX = mouse.x * 0.85;
    const mouseOffsetY = mouse.y * 0.55;

    // Smooth lerp for camera position
    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, targetX + mouseOffsetX, 0.045);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, targetY + mouseOffsetY, 0.045);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, targetZ, 0.045);

    // Smooth lerp for lookAt target
    currentTarget.current.x = THREE.MathUtils.lerp(currentTarget.current.x, lookAtX + mouseOffsetX * 0.2, 0.045);
    currentTarget.current.y = THREE.MathUtils.lerp(currentTarget.current.y, lookAtY + mouseOffsetY * 0.2, 0.045);
    currentTarget.current.z = THREE.MathUtils.lerp(currentTarget.current.z, lookAtZ, 0.045);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
};
