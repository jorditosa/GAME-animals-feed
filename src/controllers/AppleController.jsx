import { Float } from "@react-three/drei";
import { Apple } from "../components/Apple";

function AppleController() {
  return (
    <group>
          <Float 
          rotationIntensity={1}
          speed={1}
          >
            <Apple scale={0.005} position={[1.5, 1, 5]} />
          </Float>
    </group>
  )
}
export default AppleController