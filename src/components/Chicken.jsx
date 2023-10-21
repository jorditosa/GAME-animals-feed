/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Chicken Leg.glb 
*/
import { animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useFeedAnimation } from '../hooks/useFeedAnimation';

export function Chicken({position}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/Chicken Leg.glb');
  const { dispatchActions, playAudioAction, scale, active, setActive } = useFeedAnimation();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  } );

  const handleClick = () => {
    setActive(!active)
    setTimeout(() => {
      setActive(false);
    }, 200);

    dispatchActions();
    playAudioAction();
  };

  return (
    <animated.group 
    ref={ref}
    position={position}
    dispose={null}
    scale={scale}
    onClick={handleClick}
    >
      <group scale={100}>
        <mesh geometry={nodes.ChickenLeg_1.geometry} material={materials.Beige} />
        <mesh geometry={nodes.ChickenLeg_2.geometry} material={materials.DarkBrown} />
      </group>
    </animated.group>
  )
}

useGLTF.preload('/models/Chicken Leg.glb')
