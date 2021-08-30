import React from 'react';


import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent/index';


import { Container} from './styles'
import UniqueOverlay from '../UniqueOverlay/index';


const Page: React.FC = () => {
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {/* isso percorre cada elemento do meu array e parra um html pra cada um no caso  */}
                    {[
                        'Opalão 6 Canecos',
                        'Kombi',
                       'Fuscão',
                        'Golzin Quadrado',
                    ].map(modelName => (
                        
                    <ModelSection
                    key={modelName}
                    className="colored"
                    modelName={modelName}
                    overlayNode={
                        <DefaultOverlayContent
                        //É o texto que aparece na tela como props
                        label={modelName}
                        description="ENQUANTO UNS DIRIGEM CARROS, ELES DIRIGEM DE LENDAS"
                        />
                    }
                    />
                    ))}
                    
                </div>
                <UniqueOverlay/>
            </ModelsWrapper>
        </Container>
    )
}
export default Page;
