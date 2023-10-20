import { useDispatch, useSelector } from "react-redux"
import playAudio from "../helpers/playAudio"
import { startGame } from "../store/gameStatus/game-slice"

function Menu() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  if (gameStatus === 'play') return null

  return (
    <div className="menu nes-container is-rounded is-centered">
      <h1>Hola! 🐺</h1>
      <p>Ens ajudes a alimentar el llop ?</p>
      <p>Simplement fes click sobre la peça de menjar que vulguis donar-li</p>
      <button 
      type="button"
      className="nes-btn is-warning"
      onClick={() => {
        dispatch(startGame('play'))
        playAudio("/audios/openning.mp3", false);
      }}
      >
        Comença!
      </button>
    </div>
  )
}
export default Menu