import { useDispatch } from "react-redux";
import { Chicken } from "../components/Chicken";
import playAudio from "../helpers/playAudio";
import { addPieceEated, setAction } from "../store/wolf/wolf-slice";

function ChickenController() {
  const dispatch = useDispatch()
  const handleClick = () => {
    playAudio("/audios/success.mp3", false)
    dispatch(setAction('Gallop'));

    dispatch(addPieceEated());

    dispatch(setAction('Gallop'));
    // Resetear el estado del juego
    setTimeout(() => {
      dispatch(setAction('Idle_2'));
    }, 2000);
  }

  return (
    <group>
            <Chicken 
            scale={0.1} 
            position={[-1, 0.5, 7]} 
            onClick={handleClick}
            />
    </group>
  )
}
export default ChickenController