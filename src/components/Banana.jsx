/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Banana.glb 
*/
import { animated } from '@react-spring/three';
import { Html, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useFeedAnimation } from '../hooks/useFeedAnimation';

export function Banana({position}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/models/Banana.glb');
  const { dispatchActions, playAudioAction, scale, active, setActive } = useFeedAnimation();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  console.log(nodes);

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
    position={position}
    ref={ref}
    dispose={null}
    scale={scale}
    onClick={handleClick}
    >  
      <mesh 
      geometry={nodes.Banana.geometry} 
      material={materials.Yellow} 
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={100} 
      />
      <Html>
      </Html>
    </animated.group>
  )
}

useGLTF.preload('/models/Banana.glb')
