import { useThree, extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import CustomObject from "./CustomObject";

const Geometry = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    if (torusRef.current && groupRef.current) {
      torusRef.current.rotation.x += delta;
      torusRef.current.rotation.y += delta;
    }
  });
  return (
    <>
      <OrbitControls />
      <directionalLight
        position={[1, 2, 3]}
        color={"#10b981"}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh scale={[0.5, 0.5, 0.5]} position-y={4}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial color={"#7c3aed"} />
        </mesh>
        <mesh ref={torusRef} position={[0, 1, 0]} rotation-x={0.5} scale={0.8}>
          <torusKnotGeometry />
          <meshToonMaterial args={[{ color: "#8b5cf6" }]} />
        </mesh>
      </group>
      <CustomObject />
    </>
  );
};

export default Geometry;
