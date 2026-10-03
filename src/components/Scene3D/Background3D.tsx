import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CameraRig } from './CameraRig';
import { FloatingArchitecture } from './FloatingArchitecture';
import { ParticleField } from './ParticleField';
import { ConstellationLines } from './ConstellationLines';
import { LightingRig } from './LightingRig';
import { AmbientGrid } from './AmbientGrid';

interface Background3DProps {
  viewMode?: 'cinematic' | 'architectural' | 'minimal';
  particleDensity?: 'high' | 'medium' | 'low';
}

function FogComponent() {
  return <fogExp2 attach="fog" args={['#050505', 0.038]} />;
}

export const Background3D: React.FC<Background3DProps> = ({
  viewMode = 'cinematic',
  particleDensity = 'high'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

  // Check WebGL support & device specs
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsWebGLSupported(false);
      }
    } catch {
      setIsWebGLSupported(false);
    }

    // Check if mobile or reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) {
      setIsLowPowerDevice(true);
    }
  }, []);

  // Window scroll handler
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentY = window.scrollY;
          const progress = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;

          const now = performance.now();
          const dt = Math.max((now - lastTime) / 1000, 0.001);
          const velocity = (currentY - lastScrollY) / dt / 1000;

          setScrollProgress(progress);
          setScrollVelocity(velocity);

          lastScrollY = currentY;
          lastTime = now;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const activeDensity = isLowPowerDevice ? 'low' : particleDensity;

  if (!isWebGLSupported) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505,rgba(11,11,11,0.85)_40%,#050505)]" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]"
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, isLowPowerDevice ? 1.5 : 2]}
          camera={{ position: [0, 0, 8], fov: 48, near: 0.1, far: 80 }}
          gl={{
            antialias: !isLowPowerDevice,
            powerPreference: 'high-performance',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.15
          }}
          onCreated={({ gl }) => {
            gl.setClearColor('#050505');
          }}
        >
          <FogComponent />
          <LightingRig scrollProgress={scrollProgress} />
          <CameraRig
            scrollProgress={scrollProgress}
            mouse={mouse}
            viewMode={viewMode}
          />
          <FloatingArchitecture
            scrollProgress={scrollProgress}
            mode={viewMode}
          />
          <ParticleField
            scrollProgress={scrollProgress}
            scrollVelocity={scrollVelocity}
            particleDensity={activeDensity}
          />
          <ConstellationLines scrollProgress={scrollProgress} />
          <AmbientGrid />
        </Canvas>
      </Suspense>

      {/* Subtle organic vignette and depth gradient overlays to ensure extreme text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.65)_75%,#050505_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] pointer-events-none" />
    </div>
  );
};
