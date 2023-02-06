import React, { useState } from "react";
// import AnimatedSphere from "../../components/Sphere";
import Iphone from "../../components/Sphere";
import Obj from "../../components/Object";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import "./index.css";




import * as THREE from "three";

import styled from "styled-components";
const HomePage = () => {
	const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    
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
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
		<directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={1512}
        shadow-mapSize-width={1512}
      />
		
        <Suspense fallback={null}>
          <Iphone />
		  <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeBufferGeometry attach="geometry" args={[10, 10]} receiveShadow />
        <meshPhongMaterial
          attach="material"
          color="#fff"
          side={THREE.DoubleSide}
          receiveShadow
        />
      </mesh>

      <planeHelper args={[floorPlane, 2, "red"]} />
      <gridHelper args={[100, 100]} />
      <Obj setIsDragging={setIsDragging} floorPlane={floorPlane} />
      <OrthographicCamera position={[0, 40, 200]} />
      <OrbitControls enabled={!isDragging} />
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
