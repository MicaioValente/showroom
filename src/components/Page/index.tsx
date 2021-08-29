import React from 'react';


import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';


import { Container} from './styles'


const Page: React.FC = () => {
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {/* isso percorre cada elemento do meu array e parra um html pra cada um no caso  */}
                    {[
                        'Model one',
                        'Model two',
                        'Model Three',
                        'Model Four',
                    ].map(modelName => (
                        
                    <ModelSection
                    key={modelName}
                    className="colored"
                    modelName={modelName}
                    overlayNode={
                        <DefaultOverlayContent
                        //É o texto que aparece na tela como props
                        label={modelName}
                        description="ENQUANTO UNS DIRIGEM CARROS, EU DIRIGEM DE LENDAS"
                        />
                    }
                    />
                    ))}
                    
                </div>
            </ModelsWrapper>
        </Container>
    )
}
export default Page;
