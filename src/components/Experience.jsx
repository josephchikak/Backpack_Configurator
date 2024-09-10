import React from 'react'
import '../index.css'
import Backpack from './Backpack'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Configurator from './Configurator'
import { XR, createXRStore } from '@react-three/xr'

const Experience = () => {

const store = createXRStore()

  return (
    <>
    {/* <ConfigurationsProvider> */}

    <div className='h-[100vh] canvasContainer'>
    <button onClick={() => store.enterAR()}>Enter AR</button>
    <button onClick={() => store.enterAR()}>Enter AR</button>
        <Canvas 
         camera={{
            fov: 50,
            near: 1,
            far: 100,
            position: [ 0, 0, 2 ],
        }}> 
        <XR store={store}>

        <ambientLight intensity={2}/>
             <OrbitControls enableZoom={false}/>
             <Backpack/>
        </XR>

        </Canvas> 
        <Configurator/>

  

    </div>
    {/* </ConfigurationsProvider> */}

    </>
  
  )
}

export default Experience