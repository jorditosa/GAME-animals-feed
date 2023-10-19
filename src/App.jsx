import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Experience } from "./components/Experience";
import Menu from "./components/Menu";

function App() {
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 12], fov: 65 }}>
        <color attach="background" args={["#dbecfb"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      
      {/* MENUS */}
      {
        gameStatus !== 'play' 
        ?
        <Menu />
        :
        ''
      }
    </>
  );
}

export default App;
