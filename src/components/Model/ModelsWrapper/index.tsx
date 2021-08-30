import React,{ useRef, useState, useCallback}  from "react";

import ModelsContext, { CarModel } from "../ModelsContext";
import ModelOverlay from "../ModelOverlay/index";


import {
    Container,
    OverlayRoot
}  from "./styles";









const ModelsWrapper: React.FC= ({children}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredMoldels, setRegisteredMoldels] = useState<CarModel[]>([])
    
    const registerModel = useCallback((model: CarModel) => {
        setRegisteredMoldels(state => [...state , model])
    } , [])


    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredMoldels(state => state.filter(model => model.modelName !== modelName))
    } , [])


    const getModelByName = useCallback((modelName: string) => {
        return registeredMoldels.find(item => item.modelName === modelName) || null
    } , [])
    return(
        <ModelsContext.Provider value={{
            wrapperRef,
            registeredMoldels,
            registerModel,
            unregisterModel,
            getModelByName

        }}>
            <Container ref={wrapperRef}>
                <OverlayRoot>
                    {registeredMoldels.map(item =>(
                        <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
                    ))}
                </OverlayRoot>    
                {children}
                
            </Container>
        </ModelsContext.Provider>
    )
}

    


export default ModelsWrapper;