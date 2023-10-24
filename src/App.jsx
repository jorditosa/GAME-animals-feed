import { Loader, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Experience } from "./components/Experience";
import Menu from "./gameComponents/Menu";
import MenuGame from "./gameComponents/MenuGame";

function App() {
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  return (
    <>
      <Canvas linear camera={{ position: [0, 2.5, 15], fov: 65 }} shadows>
        <Sky sunPosition={[100, 50, 100]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader 
      containerStyles={{
        backgroundColor: '#dbecfb',
      }}
      dataStyles={{
        color: '#000000',
      }}
      dataInterpolation={(p) => `Carregant ${p.toFixed(2)}%`}
      barStyles={{ 
        backgroundColor: '#000000',
        height: '10px', 
      }}
      />
      
      {/* MENUS */}
      {
        gameStatus !== 'play' 
        ?
        <Menu />
        :
        <MenuGame />
      }
    </>
  );
}

export default App;
