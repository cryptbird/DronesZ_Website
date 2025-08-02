import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const DroneBody: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const propellerRefs = useRef<THREE.Group[]>([]);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }

    // Rotating propellers at different speeds
    propellerRefs.current.forEach((propeller, index) => {
      if (propeller) {
        propeller.rotation.z += 0.4 + (index * 0.08);
      }
    });
  });

  // Create a more realistic propeller blade with airfoil shape
  const PropellerBlade = ({ position, rotation }: { position: [number, number, number], rotation: number }) => (
    <mesh position={position} rotation={[0, 0, rotation]}>
      <boxGeometry args={[0.8, 0.015, 0.12]} />
      <meshStandardMaterial 
        color="#2a2a2a"
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );

  // Create a complete propeller with 4 blades
  const Propeller = ({ position, index }: { position: [number, number, number], index: number }) => (
    <group 
      ref={(el) => el && (propellerRefs.current[index] = el)}
      position={position}
    >
      {/* Propeller Hub */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 12]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* 4 Propeller Blades */}
      <PropellerBlade position={[0.4, 0, 0]} rotation={0} />
      <PropellerBlade position={[-0.4, 0, 0]} rotation={Math.PI} />
      <PropellerBlade position={[0, 0, 0.4]} rotation={Math.PI / 2} />
      <PropellerBlade position={[0, 0, -0.4]} rotation={-Math.PI / 2} />
    </group>
  );

  return (
    <group ref={meshRef}>
      {/* Main Body - More realistic proportions */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 0.4, 2.2]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>

      {/* Carbon Fiber Texture Layer */}
      <mesh position={[0, 0.21, 0]}>
        <planeGeometry args={[2.0, 2.0]} />
        <meshStandardMaterial 
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Arms - More realistic carbon fiber arms */}
      <mesh position={[1.4, 0, 0]}>
        <boxGeometry args={[0.08, 0.08, 2.8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[-1.4, 0, 0]}>
        <boxGeometry args={[0.08, 0.08, 2.8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 1.4]}>
        <boxGeometry args={[2.8, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0, -1.4]}>
        <boxGeometry args={[2.8, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Motor Housings - More detailed */}
      <mesh position={[1.4, 0.25, 1.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 12]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-1.4, 0.25, 1.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 12]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[1.4, 0.25, -1.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 12]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[-1.4, 0.25, -1.4]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 12]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Motor Shafts */}
      <mesh position={[1.4, 0.4, 1.4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial 
          color="#666666"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-1.4, 0.4, 1.4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial 
          color="#666666"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[1.4, 0.4, -1.4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial 
          color="#666666"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-1.4, 0.4, -1.4]}>
        <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
        <meshStandardMaterial 
          color="#666666"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Propellers */}
      <Propeller position={[1.4, 0.5, 1.4]} index={0} />
      <Propeller position={[-1.4, 0.5, 1.4]} index={1} />
      <Propeller position={[1.4, 0.5, -1.4]} index={2} />
      <Propeller position={[-1.4, 0.5, -1.4]} index={3} />

      {/* Camera Gimbal - More detailed */}
      <group position={[0, -0.35, 0]}>
        {/* Gimbal Base */}
        <mesh>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 12]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
        
        {/* Camera Housing */}
        <mesh position={[0, 0, -0.1]}>
          <boxGeometry args={[0.3, 0.25, 0.2]} />
          <meshStandardMaterial 
            color="#111111"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Camera Lens */}
        <mesh position={[0, 0, -0.25]}>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 12]} />
          <meshStandardMaterial 
            color="#111111"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Camera Glass */}
        <mesh position={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 12]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={0.1}
            roughness={0.1}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* LED Indicators - More realistic */}
      <mesh position={[0.7, 0.25, 0.7]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial 
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[-0.7, 0.25, 0.7]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial 
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[0.7, 0.25, -0.7]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial 
          color="#0000ff"
          emissive="#0000ff"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[-0.7, 0.25, -0.7]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial 
          color="#ffff00"
          emissive="#ffff00"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Battery Compartment - More detailed */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.4, 0.2, 0.8]} />
        <meshStandardMaterial 
          color="#222222"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Battery Cover */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.3, 0.05, 0.7]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Landing Gear - More realistic */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
        <meshStandardMaterial 
          color="#555555"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Landing Pads - More realistic */}
      <mesh position={[0.7, -0.75, 0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[-0.7, -0.75, 0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0.7, -0.75, -0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[-0.7, -0.75, -0.7]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Antenna - More realistic */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial 
          color="#666666"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Antenna Tip */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial 
          color="#888888"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Panel Lines and Details */}
      <mesh position={[0, 0.21, 0]}>
        <planeGeometry args={[1.9, 1.9]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Motor Wires - More detailed */}
      <mesh position={[1.4, 0.15, 1.4]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial 
          color="#222222"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[-1.4, 0.15, 1.4]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial 
          color="#222222"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[1.4, 0.15, -1.4]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial 
          color="#222222"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[-1.4, 0.15, -1.4]}>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial 
          color="#222222"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* ESC (Electronic Speed Controller) Boxes */}
      <mesh position={[0.8, 0.1, 0.8]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[-0.8, 0.1, 0.8]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.8, 0.1, -0.8]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[-0.8, 0.1, -0.8]}>
        <boxGeometry args={[0.15, 0.08, 0.1]} />
        <meshStandardMaterial 
          color="#333333"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Flight Controller */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.3]} />
        <meshStandardMaterial 
          color="#444444"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* GPS Module */}
      <mesh position={[0, 0.25, 0.3]}>
        <boxGeometry args={[0.2, 0.05, 0.15]} />
        <meshStandardMaterial 
          color="#555555"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

const DroneModel: React.FC = () => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Canvas
        camera={{ position: [7, 5, 7], fov: 40 }}
        style={{ background: 'transparent' }}
        shadows
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.6} />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={1} 
          angle={0.3} 
          penumbra={0.5}
          castShadow
        />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* Float the drone for better presentation */}
        <Float 
          speed={1.5} 
          rotationIntensity={0.5} 
          floatIntensity={0.5}
        >
          <DroneBody />
        </Float>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default DroneModel; 