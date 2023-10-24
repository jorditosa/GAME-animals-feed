import { useLoader } from "@react-three/fiber";
import { RepeatWrapping } from "three/src/constants";
import { TextureLoader } from "three/src/loaders/TextureLoader";


const Grass = () => {
  const colorMap = useLoader(TextureLoader, '/textures/grass.jpg');

  colorMap.wrapS = RepeatWrapping;
  colorMap.wrapT = RepeatWrapping;
  colorMap.repeat.set(10, 10);

  return (
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[ 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
  );
};

export default Grass;
