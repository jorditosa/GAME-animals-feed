import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useDispatch, useSelector } from "react-redux";
import WolfController from "../controllers/WolfController";
import FeedAnimal from "../gameComponents/FeedAnimal";
import { Flowers } from "./Flowers";
import Grass from "./Grass";
import { Mountain } from "./Mountain";
import { Tree } from "./Tree";
export const Experience = () => {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)
  
  return (
    <>
      <group position={[0, -0.5, 0]}>
      <OrbitControls 
      enableRotate={true}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2.5}
      />

      {/* LIGHTS */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* BACKGROUND */}
      <Mountain scale={[3,1.4,2]} position={[-7, -1, -25]}/>
      <Mountain scale={[2,2,2]} position={[0, -1, -22]}/>
      <Mountain scale={[1,1,1]} position={[11, -1, -11]} rotation-y={40}/>
      <Mountain scale={[1,1,1]} position={[-11, -1, -11]} rotation-y={180}/>
      <Mountain scale={[1,2,2]} position={[12, -1, -22]}/>
      <Mountain scale={[4,1,1]} position={[-12, -1, -22]}/>
      <Tree scale={[1.5,1.5,1.5]} position={[4, -1, 1.5]} rotation-y={2}/>
      <Tree scale={[1.8,1.8,2.2]} position={[3, -1, -5]} rotation-y={20}/>
      <Flowers scale={[0.4,0.4,0.4]} position={[-2.2, -1, -1.5]}/>
      <Flowers scale={[0.4,0.5,0.5]} position={[-0.2, 0, -5]}/>
      <Flowers scale={[0.4,0.3,0.6]} position={[-2.5, 0, -4]}/>
      
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

      {
        gameStatus === 'play' ?
        <>
          <FeedAnimal />
        </>
        : null
      }

    </>
  );
};
