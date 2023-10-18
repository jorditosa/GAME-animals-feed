import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { Wolf } from "../components/Wolf"

function WolfController() {
  return (
    <group>
      <RigidBody colliders={false} scale={[0.8, 0.8, 0.8]}>
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.8, 0]} />
        <Wolf position={[0, 0, 0]} />
      </RigidBody>
    </group>
  )
}
export default WolfController