import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConstellationLinesProps {
  scrollProgress: number;
}

export const ConstellationLines: React.FC<ConstellationLinesProps> = ({ scrollProgress }) => {
  const lineSegmentsRef = useRef<THREE.LineSegments>(null);

  const { linePositions, lineColors } = useMemo(() => {
    // Generate nodes on concentric rings and architectural pathways
    const nodes: THREE.Vector3[] = [];
    const nodeCount = 28;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4 + (i % 4) * 1.5;
      const y = ((i % 7) - 3) * 0.9;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius - (i % 3) * 0.8;
      nodes.push(new THREE.Vector3(x, y, z));
    }

    const points: number[] = [];
    const colors: number[] = [];
    const gold = new THREE.Color('#d4af37');
    const faintGold = new THREE.Color('#554415');

    // Connect nodes within a maximum distance
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 3.2) {
          points.push(nodes[i].x, nodes[i].y, nodes[i].z);
          points.push(nodes[j].x, nodes[j].y, nodes[j].z);

          const c = dist < 2.0 ? gold : faintGold;
          colors.push(c.r, c.g, c.b);
          colors.push(c.r, c.g, c.b);
        }
      }
    }

    return {
      linePositions: new Float32Array(points),
      lineColors: new Float32Array(colors)
    };
  }, []);

  useFrame((state) => {
    if (!lineSegmentsRef.current) return;
    const time = state.clock.getElapsedTime();
    lineSegmentsRef.current.rotation.y = time * 0.08 + scrollProgress * 0.6;
    lineSegmentsRef.current.rotation.x = Math.sin(time * 0.1) * 0.15;
  });

  return (
    <lineSegments ref={lineSegmentsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[lineColors, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
};
