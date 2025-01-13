import { Want, Card,  Facas, PP, Botao } from "./modalStyled";
import {SpanRose, Imagem } from "./CardsStyled";

export function Modal(){
    return(
        <>
            <Want>
                <Card>     
                    <Imagem src="src/assets/img/Balas Golden Balas.png" alt="" />
                </Card>                
                    <Facas>
                        <p><SpanRose>Outros</SpanRose> | Balas </p>
                        <p>0.89998872</p>
                        <PP>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                            culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                            delectus repudiandae accusamus perferendis in facilis.
                        </PP>
                        <Botao>
                            Close Modal
                        </Botao>    
                    </Facas>
            </Want>
        </>
    )
}