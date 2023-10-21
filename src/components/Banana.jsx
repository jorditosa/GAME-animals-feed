/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Banana.glb 
*/
import { animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
import { useFeedAnimation } from '../hooks/useFeedAnimation';

export function Banana(props) {
  const { nodes, materials } = useGLTF('/models/Banana.glb');
  const { dispatchActions, playAudioAction, scale, active, setActive } = useFeedAnimation();

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
    {...props} 
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
      <mesh 
        geometry={new THREE.CircleGeometry(0.6, 64)} 
        material={new THREE.MeshBasicMaterial({ color: '#ffff00' })} 
        position={[0, 0, 0]} 
      />
    </animated.group>
  )
}

useGLTF.preload('/models/Banana.glb')
