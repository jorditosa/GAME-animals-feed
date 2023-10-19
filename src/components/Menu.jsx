import { useDispatch, useSelector } from "react-redux"
import playAudio from "../helpers/playAudio.js"
import { startGame } from "../store/gameStatus/game-slice"

function Menu() {
  const dispatch = useDispatch()
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  if (gameStatus === 'play') return null

  return (
    <div className="menu card">
      <h2 className="card-title">Ens ajudes a alimentar el llop?</h2>
      <i className="nes-pikachu"></i>
      <button 
      className="nes-btn is-warning"
      onClick={() => {
        dispatch(startGame('play'))
        playAudio(`/audios/soundtrack.mp3`, true)
      }}
      >
        Comença!
      </button>
    </div>
  )
}
export default Menu