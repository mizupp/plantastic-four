import React from "react"
import AnimatedSphere from "../../components/Sphere";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./index.css";

import styled from "styled-components";
const HomePage = () => {

    
return (
		  <Canvas className="canvashome">
			<OrbitControls enableZoom={false} />
			<ambientLight intensity={0.5} />
			<directionalLight position={[-2, 5, 2]} />
			<Suspense fallback={null}>
			  <AnimatedSphere />
			</Suspense>
		  </Canvas>
	  );

}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
	width: 100px;
  }
`;

export default HomePage
