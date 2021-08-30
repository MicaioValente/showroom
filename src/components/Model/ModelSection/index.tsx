import React ,{useRef , useEffect}from "react";



import useModel from "../ModelsWrapper/useModel";




import {Container}  from "./styles";


//crio as props pra poder passar pro elemento
//ele vai receber as propriedades de ModelSection como se fosse uma div
interface Props  extends React.HTMLAttributes<HTMLDivElement>{
    modelName: string
    overlayNode: React.ReactNode
}


//passo as props pra poder ter acesso as elas 
const ModelSection: React.FC<Props>= ({
    modelName,
    overlayNode,
    children, 
    ...props
}) => {
    const {registerModel} = useModel(modelName)

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if (sectionRef.current)
        registerModel({
            modelName,
            overlayNode,
            sectionRef
        })
    }, [])


    return(
        <Container ref={sectionRef} {...props}>{children}</Container>
    )
}

    


export default ModelSection;