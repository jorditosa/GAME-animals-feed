import { Float } from "@react-three/drei";
import { Chicken } from "../components/Chicken";

function ChickenController() {
  return (
    <group>
          <Float 
          rotationIntensity={1}
          speed={1}
          >
            <Chicken scale={0.1} position={[-1.5, 1, 5]} />
          </Float>
    </group>
  )
}
export default ChickenController