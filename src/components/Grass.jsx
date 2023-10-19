import { useLoader } from "@react-three/fiber";
import { RepeatWrapping } from "three/src/constants";
import { TextureLoader } from "three/src/loaders/TextureLoader";


const Grass = () => {
  const colorMap = useLoader(TextureLoader, '/textures/grass.jpg');

  colorMap.wrapS = RepeatWrapping;
  colorMap.wrapT = RepeatWrapping;
  colorMap.repeat.set(20, 20);

  return (
      <meshStandardMaterial map={colorMap} mapSize={[20, 20]}/>
  );
};

export default Grass;
