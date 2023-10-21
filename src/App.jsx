import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Experience } from "./components/Experience";

const LazyMenu = lazy(() => import("./gameComponents/Menu"))


function App() {
  const gameStatus = useSelector(state => state.gameStatus.gameStat)

  return (
    <>
      <Canvas linear camera={{ position: [0, 2.5, 15], fov: 65 }}>
        <color attach="background" args={["#DFFCFF"]} />º
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
        <LazyMenu />
        :
        ''
      }
    </>
  );
}

export default App;
