import React from 'react';


import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent/index';


import { Container } from './styles'
import UniqueOverlay from '../UniqueOverlay/index';


const Page: React.FC = () => {
    let descriptions = [
        "Com o mais novo acelerador via c#, você só acelera enquanto tiver c# pra aperta",
        "a queridinha de quem quer viver da sua arte",
        "o carro mais brabo do brasil",
        "sonho de todo moleque que recem tira a carteira"]
    return (
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
                                    description="Enquanto uns dirigem carros, Eles dirigem lendas "
                                />
                            }
                        />
                    ))}

                </div>
                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    )
}
export default Page;
