import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 3, 12], fov: 60 }}>
        <color attach="background" args={["#dbecfb"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Menu />
    </>
  );
}

export default App;
