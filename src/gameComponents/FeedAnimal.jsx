import { Banana } from "../components/Banana"
import { Chicken } from "../components/Chicken"
import { Green } from "../components/Green"
import { Lettuce } from "../components/Lettuce"

function FeedAnimal() {
 
  return (
    <>
      {/* FOOD */}
        <group position={[0,0,0]}>
            <Green position={[1, 0.3, 8]}/>  
            <Chicken position={[1, 1.8, 8]}/>
            <Banana position={[-1, 0.3, 8]}/>
            <Lettuce position={[-1, 1.8, 8]}/>
        </group>
    </>
  )
}
export default FeedAnimal