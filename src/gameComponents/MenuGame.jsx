import { useSelector } from "react-redux";

function MenuGame() {
  const piecesEated = useSelector(state => state.wolf.piecesEated)

  return (
    <>
      {/* POINTS BADGE */}
        <div className='menu-game nes-container is-rounded'>
          {
            piecesEated === 0 ?
            <p>El llop no ha menjat res</p>
            :
            <p>El llop ha menjat <span className="nes-text is-error">{piecesEated}</span> {piecesEated === 1 ? ' peça': ' peces'}</p>
          }
        </div>
    </> 
  )
}
export default MenuGame
