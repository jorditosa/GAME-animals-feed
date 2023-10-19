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
      <Canvas shadows camera={{ position: [0, 2.5, 15], fov: 65 }}>
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
