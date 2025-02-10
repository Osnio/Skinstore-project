import { Card0, Imagem, Facas, SpanYellow, SpanRose,   } from "./CardsStyled"
import {  Want, Card01, Facas0, Imagem0, PP, Botao } from "./modalStyled"
import { useState } from "react"

export function CadaCard(){
      const [isModal, setIsModal]=useState(false)
        
        function OpenModal(){
            setIsModal(true)
        }
        function CloseModal(){
            setIsModal(false)
        }
    return(
        <>
            <Card0 onClick={OpenModal} >
                <Imagem src="src/assets/img/faca bowie.png" alt="" />
                <Facas>
                    <p> <SpanYellow>Facas</SpanYellow> | Faca Bowie </p>
                    <p>0.89998872</p>
                </Facas>
            </Card0>

            { isModal ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/faca bowie.png" alt=""  />
                    </Card01>                
                    <Facas0>
                        <p><SpanRose> Faca</SpanRose> | Faca Bowie </p>
                        <p>0.89998872</p>
                        <PP>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                            culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                            delectus repudiandae accusamus perferendis in facilis.
                        </PP>
                            <Botao onClick={CloseModal}>
                                Close Modal
                            </Botao>    
                    </Facas0>
                </Want>
                            
            ): null}
        </>
    )
}