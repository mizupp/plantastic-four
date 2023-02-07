import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";

function Obj({ setIsDragging, floorPlane }) {
  const [pos, setPos] = useState([0, 1, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  let planeIntersectPoint = new THREE.Vector3();

  const dragObjectRef = useRef();

  const [spring, api] = useSpring(() => ({
    // position: [0, 0, 0],
    position: pos,
    scale: 0.1,
    rotation: [0, 0, 0],
    config: { friction: 10 }
  }));

  const bind = useDrag(
    ({ active, movement: [x, y], timeStamp, event }) => {
      if (active) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        setPos([planeIntersectPoint.x, 1.5, planeIntersectPoint.z]);
      }

      setIsDragging(active);

      api.start({
        // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
        position: pos,
        scale: active ? 0.4 : 0.5,
        rotation: [y / aspect, x / aspect, 0]
      });
      return timeStamp;
    },
    { delay: true }
  );

  return (
    <animated.mesh {...spring} {...bind()} castShadow>
      <dodecahedronBufferGeometry
        ref={dragObjectRef}
        attach="geometry"
        args={[1.4, 0]}
      />
      <meshNormalMaterial attach="material" />
    </animated.mesh>
  );
}

export default Obj;



// function Model(props) {
//   const { nodes, materials } = useGLTF("/indoor_plant.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh1_FrontColor_0.geometry}
//             material={materials.FrontColor}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh2__Color_E04_1_0.geometry}
//             material={materials.Color_E04_1}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh2_Color_F11_0.geometry}
//             material={materials.Color_F11}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh2_FrontColor_0.geometry}
//             material={materials.FrontColor}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh2_Translucent_Glass_Gray_0.geometry}
//             material={materials.Translucent_Glass_Gray}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Mesh2_Groundcover_Gravel_1inch_0.geometry}
//             material={materials.Groundcover_Gravel_1inch}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/indoor_plant.gltf");

