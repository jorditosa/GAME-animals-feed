import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";

function MenuGame() {
  const piecesEated = useSelector(state => state.wolf.piecesEated)

  return (
    <>
        {/* POINTS BADGE */}
        <Html
        position={[0, 8, 0]}
        >
          <div className='menu-game nes-container is-rounded'>
            {
              piecesEated === 0 ?
              <p>El llop no ha menjat res</p>
              :
              <p>El llop ha menjat <span className="nes-text is-error">{piecesEated}</span></p>
            }
          </div>
        </Html>
      </> 
  )
}
export default MenuGame
