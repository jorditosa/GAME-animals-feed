import { useDispatch, useSelector } from "react-redux"
import AppleController from "../controllers/AppleController"
import ChickenController from "../controllers/ChickenController"

function FeedAnimal() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)
  
  return (
    <>
      {/* FOOD */}
      <ChickenController scale={[0.5,0.5,0.5]} position={[6, -1, 3]}/>
      <AppleController scale={[0.5,0.5,0.5]} position={[6, -1, 3]}/>
    
    </>
  )
}
export default FeedAnimal