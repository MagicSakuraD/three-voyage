import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Geometry = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta;
      torusRef.current.rotation.y += delta;
    }
  });
  return (
    <group>
      {/* <mesh scale={[0.5, 0.5, 0.5]} positon-y={-2}>
    <sphereGeometry args={[3, 32, 32]} />
    <meshToonMaterial color={"#7c3aed"} />
  </mesh> */}
      <mesh ref={torusRef} position={[0, 1, 0]} rotation-x={0.5} scale={0.8}>
        <torusKnotGeometry />
        <meshToonMaterial args={[{ color: "#8b5cf6" }]} />
      </mesh>
    </group>
  );
};

export default Geometry;
