import { Float } from "@react-three/drei";
import { Apple } from "../components/Apple";

function AppleController() {
  return (
    <group>
          <Float 
          rotationIntensity={0.5}
          speed={2}
          >
            <Apple scale={0.005} position={[1, 0.5, 5]} />
          </Float>
    </group>
  )
}
export default AppleController