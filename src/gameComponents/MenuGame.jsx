import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";

function MenuGame() {
  const piecesEated = useSelector(state => state.wolf.piecesEated)

  return (
    <>
        {/* POINTS BADGE */}
        <Html
        position={[-4, 6,-5]}
        >
          <div className='nes-badge'>
            <h2><span className="is-warning">{piecesEated}</span></h2>
          </div>
        </Html>
      </> 
  )
}
export default MenuGame
