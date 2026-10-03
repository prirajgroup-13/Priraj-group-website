import React from 'react';

export const AmbientGrid: React.FC = () => {
  return (
    <group position={[0, -5.5, 0]}>
      <gridHelper
        args={[40, 40, '#4a3b18', '#1a1816']}
        position={[0, 0, 0]}
      />
    </group>
  );
};
