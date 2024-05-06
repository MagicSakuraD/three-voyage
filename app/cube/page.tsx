"use client";
import React from "react";

import { Canvas } from "@react-three/fiber";

const CubePage = () => {
  return (
    <div className="container mt-6 mx-auto">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="#7c3aed" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default CubePage;
