// import React from "react";
// import { MeshDistortMaterial, Sphere } from "@react-three/drei";

// export default function AnimatedSphere() {
//   return (
//     <Sphere visible args={[1, 100, 200]} scale={1}>
//       <MeshDistortMaterial
//         color="#8352FD"
//         attach="material"
//         distort={0.8}
//         speed={4}
//         roughness={4}
//       />
//     </Sphere>
//   );
// }


// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/iphone.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0.5, 0]} scale={0.01}>
//           <group scale={100}>
//             <mesh
//               geometry={nodes.Body_Mic_0.geometry}
//               material={nodes.Body_Mic_0.material}
//             />
//             <mesh
//               geometry={nodes.Body_Bezel_0.geometry}
//               material={materials.Bezel}
//             />
//             <mesh
//               geometry={nodes.Body_Body_0.geometry}
//               material={nodes.Body_Body_0.material}
//             />
//             <mesh
//               geometry={nodes.Body_Wallpaper_0.geometry}
//               material={materials.Wallpaper}
//             />
//             <mesh
//               geometry={nodes.Body_Camera_Glass_0.geometry}
//               material={nodes.Body_Camera_Glass_0.material}
//             />
//             <mesh
//               geometry={nodes.Body_Lens_0.geometry}
//               material={nodes.Body_Lens_0.material}
//             />
//             <mesh
//               geometry={nodes.Body_Material_0.geometry}
//               material={materials.Material}
//             />
//             <mesh
//               geometry={nodes.Camera_Body_0.geometry}
//               material={nodes.Camera_Body_0.material}
//             />
//             <mesh
//               geometry={nodes.Camera_Glass_0.geometry}
//               material={materials.Glass}
//             />
//             <mesh
//               geometry={nodes.Camera_Camera_Frame001_0.geometry}
//               material={materials["Camera_Frame.001"]}
//             />
//             <mesh
//               geometry={nodes.Camera_Mic_0.geometry}
//               material={nodes.Camera_Mic_0.material}
//             />
//             <mesh
//               geometry={nodes.Body001_Screen_Glass_0.geometry}
//               material={materials.Screen_Glass}
//             />
//             <mesh
//               geometry={nodes.Button_Frame_0.geometry}
//               material={nodes.Button_Frame_0.material}
//             />
//             <mesh
//               geometry={nodes.Circle003_Frame_0.geometry}
//               material={nodes.Circle003_Frame_0.material}
//             />
//             <mesh
//               geometry={nodes.Apple_Logo_Logo_0.geometry}
//               material={materials.Logo}
//             />
//             <mesh
//               geometry={nodes.Camera001_Body_0.geometry}
//               material={nodes.Camera001_Body_0.material}
//             />
//             <mesh
//               geometry={nodes.Camera001_Gray_Glass_0.geometry}
//               material={materials.Gray_Glass}
//             />
//             <mesh
//               geometry={nodes.Camera001_Flash_0.geometry}
//               material={materials.Flash}
//             />
//             <mesh
//               geometry={nodes.Camera001_Port_0.geometry}
//               material={nodes.Camera001_Port_0.material}
//             />
//             <mesh
//               geometry={nodes.Camera001_Camera_Frame_0.geometry}
//               material={materials.Camera_Frame}
//             />
//             <mesh
//               geometry={nodes.Camera001_Camera_Glass_0.geometry}
//               material={nodes.Camera001_Camera_Glass_0.material}
//             />
//             <mesh
//               geometry={nodes.Camera001_Lens_0.geometry}
//               material={nodes.Camera001_Lens_0.material}
//             />
//             <mesh
//               geometry={nodes.Camera001_Black_Glass_0.geometry}
//               material={materials.Black_Glass}
//             />
//             <mesh
//               geometry={nodes.Camera003_Material002_0.geometry}
//               material={materials["Material.002"]}
//             />
//             <mesh
//               geometry={nodes.Frame_Frame_0.geometry}
//               material={nodes.Frame_Frame_0.material}
//             />
//             <mesh
//               geometry={nodes.Frame_Frame2_0.geometry}
//               material={materials.Frame2}
//             />
//             <mesh
//               geometry={nodes.Frame_Port_0.geometry}
//               material={nodes.Frame_Port_0.material}
//             />
//             <mesh
//               geometry={nodes.Frame_Antenna_0.geometry}
//               material={materials.Antenna}
//             />
//             <mesh
//               geometry={nodes.Frame_Mic_0.geometry}
//               material={nodes.Frame_Mic_0.material}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/iphone.gltf");


import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "/family_guy__griffins_living_room.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.2}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-3.71, 2.76, -2.57]} scale={0.91}>
          {/* <group scale={80}> */}
          
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Couch.001"]}
            />
          </group>
          <group
            position={[-6.89, 10.42, -19.97]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.4}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Painting}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Paintingdark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.WallDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Doorcrack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Paintingpic2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Stewie}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Chris}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.LoisPeter}
            />
          </group>
          <group position={[-0.14, 1.32, 5.03]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Stair}
            />
          </group>
          <group position={[15.01, 0.08, 18.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.Stair}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.StairShadow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_21.geometry}
              material={materials.Wall}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Floor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.WallDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.Window}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.Outlinewall}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[16.56, 7.12, -12.91]}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.4}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.Doormain}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.Doorcrack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.Doorframe}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.Doorframeshadow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials.Windows}
            />
          </group>
          <group
            position={[16.56, 7.12, -12.91]}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.4}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.DoorHandle}
            />
          </group>
          <group position={[-6.7, 4.75, -17.79]} scale={[4.7, 1.51, 2.27]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.Windowdark}
            />
          </group>
          <group
            position={[14.97, 0.92, 7.15]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.2}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials.SmallTable}
            />
          </group>
          <group position={[17.09, 17.97, -1.26]} scale={0.79}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.Stair}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials.StairShadow}
            />
          </group>
          <group position={[15.01, 0.08, 18.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.Ceiling}
            />
          </group>
          <group position={[-3.28, 16.96, 1.96]} scale={1.68}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group
            position={[16.5, 8.16, -7.58]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.62, 0.49, 0.75]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.Material}
            />
          </group>
          <group position={[14.94, 0.16, -0.82]} scale={[0.21, 0.21, 0.19]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials["Radio.001"]}
            />
          </group>
          <group position={[-3.58, 4.66, 18.05]} scale={[11.93, 6.12, 6.12]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials.Doorcrack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials.Crack}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.material_32}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.TVSCREEN}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials.TVBUTTON}
            />
          </group>
          <group
            position={[-3.71, -0.35, 7.9]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.83}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials.ORANGERUG}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.BLUERUG}
            />
          </group>
          <group
            position={[-29.52, 12.55, 3.51]}
            rotation={[-Math.PI / 2, 0, -1.5]}
            scale={0.43}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials.Curtains}
            />
          </group>
          <group position={[14.83, 6.97, -0.95]} scale={1.69}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.TVBUTTON}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials.material_32}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.BLUEGLASS}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_69.geometry}
              material={materials.Record}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials.Paintingpic2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials.Paintingpic}
            />
          </group>
          <group position={[14.83, 6.37, 2.98]} scale={0.5}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={materials.Vase}
            />
          </group>
          <group
            position={[-17.35, 2.65, 12.89]}
            rotation={[-Math.PI, 0.61, -Math.PI]}
            scale={[1.12, 0.91, 0.91]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={materials.Couch}
            />
          </group>
        </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/family_guy__griffins_living_room.gltf");
