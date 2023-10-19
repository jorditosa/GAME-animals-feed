import { useDispatch, useSelector } from "react-redux"
import playAudio from "../helpers/playAudio"
import { startGame } from "../store/gameStatus/game-slice"

function Menu() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  if (gameStatus === 'play') return null

  return (
    <div className="menu container border border-5 border-primary padding-small">
      <h4 className="card-title">Ens ajudes a alimentar el llop?</h4>
      <button 
      className="btn-secondary"
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