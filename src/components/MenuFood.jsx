import { useDispatch } from "react-redux";
import playAudio from "../helpers/playAudio";
import { setAction } from "../store/wolf/wolf-slice";

function MenuFood() {
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(setAction('Gallop'))
    playAudio('/audios/success.mp3', false)
  }

  const handleFail = () => {
    dispatch(setAction('Attack'))
    playAudio('/audios/fail.mp3', false)
  }

  return (
    <div className="menu-food row flex-edges">
      <button 
      className="food-item btn-secondary btn-large"
      onClick={handleSuccess}
      >
          Carn
      </button>
      <button 
      className="food-item btn-danger btn-large"
      onClick={handleFail}
      >
          Poma
      </button>
    </div>
  )
}
export default MenuFood