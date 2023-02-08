// import React, { useState } from "react";
// // import AnimatedSphere from "../../components/Sphere";
// import Iphone from "../../components/Sphere";
// import Obj from "../../components/Object";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, OrthographicCamera } from "@react-three/drei";
// import "./index.css";

// import * as THREE from "three";

// import styled from "styled-components";
// const HomePage = () => {
// 	const [isDragging, setIsDragging] = useState(false);
//   const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

// return (
// 		//   <Canvas className="canvashome">
// 		// 	<OrbitControls enableZoom={false} />
// 		// 	<ambientLight intensity={0.5} />
// 		// 	<directionalLight position={[-2, 5, 2]} />
// 		// 	<Suspense fallback={null}>
// 		// 	  <AnimatedSphere />
// 		// 	</Suspense>
// 		//   </Canvas>
// <Wrapper>
// 		<Canvas className="canvas">
//         <OrbitControls enableZoom={true} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[-2, 5, 2]} />
// 		<directionalLight
//         intensity={0.5}
//         castShadow
//         shadow-mapSize-height={1512}
//         shadow-mapSize-width={1512}
//       />

//         <Suspense fallback={null}>
//           <Iphone />
// 		  <mesh
//         rotation={[-Math.PI / 2, 0, 0]}
//         position={[0, -0.1, 0]}
//         receiveShadow
//       >
//         <planeBufferGeometry attach="geometry" args={[10, 10]} receiveShadow />
//         <meshPhongMaterial
//           attach="material"
//           color="#fff"
//           side={THREE.DoubleSide}
//           receiveShadow
//         />
//       </mesh>

//       <planeHelper args={[floorPlane, 2, "red"]} />
//       <gridHelper args={[100, 100]} />
//       <Obj setIsDragging={setIsDragging} floorPlane={floorPlane} />
//       <OrthographicCamera position={[0, 40, 200]} />
//       <OrbitControls enabled={!isDragging} />
//         </Suspense>
//       </Canvas>
// 	  </Wrapper>
// 	  );

// }

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  width: 100vw;
  height: 100vh;
  canvas {
    width: 95vw;
    height: 95vh;
    overflow: hidden;
    scroll: hidden;
  }
`;
// export default HomePage

import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Stats } from "@react-three/drei";
import Model from "./House2";
import annotations from "./annotations.json";
import "./index.css";
import styled from "styled-components";
function Annotations({ selected, gotoAnnotation }) {
  return (
    <>
      {annotations.map((a, i) => {
        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg
              height="34"
              width="34"
              transform="translate(-16 -16)"
              style={{ cursor: "pointer" }}
            >
              <circle
                cx="17"
                cy="17"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="rgba(0,0,0,.66)"
                onClick={() => gotoAnnotation(i)}
              />
              <text
                x="12"
                y="22"
                fill="white"
                fontSize={30}
                fontFamily="monospace"
                style={{ pointerEvents: "none" }}
              >
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && (
              <div
                id={"desc_" + i}
                className="annotationDescription"
                dangerouslySetInnerHTML={{ __html: a.description }}
              />
            )}
          </Html>
        );
      })}
    </>
  );
}

// function Buttons({ gotoAnnotation }) {
//   return (
//     <div id="annotationsPanel">
//       <ul>
//         {annotations.map((a, i) => {
//           return (
//             <li key={i}>
//               <button
//                 key={i}
//                 className="annotationButton"
//                 onClick={() => gotoAnnotation(i)}
//               >
//                 {a.title}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

function Animate({ controls, lerping, to, target }) {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta * 2);
      controls.current.target.lerp(target, delta * 2);
    }
  });
}

export default function HomePage() {
  const ref = useRef();
  const [lerping, setLerping] = useState(false);
  const [to, setTo] = useState();
  const [target, setTarget] = useState();
  const [selected, setSelected] = useState(-1);

  function gotoAnnotation(idx) {
    setTo(annotations[idx].camPos);
    setTarget(annotations[idx].lookAt);
    setSelected(idx);
    setLerping(true);
  }

  return (
    <Wrapper>
      <Suspense fallback={null}>
        <Canvas
          className="canvas"
          camera={{ position: [8, 2, 12] }}
          onPointerDown={() => setLerping(false)}
          onWheel={() => setLerping(false)}
        >
          <OrbitControls ref={ref} target={[8, 2, 3]} />
          <Environment preset="forest" background blur={0.75} />
          <Model />
          <Annotations selected={selected} gotoAnnotation={gotoAnnotation} />
          <Animate controls={ref} lerping={lerping} to={to} target={target} />
          <Stats />
        </Canvas>
        <Buttons gotoAnnotation={gotoAnnotation} />
      </Suspense>
    </Wrapper>
  );
}
