import React from 'react'
import '../index.css'
import Backpack from './Backpack'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Configurator from './Configurator'
import { XR, createXRStore, } from '@react-three/xr'
import useStore from '../utility/useStore'

const Experience = () => {

// creating store for AR capabilities
const store = createXRStore()

// AR state
const AR  = useStore((state) => state.AR)

const handleClick = () => {
  if(AR){
    store.destroy()
  } else
  store.enterAR()
}

  return (
    <>
      
    <div className='h-[60vh] sm:h-[100vh] flex flex-col items-center'>
      {/* Button to enter AR */}
       <button className='z-10 mt-20 px-4 visible sm:invisible py-2 bg-blue-400 rounded-xl w-[200px] items-center ' onClick={() => handleClick()}>Enter AR</button>

       {/* threejs scene */}
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
              {AR ? <></> 
                :
              <Backpack/>
              }
          </XR>

          </Canvas> 
          <Configurator/>


      </div>

    </>
  
  )
}

export default Experience