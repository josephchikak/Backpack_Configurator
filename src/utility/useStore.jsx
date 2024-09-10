import { create } from 'zustand'

 const useStore = create((set) => ({
        material: 'leather',
        color:'#d07a3c',
        metalColor: '#010203',
        AR: false,
        updateMaterial: (mat) =>  set((state) => ({material: mat })),
        updateColor:  (color) =>  set((state) => ({color: color})),
        updateMetalColor:  (metalColor) =>  set((state) => ({metalColor: metalColor})),
        updateAR: (state) => set((state) => ({AR: !state.AR}))

    }))

export default useStore