
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import useStore from '../utility/useStore'
import {XR, createXRStore} from '@react-three/xr'
// import { ARButton } from 'three/examples/jsm/webxr/ARButton.js'
// import { useThree } from '@react-three/fiber'


export default function Backpack(props) {

    // const {gl} = useThree()

    // gl.xr.enabled =true

    // document.body.appendChild( ARButton.createButton(gl))



    // const {material} = useConfigurations()

    const material = useStore((state) => state.material)
    const color = useStore((state) => state.color)
    const metalColor = useStore((state) => state.metalColor)


    const leatherTextureProps = useTexture({
        map: './textures/leather/leather_baseColor.jpg',
        normalMap: './textures/leather/leather_normal.jpg',
        aoMap: './textures/leather/leather_occlusionRoughnessMetallic.jpg',
        roughnessMap: './textures/leather/leather_occlusionRoughnessMetallic.jpg',
    })

    const fabricTextureProps = useTexture({
        map: './textures/fabric/fabric_baseColor.jpg',
        normalMap: './textures/fabric/fabric_normal.jpg',
        aoMap: './textures/fabric/fabric_occlusionRoughnessMetallic.jpg',
        roughnessMap: './textures/fabric/fabric_occlusionRoughnessMetallic.jpg',
    })

    const denimTextureProps = useTexture({
        map: './textures/denim/denim_baseColor.jpg',
        normalMap: './textures/denim/denim_normal.jpg',
        aoMap: './textures/denim/denim_occlusionRoughnessMetallic.jpg',
        roughnessMap: './textures/denim/denim_occlusionRoughnessMetallic.jpg',
    })

    const metalTextureProps = useTexture({
        map: './textures/metal/metall_baseColor.jpg',
        normalMap: './textures/metal/metall_normal.jpg',
        aoMap: './textures/metal/metall_occlusionRoughnessMetallic.jpg',
        roughnessMap: './textures/metal/metall_occlusionRoughnessMetallic.jpg',
    })

leatherTextureProps.map.flipY = false
leatherTextureProps.normalMap.flipY = false
leatherTextureProps.aoMap.flipY = false
leatherTextureProps.roughnessMap.flipY = false

denimTextureProps.map.flipY = false
denimTextureProps.normalMap.flipY = false
denimTextureProps.aoMap.flipY = false
denimTextureProps.roughnessMap.flipY = false

fabricTextureProps.map.flipY = false
fabricTextureProps.normalMap.flipY = false
fabricTextureProps.aoMap.flipY = false
fabricTextureProps.roughnessMap.flipY = false

metalTextureProps.map.flipY = false
metalTextureProps.normalMap.flipY = false
metalTextureProps.aoMap.flipY = false
metalTextureProps.roughnessMap.flipY = false

// const textureMaterial = 

// console.log(textureMaterial)


  const { nodes, materials } = useGLTF('./model/backpack.glb')
  return (
    <>
    <group {...props} dispose={null}>
        {/* <ambientLight intensity={1} /> */}

        <pointLight position={[0,1,0]} intensity={2}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.backpack.geometry}
        scale={0.001}
      >
        {
         material === 'leather' 
         ?
               <meshStandardMaterial
                color={color}
                {...leatherTextureProps} />  
         : 
         material ==='fabric' 
         ?
            <meshStandardMaterial
            color={color}
            {...fabricTextureProps} />  
         :
            <meshStandardMaterial
            color={color}
            {...denimTextureProps} />  
          }
      
      </mesh>


      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_hook.geometry}
        scale={0.001}
      >
          <meshStandardMaterial
        color={metalColor}
         {...metalTextureProps}/>

      </mesh>



      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pins.geometry}
        scale={0.001}
      >
          <meshStandardMaterial
        color={metalColor}
         {...metalTextureProps}/>

      </mesh>

   
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_buckle.geometry}
        scale={0.001}
      >
          <meshStandardMaterial
        color={metalColor}
         {...metalTextureProps}/>

      </mesh>

   
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.zip.geometry}
        scale={0.001}
      >
          <meshStandardMaterial
        color={metalColor}
         {...metalTextureProps}/>

      </mesh>


      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_buckle.geometry}
        scale={0.001}
      >
          <meshStandardMaterial
        color={metalColor}
         {...metalTextureProps}/>

      </mesh>
    </group>
    </>

  )
}

useGLTF.preload('/backpack.gltf')
