import { useDispatch } from "react-redux"
import { Banana } from "../components/Banana"
import { Chicken } from "../components/Chicken"
import { Green } from "../components/Green"
import { Lettuce } from "../components/Lettuce"

function FeedAnimal() {
  const dispatch = useDispatch()
  
  return (
    <>
      {/* FOOD */}
        <Green position={[4, 1, 7]}/>  
        <Chicken position={[1, 1, 7]}/>
        <Banana position={[-2, 1, 7]}/>
        <Lettuce position={[-5, 1, 7]}/>
    </>
  )
}
export default FeedAnimal