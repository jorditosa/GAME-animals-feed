import { useDispatch } from "react-redux";
import { Apple } from "../components/Apple";
import playAudio from "../helpers/playAudio";
import { setAction } from "../store/wolf/wolf-slice";

function AppleController() {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    playAudio("/audios/success.mp3", false);
    dispatch(setAction('Gallop'))
  }


  return (
    <group>
      <Apple scale={0.005} position={[1, 0.5, 7]} onClick={handleClick}/>
    </group>
  )
}

export default AppleController;
