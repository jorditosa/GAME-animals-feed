import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import WolfController from "../controllers/WolfController";
import { Mountain } from "./Mountain";
import { Tree } from "./Tree";

export const Experience = () => {
  return (
    <>
      <OrbitControls 
      enableRotate={false}
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
      <Tree scale={[1,1,1]} position={[6, -1, 3]}/>
      
      {/* FLOOR */}
      <group position={[0, -0.5, 0]}>
        <RigidBody type="fixed" colliders={false} >
          <CylinderCollider args={[1/2, 1]} />
          <Cylinder scale={[50,0.1,50]} receiveShadow>
            <meshStandardMaterial color="#92cc41" />
          </Cylinder>
        </RigidBody>

      {/* ANIMAL */}
        <WolfController />
      </group>

    </>
  );
};
