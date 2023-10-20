/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Tree.glb 
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Tree(props) {
  const { nodes, materials } = useGLTF('/models/Tree.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat9} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat20} />
    </group>
  )
}

useGLTF.preload('/models/Tree.glb')
