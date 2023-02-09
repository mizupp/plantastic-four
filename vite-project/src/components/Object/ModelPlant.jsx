import { useGLTF } from '@react-three/drei'


export default function Model(props) {
    const { nodes, materials } = useGLTF("/indoor_plant.gltf");
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh1_FrontColor_0.geometry}
              material={materials.FrontColor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh2__Color_E04_1_0.geometry}
              material={materials.Color_E04_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh2_Color_F11_0.geometry}
              material={materials.Color_F11}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh2_FrontColor_0.geometry}
              material={materials.FrontColor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh2_Translucent_Glass_Gray_0.geometry}
              material={materials.Translucent_Glass_Gray}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh2_Groundcover_Gravel_1inch_0.geometry}
              material={materials.Groundcover_Gravel_1inch}
            />
          </group>
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/indoor_plant.gltf");
  
  