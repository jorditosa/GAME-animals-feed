import { Banana } from "../components/Banana"
import { Chicken } from "../components/Chicken"
import { Green } from "../components/Green"
import { Lettuce } from "../components/Lettuce"

function FeedAnimal() {
 
  return (
    <>
      {/* FOOD */}
        <Green position={[1.5, 0.5, 7]}/>  
        <Chicken position={[1.5, 2.2, 7]}/>
        <Banana position={[-1.5, 0.5, 7]}/>
        <Lettuce position={[-1.5, 2.2, 7]}/>

    </>
  )
}
export default FeedAnimal