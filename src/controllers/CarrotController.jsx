import { useDispatch } from "react-redux";
import { Carrot } from "../components/Carrot";
import playAudio from "../helpers/playAudio";
import { setAction } from "../store/wolf/wolf-slice";

function CarrotController() {
  const dispatch = useDispatch()
  const handleClick = () => {
    playAudio("/audios/success.mp3", false);
    dispatch(setAction('Gallop'))

    dispatch(setAction('Gallop'));
    // Resetear el estado del juego
    setTimeout(() => {
      dispatch(setAction('Idle_2'));
    }, 2000);
  }
  
  return (
    <group>
            <Carrot scale={2} position={[0, 0.2, 7]} onClick={handleClick} />
    </group>
  )
}
export default CarrotController