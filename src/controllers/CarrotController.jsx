import { useDispatch } from "react-redux";
import { Carrot } from "../components/Carrot";
import playAudio from "../helpers/playAudio";
import { setAction } from "../store/wolf/wolf-slice";

function CarrotController() {
  const dispatch = useDispatch()
  const handleClick = () => {
    playAudio("/audios/success.mp3", false);
    dispatch(setAction('Gallop'))
  }
  
  return (
    <group>
            <Carrot scale={2} position={[0, 0.2, 7]} onClick={handleClick} />
    </group>
  )
}
export default CarrotController