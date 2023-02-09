
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/final.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[165.29, 51.58, -24.8]} scale={0.56}>
            <group position={[-7.46, 26.46, 1.08]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_pantala001_corpo_0.geometry}
                material={materials["Material.075"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_pantala001_pantala_0.geometry}
                material={materials["Material.074"]}
              />
            </group>
            <group position={[-7.46, 26.46, 1.08]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur002_corpo_0.geometry}
                material={materials["Material.073"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur002_pantala_0.geometry}
                material={materials["Material.072"]}
              />
            </group>
          </group>
          <group position={[-180.43, 51.58, 71]} scale={0.56}>
            <group position={[-7.46, 26.46, 1.08]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_pantala_corpo_0.geometry}
                material={materials["Material.039"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_pantala_pantala_0.geometry}
                material={materials["Material.038"]}
              />
            </group>
            <group position={[-7.46, 26.46, 1.08]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_corpo_0.geometry}
                material={materials["Material.037"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.abajur01_pantala_0.geometry}
                material={materials["Material.036"]}
              />
            </group>
          </group>
          <group
            position={[-247.65, 305.21, 363.72]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cortina001_Cortinas_0.geometry}
              material={materials["Material.071"]}
            />
          </group>
          <group position={[284.91, 0, 101.07]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Escada_Paredes_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Escada_Porta-Madeira_0"].geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group position={[-259.99, 160, 104.82]} rotation={[0, 1.57, 0]}>
            <group position={[-2.12, 3.08, 5.14]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela01_janela-Borda_0"].geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela01_Janela-Marmore_0"].geometry}
                material={materials["Material.008"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela01_Janela-Vidro_0"].geometry}
                material={materials["Material.007"]}
              />
            </group>
          </group>
          <group position={[26.06, 160, 410]} rotation={[Math.PI, 0, Math.PI]}>
            <group position={[-2.12, 3.08, 5.14]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela02_janela-Borda_0"].geometry}
                material={materials["Material.020"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela02_Janela-Marmore_0"].geometry}
                material={materials["Material.022"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Janela02_Janela-Vidro_0"].geometry}
                material={materials["Material.021"]}
              />
            </group>
          </group>
          <group
            position={[55.34, 211.98, 550.39]}
            rotation={[-Math.PI, 0.09, -Math.PI]}
            scale={1.15}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Landscape01_landscape_0.geometry}
              material={materials["Material.076"]}
            />
          </group>
          <group
            position={[-389.33, 147.77, -7.42]}
            rotation={[0, 1.57, 0]}
            scale={1.22}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Landscape02_landscape_0.geometry}
              material={materials["Material.077"]}
            />
          </group>
          <group position={[-191.38, 25.95, 76.12]}>
            <group position={[0, 0, -20.86]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MesaCentro01_Mdeira_0.geometry}
                material={materials["Material.034"]}
              />
            </group>
          </group>
          <group position={[175.27, 25.95, -22.15]} rotation={[0, -1.57, 0]}>
            <group position={[0, 0, -20.86]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MesaCentro02_Mdeira_0.geometry}
                material={materials["Material.035"]}
              />
            </group>
          </group>
          <group
            position={[-165, 131.66, -366.43]}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          >
            <group position={[0, 115.84, -32.74]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Movel-Planejado002_Cromo_0"].geometry}
                material={materials["Material.019"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Movel-Planejado002_Mdeira_0"].geometry}
                material={materials["Material.018"]}
              />
            </group>
          </group>
          <group position={[169.39, 131.66, -366.43]}>
            <group position={[0, 115.84, -32.74]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Movel-Planejado1_Cromo_0"].geometry}
                material={materials["Material.017"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Movel-Planejado1_Mdeira_0"].geometry}
                material={materials["Material.016"]}
              />
            </group>
          </group>
          <group
            position={[607.65, 110, 212.41]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={-1}
          >
            <group position={[-69.52, 0, 0.3]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Porta1_Macaneta_0.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Porta1_Porta-Madeira_0"].geometry}
                material={materials["Material.009"]}
              />
            </group>
          </group>
          <group
            position={[270, 110, -359.45]}
            rotation={[-Math.PI, Math.PI / 2, 0]}
            scale={-1}
          >
            <group position={[-69.52, 0, 0.3]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Porta2_Macaneta_0.geometry}
                material={materials["Material.014"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Porta2_Porta-Madeira_0"].geometry}
                material={materials["Material.013"]}
              />
            </group>
          </group>
          <group
            position={[425.89, 83.8, -94.31]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Rodape_Porta-Madeira_0"].geometry}
              material={materials["Material.015"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Shell_Forro_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Shell_Paredes_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Shell_Piso_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Shell_Porta-Madeira_0"].geometry}
              material={materials["Material.005"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Shell_Tijolos_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Shell_Pedra_19_-_Default_0"].geometry}
              material={materials["Material.078"]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Shell_Pedra001_19_-_Default_0"].geometry}
              material={materials["Material.079"]}
            />
          </group>
          <group
            position={[-29.06, 39.79, 133.72]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          >
            <group position={[-113.36, -2.48, -35.79]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Pes_0.geometry}
                material={materials["Material.026"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Almofadas1_0.geometry}
                material={materials["Material.025"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Almofadas2_0.geometry}
                material={materials["Material.024"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Sofa_0.geometry}
                material={materials["Material.023"]}
              />
            </group>
          </group>
          <group
            position={[152.96, 39.79, -117.78]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          >
            <group position={[-43.64, -2.48, -35.79]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_1L_Pes_0.geometry}
                material={materials["Material.033"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_1L_Sofa_0.geometry}
                material={materials["Material.032"]}
              />
            </group>
          </group>
          <group
            position={[-196.48, 0, -58.97]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <group position={[-78.47, -2.48, 4]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Pes_0.geometry}
                material={materials["Material.030"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Almofadas2_0.geometry}
                material={materials["Material.028"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Almofadas1_0.geometry}
                material={materials["Material.029"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Sofa_0.geometry}
                material={materials["Material.027"]}
              />
            </group>
          </group>
          <group
            position={[714.5, 340.45, 225.72]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot001_Material_#0_0"].geometry}
                material={materials["Material.043"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot001_pantala_0.geometry}
                material={materials["Material.042"]}
              />
            </group>
          </group>
          <group
            position={[-141.97, 503.62, -216.45]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot002_Material_#0_0"].geometry}
                material={materials["Material.045"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot002_pantala_0.geometry}
                material={materials["Material.044"]}
              />
            </group>
          </group>
          <group
            position={[141.82, 503.62, -216.45]}
            rotation={[Math.PI / 2, -0.61, 0]}
            scale={-0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot003_Material_#0_0"].geometry}
                material={materials["Material.047"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot003_pantala_0.geometry}
                material={materials["Material.046"]}
              />
            </group>
          </group>
          <group
            position={[-141.97, 503.62, -45.07]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot004_Material_#0_0"].geometry}
                material={materials["Material.049"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot004_pantala_0.geometry}
                material={materials["Material.048"]}
              />
            </group>
          </group>
          <group
            position={[141.82, 503.62, -45.07]}
            rotation={[Math.PI / 2, -0.61, 0]}
            scale={-0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot005_Material_#0_0"].geometry}
                material={materials["Material.051"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot005_pantala_0.geometry}
                material={materials["Material.050"]}
              />
            </group>
          </group>
          <group
            position={[-141.97, 503.62, 126.32]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot006_Material_#0_0"].geometry}
                material={materials["Material.053"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot006_pantala_0.geometry}
                material={materials["Material.052"]}
              />
            </group>
          </group>
          <group
            position={[141.82, 503.62, 126.32]}
            rotation={[Math.PI / 2, -0.61, 0]}
            scale={-0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot007_Material_#0_0"].geometry}
                material={materials["Material.055"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot007_pantala_0.geometry}
                material={materials["Material.054"]}
              />
            </group>
          </group>
          <group
            position={[-141.97, 503.62, 297.71]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot008_Material_#0_0"].geometry}
                material={materials["Material.057"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot008_pantala_0.geometry}
                material={materials["Material.056"]}
              />
            </group>
          </group>
          <group
            position={[141.82, 503.62, 297.71]}
            rotation={[Math.PI / 2, -0.61, 0]}
            scale={-0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot009_Material_#0_0"].geometry}
                material={materials["Material.059"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot009_pantala_0.geometry}
                material={materials["Material.058"]}
              />
            </group>
          </group>
          <group
            position={[357.37, 428.75, 298.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot010_Material_#0_0"].geometry}
                material={materials["Material.061"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot010_pantala_0.geometry}
                material={materials["Material.060"]}
              />
            </group>
          </group>
          <group
            position={[516.98, 428.75, 298.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot011_Material_#0_0"].geometry}
                material={materials["Material.063"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot011_pantala_0.geometry}
                material={materials["Material.062"]}
              />
            </group>
          </group>
          <group
            position={[357.37, 428.75, 122.84]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot012_Material_#0_0"].geometry}
                material={materials["Material.065"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot012_pantala_0.geometry}
                material={materials["Material.064"]}
              />
            </group>
          </group>
          <group
            position={[357.37, 428.75, -48.2]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot013_Material_#0_0"].geometry}
                material={materials["Material.067"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot013_pantala_0.geometry}
                material={materials["Material.066"]}
              />
            </group>
          </group>
          <group
            position={[357.37, 428.75, -218.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.21}
          >
            <group position={[0, 0, -3.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["spot014_Material_#0_0"].geometry}
                material={materials["Material.069"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.spot014_pantala_0.geometry}
                material={materials["Material.068"]}
              />
            </group>
          </group>
          <group
            position={[-252.01, 294.07, 103.82]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group position={[252.01, 103.82, -294.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["SuporteCortinas_Porta-Madeira_0"].geometry}
                material={materials["Material.070"]}
              />
            </group>
          </group>
          <group
            position={[-30.23, 0.61, -86.8]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          >
            <group position={[-55.62, 0, -0.61]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tapete_persa_tapete_persa_0.geometry}
                material={materials["Material.031"]}
              />
            </group>
          </group>
          <group position={[3.86, 169.86, -325.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.TV_corpoTV_0.geometry}
              material={materials["Material.040"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.TV_tela_0.geometry}
              material={materials["Material.041"]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-124, 73.59, -371.43]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={6}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["plant_1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["plant_1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["plant_1.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["plant_1.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["plant_1.005"]}
        />
      </group>
      <group
        position={[128.41, 73.85, -369.76]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7001.geometry}
          material={materials.plant_5_clay_pot}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.plant_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3001.geometry}
          material={materials["plant_5.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={materials["plant_5.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5001.geometry}
          material={materials["plant_5.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={materials["plant_5.004"]}
        />
      </group>
      <group
        position={[-198.8, 0.01, -174.56]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cactus_Cactus_0.geometry}
              material={materials.Cactus}
              position={[0, 20.91, 7.49]}
            />
          </group>
        </group>
      </group>
      <group
        position={[198.65, 73.85, -369.76]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7002.geometry}
          material={materials["plant_5_clay_pot.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials["plant_5.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3002.geometry}
          material={materials["plant_5.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4002.geometry}
          material={materials["plant_5.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5002.geometry}
          material={materials["plant_5.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6002.geometry}
          material={materials["plant_5.009"]}
        />
      </group>
      <group
        position={[242.2, 73.61, -101.13]}
        rotation={[-Math.PI / 2, -0.01, -1.51]}
        scale={[1.3, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2.geometry}
          material={materials.Color_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3.geometry}
          material={materials.Wood_Bamboo_Medium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3001.geometry}
          material={materials.Color_002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3003.geometry}
          material={materials.Color_000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3004.geometry}
          material={materials.Color_008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3002.geometry}
          material={materials.material_1}
        />
      </group>
      <group
        position={[242.2, 114.91, -110.14]}
        rotation={[-Math.PI / 2, 0, -1.52]}
        scale={[1.5, 1.2, 1.2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2001.geometry}
          material={materials["Color_007.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3005.geometry}
          material={materials["Wood_Bamboo_Medium.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3006.geometry}
          material={materials["Color_002.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3008.geometry}
          material={materials["Color_000.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3009.geometry}
          material={materials["Color_008.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3007.geometry}
          material={materials["material_1.001"]}
        />
      </group>
      <group
        position={[242.2, 100.21, -147.77]}
        rotation={[-Math.PI / 2, 0, -1.56]}
        scale={[1.2, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2002.geometry}
          material={materials["Color_007.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3010.geometry}
          material={materials["Wood_Bamboo_Medium.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3011.geometry}
          material={materials["Color_002.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3013.geometry}
          material={materials["Color_000.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3014.geometry}
          material={materials["Color_008.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3012.geometry}
          material={materials["material_1.002"]}
        />
      </group>
      <group
        position={[242.2, 93.95, -59.1]}
        rotation={[-Math.PI / 2, 0, -1.48]}
        scale={[1.2, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2003.geometry}
          material={materials["Color_007.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3015.geometry}
          material={materials["Wood_Bamboo_Medium.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3016.geometry}
          material={materials["Color_002.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3018.geometry}
          material={materials["Color_000.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3019.geometry}
          material={materials["Color_008.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3017.geometry}
          material={materials["material_1.003"]}
        />
      </group>
      <group
        position={[194.03, 120.98, -382.34]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.alocasia_macrorrhizos_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
      <group
        position={[-194.96, 164.89, -388.15]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5, 5, 3]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-1.78, -0.62, 2.41]}
            rotation={[0, 1.57, 0]}
            scale={0.63}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4003.geometry}
              material={materials.Rosette}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5003.geometry}
              material={materials.Petal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6003.geometry}
              material={materials.Flower_stem}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7003.geometry}
              material={materials.Cotyledon}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10001.geometry}
              material={materials["Petal.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials["Flower_stem.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["Cotyledon.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["Rosette.001"]}
            />
          </group>
        </group>
      </group>
      <group
        position={[269.72, 102.1, 149.56]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.03}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ficus_Ficus_0.geometry}
              material={materials.Ficus}
            />
          </group>
        </group>
      </group>
      <group
        position={[104.12, 95.03, -127.29]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Bush1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Bush2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Bush3_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Bush4_Plant_Texture_0.geometry}
            material={materials.Plant_Texture}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_BushTall_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Fern_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Grass1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Grass2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Misc1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Misc2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Misc3_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Misc4_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Misc5_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Monstera1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Monstera2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Palm1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Palm2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Sapling1_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Sapling2_Plant_Texture_0.geometry}
            material={materials["Plant_Texture.006"]}
          />
        </group>
      </group>
      <group
        position={[221.6, 0.66, -198.26]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11001.geometry}
              material={materials.st_red}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5004.geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6004.geometry}
              material={materials["green.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10002.geometry}
              material={materials["black_st.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7004.geometry}
              material={materials.black_st}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["black_st.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9001.geometry}
              material={materials["black_st.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12001.geometry}
              material={materials.st_leather}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4004.geometry}
              material={materials.broun}
            />
          </group>
        </group>
      </group>
      <group
        position={[137.75, 136.82, -391.81]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={7}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0001.geometry}
            material={materials["material0.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0002.geometry}
            material={materials["material0.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0003.geometry}
            material={materials["material0.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0004.geometry}
            material={materials["material0.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0005.geometry}
            material={materials["material0.005"]}
          />
        </group>
      </group>
      <group
        position={[-133.21, 162.6, -386.73]}
        rotation={[0, 0, -Math.PI]}
        scale={[1.5, 1, 1.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10003.geometry}
          material={materials["M_IvyLeaf.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11002.geometry}
          material={materials["M_IvyLeaf.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12002.geometry}
          material={materials["M_IvyLeaf.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials["M_IvyLeaf.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["M_IvyLeaf.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15001.geometry}
          material={materials["M_IvyLeaf.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["M_IvyLeaf.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.M_SmallLeaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials["M_SmallLeaf.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials["M_SmallLeaf.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials["M_SmallLeaf.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials["M_SmallLeaf.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22001.geometry}
          material={materials["M_SmallLeaf.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials["M_SmallLeaf.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials["M_SmallLeaf.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4005.geometry}
          material={materials.M_ClayPot2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6005.geometry}
          material={materials.M_Dirt2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9002.geometry}
          material={materials.M_IvyLeaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2003.geometry}
          material={materials.M_LargeLeaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3003.geometry}
          material={materials.M_ClayPot1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5005.geometry}
          material={materials.M_Dirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7005.geometry}
          material={materials.M_GrassyLeaf}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8001.geometry}
          material={materials["M_GrassyLeaf.001"]}
        />
      </group>
      <group
        position={[-132.52, 201.33, -397.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SM_GreenHerb_T_GreenHerb_0.geometry}
              material={materials.T_GreenHerb}
            />
          </group>
        </group>
      </group>
      <group
        position={[-30.36, 54.6, -337.11]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[3, 4, 3]}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[17.67, 2.64, -11.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={18.83}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_1_plants_b_1_Material_0.geometry}
              material={materials.plants_b_1_Material}
            />
          </group>
          <group
            position={[732.93, 4.92, -21.71]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={54.98}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_2_plants_b_1_Material_0.geometry}
              material={materials["plants_b_1_Material.001"]}
            />
          </group>
          <group
            position={[1200, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={51.77}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_3_plants_b_1_Material_0.geometry}
              material={materials["plants_b_1_Material.005"]}
            />
          </group>
          <group
            position={[1700, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={68.04}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_4_plants_b_1_Material_0.geometry}
              material={materials["plants_b_1_Material.003"]}
            />
          </group>
          <group
            position={[2100, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={93.49}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_5_plants_b_1_Material_0.geometry}
              material={materials["plants_b_1_Material.004"]}
            />
          </group>
          <group
            position={[2600, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.p_6_plants_b_1_Material_0.geometry}
              material={materials["plants_b_1_Material.002"]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-225.25, 4.44, -323.42]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={18}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6006.geometry}
            material={materials["Material.083"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4006.geometry}
            material={materials.Twig}
          />
        </group>
      </group>
      <group
        position={[177.21, 27.93, 37.11]}
        rotation={[-1.48, -0.18, -0.19]}
        scale={10}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2004.geometry}
          material={materials.Standard418225}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3004.geometry}
          material={materials.Standard4FA932}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4007.geometry}
          material={materials.Standard6A380F}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5006.geometry}
          material={materials.StandardA9CCFF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6007.geometry}
          material={materials.Standard07A031}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7006.geometry}
          material={materials.Standard20822A}
        />
      </group>
      <group position={[-182.5, 0, -102.78]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-3.78, 45.72, -78.05]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
          >
            <group
              position={[11.76, 9.37, -44.38]}
              rotation={[0, 0, 2.18]}
              scale={1.72}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Cylinder01_Material_#13_0"].geometry}
                material={materials.Material_13}
              />
            </group>
            <group position={[12.89, 9.33, -27.52]} rotation={[0, 0, 2.18]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_Material_#4_0"].geometry}
                material={materials.Material_4}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_01_-_Default_0"].geometry}
                material={materials["01_-_Default"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_01_-_Default_0001"].geometry}
                material={materials["01_-_Default.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_01_-_Default_0002"].geometry}
                material={materials["01_-_Default_0"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_Material_#3_0"].geometry}
                material={materials.Material_3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_Material_#3_0001"].geometry}
                material={materials["Material_3.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["GrowFX01_Material_#3_0002"].geometry}
                material={materials["Material_3.002"]}
              />
            </group>
            <group
              position={[11.78, 9.4, -45.69]}
              rotation={[-Math.PI / 2, 0.96, -Math.PI]}
              scale={1.5}
            >
              <group position={[7.53, 1.62, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Line01_Material_#14_0"].geometry}
                  material={materials.Material_14}
                />
              </group>
            </group>
            <group
              position={[11.22, 8.91, -19.8]}
              rotation={[0, 0, 2.18]}
              scale={2.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["Plane01_Material_#12_0"].geometry}
                material={materials.Material_12}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-196.52, 122.13, -381.45]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5007.geometry}
          material={materials["Material.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3005.geometry}
          material={materials["Material.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2005.geometry}
          material={materials["Material.084"]}
        />
      </group>
      <group
        position={[129.87, 200.9, -391.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[80, 80, 60]}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PILEA_PEPEROMIOIDES_PILEA_Mat_0.geometry}
              material={materials.PILEA_Mat}
              position={[0, 0, -0.04]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.POT_TERRACOTTA_SMALL_POT_TERRACOTTA_SMALL_0.geometry
              }
              material={materials.POT_TERRACOTTA_SMALL}
            />
          </group>
        </group>
      </group>
      <group
        position={[215.94, 154.43, -392.97]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={30}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.POT_WOOD_LEGS_WOODEN_LEGS_POT_0.geometry}
              material={materials.WOODEN_LEGS_POT}
            />
          </group>
          <group position={[0.53, 48.99, 2.88]} scale={51.96}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.POTHOS_POTHOS_Mat_0.geometry}
              material={materials.POTHOS_Mat}
            />
          </group>
        </group>
      </group>
      <group
        position={[136.52, 193.99, -399.61]}
        rotation={[1.26, 0.07, -0.02]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3006.geometry}
          material={materials.pkcxM_2K_Albedo_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2006.geometry}
          material={materials.pkcxM_2K_Albedo_2_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4008.geometry}
          material={materials.vmhkaj2g_2K_Albedo_Mat}
        />
      </group>
      <group
        position={[244.39, 136.88, -145.06]}
        rotation={[-Math.PI / 2, 0, -1.64]}
        scale={1.3}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2004.geometry}
          material={materials["Color_007.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3020.geometry}
          material={materials["Wood_Bamboo_Medium.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3021.geometry}
          material={materials["Color_002.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3023.geometry}
          material={materials["Color_000.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3022.geometry}
          material={materials["material_1.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3024.geometry}
          material={materials["Color_008.004"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10004.geometry}
            material={materials["wire_006135006.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11003.geometry}
            material={materials["wire_006135006.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12003.geometry}
            material={materials["wire_006135006.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13001.geometry}
            material={materials["wire_006135006.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14001.geometry}
            material={materials.wire_087225087}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4009.geometry}
            material={materials.wire_006135006}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5008.geometry}
            material={materials["wire_006135006.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6008.geometry}
            material={materials["wire_006135006.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7007.geometry}
            material={materials["wire_006135006.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8002.geometry}
            material={materials["wire_006135006.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9003.geometry}
            material={materials["wire_006135006.005"]}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10005.geometry}
              material={materials["wire_006135006.016"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11004.geometry}
              material={materials["wire_006135006.017"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12004.geometry}
              material={materials["wire_006135006.018"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13002.geometry}
              material={materials["wire_006135006.019"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14002.geometry}
              material={materials["wire_087225087.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4010.geometry}
              material={materials["wire_006135006.010"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5009.geometry}
              material={materials["wire_006135006.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6009.geometry}
              material={materials["wire_006135006.012"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7008.geometry}
              material={materials["wire_006135006.013"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8003.geometry}
              material={materials["wire_006135006.014"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9004.geometry}
              material={materials["wire_006135006.015"]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-0.37, 4.58, 331.53]}
        rotation={[-2.23, -1.46, 0.92]}
        scale={3.49}
      >
        <group rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0006.geometry}
            material={materials["material0.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0007.geometry}
            material={materials["material0.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0008.geometry}
            material={materials["material0.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0009.geometry}
            material={materials["material0.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0010.geometry}
            material={materials["material0.010"]}
          />
        </group>
      </group>
      <group position={[422.23, 292.7, 62.65]} rotation={[-1.6, -0.11, -1.58]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_Material001_0.geometry}
              material={materials["Material.088"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/final.glb");
// git lfs migrate import --include="*.framework"
// https://miznauppal.b-cdn.net/final.glb