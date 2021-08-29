import React from "react";


import { Container, Heading, Buttons} from './styles'
//voce recebe as propriedades do modelo do label do paragrafo 
interface Props{
    label : string
    description: string
}
//cato as props e jogo como parametro

const DefaultOverlayContent: React.FC<Props> = ({
label,description 
}) => {
    return(
    <Container>
     <Heading>
         <h1>{label}</h1>
         <h2>{description}</h2>
     </Heading>

     <Buttons>
        <button>História</button>
        <button className="white">Criador</button>
     </Buttons>
    </Container>
        

    

    )
}

export default DefaultOverlayContent;