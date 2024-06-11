import React from "react";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";

const CustomObject = () => {
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3;

    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current?.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh position-y={-3}>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <meshStandardMaterial color={"#7c3aed"} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomObject;
