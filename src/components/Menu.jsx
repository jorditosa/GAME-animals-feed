import { useDispatch, useSelector } from "react-redux"
import playAudio from "../helpers/playAudio"
import { startGame } from "../store/gameStatus/game-slice"

function Menu() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  if (gameStatus === 'play') return null

  return (
    <div className="menu container border border-5 border-primary padding-small">
      <p className="card-title">Ens ajudes a alimentar el llop?</p>
      <button 
      className="btn-secondary"
      onClick={() => {
        dispatch(startGame('play'))
        playAudio("/audios/success.mp3", false);
      }}
      >
        Comença!
      </button>
    </div>
  )
}
export default Menu