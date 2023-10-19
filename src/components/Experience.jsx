import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useDispatch, useSelector } from "react-redux";
import WolfController from "../controllers/WolfController";
import FeedAnimal from "../gameComponents/FeedAnimal";
import { Flowers } from "./Flowers";
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
      />

      {/* LIGHTS */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* BACKGROUND */}
      <Mountain scale={[2,2,2]} position={[0, -1, -22]}/>
      <Mountain scale={[1,1,1]} position={[11, -1, -11]}/>
      <Mountain scale={[1,1,1]} position={[-11, -1, -11]} rotation-y={180}/>
      <Mountain scale={[1,2,2]} position={[12, -1, -22]}/>
      <Mountain scale={[4,1,1]} position={[-12, -1, -22]}/>
      <Tree scale={[1,1,1]} position={[4, -1, 2]} rotation-y={2}/>
      <Flowers scale={[0.4,0.4,0.4]} position={[-2, -1, -1.5]}/>
      
      {/* FLOOR */}
        <RigidBody type="fixed" colliders={false} >
          <CylinderCollider args={[1/2, 1]} />
          <Cylinder scale={[50,0.1,50]} receiveShadow>
            <meshStandardMaterial color="#92cc41" />
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
