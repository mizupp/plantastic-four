
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";


export default function Model(props) {
  const { nodes, materials } = useGLTF("/untitled.glb");
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
                geometry={nodes.Sofa3L_Almofadas2_0.geometry}
                material={materials["Material.024"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Sofa_0.geometry}
                material={materials["Material.023"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa3L_Almofadas1_0.geometry}
                material={materials["Material.025"]}
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
                geometry={nodes.Sofa_2L_Almofadas1_0.geometry}
                material={materials["Material.029"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Sofa_0.geometry}
                material={materials["Material.027"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sofa_2L_Almofadas2_0.geometry}
                material={materials["Material.028"]}
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
        position={[-198.8, 0.01, -183.38]}
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
    </group>
  );
}

useGLTF.preload("/untitled.glb");

