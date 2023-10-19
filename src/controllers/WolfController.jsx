import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { Wolf } from "../components/Wolf"

function WolfController() {
  return (
    <group>
      <RigidBody colliders={false} scale={[0.9, 0.9, 0.9]}>
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.8, 0]} />
        <Wolf position={[0, 0, 2]} />
      </RigidBody>
    </group>
  )
}
export default WolfController