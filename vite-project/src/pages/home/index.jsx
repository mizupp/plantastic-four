import React from "react"
// import AnimatedSphere from "../../components/Sphere";
import Iphone from "../../components/Sphere";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./index.css";

import styled from "styled-components";
const HomePage = () => {

    
return (
		//   <Canvas className="canvashome">
		// 	<OrbitControls enableZoom={false} />
		// 	<ambientLight intensity={0.5} />
		// 	<directionalLight position={[-2, 5, 2]} />
		// 	<Suspense fallback={null}>
		// 	  <AnimatedSphere />
		// 	</Suspense>
		//   </Canvas>
<Wrapper>
		<Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
	  </Wrapper>
	  );

}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
	width: 95vw
  }
`;
export default HomePage
