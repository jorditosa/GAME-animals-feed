import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { lazy } from "react";
import { useSelector } from "react-redux";
import WolfController from "../controllers/WolfController";
import FeedAnimal from "../gameComponents/FeedAnimal";
import { Flowers } from "./Flowers";
import Grass from "./Grass";
import { Mountain } from "./Mountain";
import { Tree } from "./Tree";

const LazyMenuGame = lazy(() => import("../gameComponents/MenuGame"))

export const Experience = () => {
  const gameStatus = useSelector(state => state.gameStatus.gameStat);
  
  return (
    <>
      <group position={[0, -0.5, 0]}>
      <OrbitControls 
      enableRotate={true}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2.5}
      />

      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight position={[25, 10, 25]} intensity={1} castShadow />

      {/* BACKGROUND */}
      <Mountain scale={[3,1.4,2]} position={[-7, -1, -25]}/>
      <Mountain scale={[2,2,2]} position={[0, -1, -22]}/>
      <Mountain scale={[1,1,1]} position={[11, -1, -11]} rotation-y={40}/>
      <Mountain scale={[1,1,1]} position={[-11, -1, -11]} rotation-y={180}/>
      <Mountain scale={[1,2,2]} position={[12, -1, -22]}/>
      <Mountain scale={[4,1,1]} position={[-12, -1, -22]}/>
      <Tree scale={[4,6,4]} position={[6, 6, 1.5]} rotation-y={2}/>
      <Tree scale={[7,7,5]} position={[4, 5, -5]} rotation-y={20}/>
      <Flowers scale={[0.4,0.4,0.4]} position={[-4, -1, -1.5]}/>
      <Flowers scale={[0.4,0.5,0.5]} position={[-1.6, 0, -5]}/>
      <Flowers scale={[0.4,0.3,0.6]} position={[-4.3, 0, -4]}/>
      <Flowers scale={[0.4,0.3,0.2]} position={[-6, 0, -4]}/>
      
      {/* FLOOR */}
        <RigidBody type="fixed" colliders={false} >
          <CylinderCollider args={[1/2, 1]} />
          <Cylinder scale={[50,0.2,50]} receiveShadow>
            <Grass />
          </Cylinder>
        </RigidBody>

      {/* ANIMAL */}
        <WolfController />
      </group>

      {/************************* PLAYING THE GAME *****************************/}
      {
        gameStatus === 'play' ?
        <>
          <FeedAnimal />

          <LazyMenuGame />
        </>
        : null
      }


    </>
  );
};
