import React from 'react'
import '../index.css'
import Backpack from './Backpack'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Configurator from './Configurator'
import { ConfigurationsProvider } from '../contexts/Configurations'

const Experience = () => {
  return (
    <>
    {/* <ConfigurationsProvider> */}

    <div className='h-[100vh] canvasContainer'>
        <Canvas 
         camera={{
            fov: 50,
            near: 1,
            far: 100,
            position: [ 0, 0, 2 ],
        }}> 
        <ambientLight intensity={2}/>
             <OrbitControls enableZoom={false}/>
             <Backpack/>
        </Canvas> 
        <Configurator/>

    </div>
    {/* </ConfigurationsProvider> */}

    </>
  
  )
}

export default Experience