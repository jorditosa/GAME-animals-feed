import { useDispatch, useSelector } from "react-redux"
import AppleController from "../controllers/AppleController"
import CarrotController from "../controllers/CarrotController"
import ChickenController from "../controllers/ChickenController"

function FeedAnimal() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)
  
  return (
    <>
      {/* FOOD */}
        <ChickenController scale={[0.5,0.5,0.5]} position={[5, -1, 3]}/>
        <AppleController scale={[0.5,0.5,0.5]} position={[-5, -1, 3]}/>  
        <CarrotController scale={[0.5,0.5,0.5]} position={[3 -1, 3]}/>  
    </>
  )
}
export default FeedAnimal