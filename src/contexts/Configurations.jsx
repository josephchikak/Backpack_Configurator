import { createContext, useContext, useState } from "react";

const ConfigurationsContext = createContext({})


export const ConfigurationsProvider = (props) => {
    // const [material, setMaterial] = useState('leather')

    return <ConfigurationsContext.Provider 
        value ={{
            material,
            setMaterial,
        }}>
        {props.children}
    </ConfigurationsContext.Provider>
}

export const useConfigurations = () => {
    const context = useContext(ConfigurationsContext)
    return context
}