import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.8}
        speed={4}
        roughness={4}
      />
    </Sphere>
  );
}
