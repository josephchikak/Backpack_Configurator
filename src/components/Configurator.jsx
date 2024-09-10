import React from 'react'
import { useConfigurations } from '../contexts/Configurations'
import useStore from '../utility/useStore'



const Configurator = () => {

const material  = useStore((state) => state.material)
const updateMaterial = useStore((state) => state.updateMaterial)
const updateColor = useStore((state) => state.updateColor)
const updateMetalColor = useStore((state) => state.updateMetalColor)



    // const {material, setMaterial} = useConfigurations()

  return (
    <div className='fixed font-[black] w-[100vw] h-[20px] z-10 bottom-[30%] right-[0]'>
        
        <div className='fixed top-[10%] font-inter '>
            <div className='w-[100vw] flex justify-center'>
                <button className='px-4 py-2 bg-blue-400 rounded-xl flex gap-2 items-center'>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9h6V3H3zm1-5h4v4H4zm1 1h2v2H5zm10 4h6V3h-6zm1-5h4v4h-4zm1 1h2v2h-2zM3 21h6v-6H3zm1-5h4v4H4zm1 1h2v2H5zm15 2h1v2h-2v-3h1zm0-3h1v1h-1zm0-1v1h-1v-1zm-10 2h1v4h-1v-4zm-4-7v2H4v-1H3v-1h3zm4-3h1v1h-1zm3-3v2h-1V3h2v1zm-3 0h1v1h-1zm10 8h1v2h-2v-1h1zm-1-2v1h-2v2h-2v-1h1v-2h3zm-7 4h-1v-1h-1v-1h2v2zm6 2h1v1h-1zm2-5v1h-1v-1zm-9 3v1h-1v-1zm6 5h1v2h-2v-2zm-3 0h1v1h-1v1h-2v-1h1v-1zm0-1v-1h2v1zm0-5h1v3h-1v1h-1v1h-1v-2h-1v-1h3v-1h-1v-1zm-9 0v1H4v-1zm12 4h-1v-1h1zm1-2h-2v-1h2zM8 10h1v1H8v1h1v2H8v-1H7v1H6v-2h1v-2zm3 0V8h3v3h-2v-1h1V9h-1v1zm0-4h1v1h-1zm-1 4h1v1h-1zm3-3V6h1v1z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                    See in Real Life
                </button>
            </div>
         
        </div>
    <div className='flex text-sm sm:text-lg  gap-2 sm:gap-10 flex-col h-[20vh] sm:h-fit items sm:flex-row justify-center font-inter select-none'>
        <div className='flex flex-col items-center gap-2 font-bold'>
            BODY COLOR
            <div className='flex gap-2 border-t-2 border-black p-3 font-normal'>
                <div className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#d07a3c] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]  focus:outline-none focus:ring focus:ring-blue-300`} onClick={() => updateColor('#d07a3c')}>  </button>
                    BROWN
                </div>

                <div className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#1a1a1a] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]   focus:outline-none focus:ring focus:ring-blue-300`} onClick={() => updateColor('#1a1a1a')}>    </button>
                     BLACK  
                </div>

                <div className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#104d97] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]  focus:outline-none focus:ring focus:ring-blue-300` } onClick={() => updateColor('#104d97')}>   </button>
                    BLUE  
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-2 font-bold'>
            METAL COLOR
            <div className='flex gap-2 border-t-2 border-black p-3 font-normal'>
                <div  className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#BBC6CC] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] focus:outline-none focus:ring focus:ring-blue-300`} onClick={() => updateMetalColor('#BBC6CC')}>  </button>
                    SILVER
                </div>

                <div  className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#d4af37] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]  focus:outline-none focus:ring focus:ring-blue-300`} onClick={() => updateMetalColor('#d4af37')}>    </button>
                    GOLD
                 </div>

                 <div  className='flex flex-col gap-2 text-xs items-center'>
                    <button className={`border border-black bg-[#010203] rounded-[100%] w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]  focus:outline-none focus:ring focus:ring-blue-300` } onClick={() => updateMetalColor('#010203')}>   </button>
                    BLACK
                 </div>
            </div>
        </div>

        <div className='flex flex-col items-center gap-2 font-bold'>
            MATERIAL 
            <div className='flex gap-2 border-t-2 border-black p-3 font-normal'>
                 <button className={`border border-black rounded-lg p-1.5 sm:p-3 focus:outline-none bg-leather bg-cover focus:ring focus:ring-blue-300`} onClick={() => updateMaterial('leather')}> Leather </button>
                 <button className={`border border-black rounded-lg p-1.5 sm:p-3 focus:outline-none bg-fabric bg-cover focus:ring focus:ring-blue-300 `} onClick={() => updateMaterial('fabric')}> Fabric   </button>
                 <button className={`border border-black rounded-lg p-1.5 sm:p-3  focus:outline-none bg-denim bg-cover focus:ring focus:ring-blue-300` } onClick={() => updateMaterial('denim')}> Denim  </button>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Configurator