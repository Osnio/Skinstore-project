
import { Explore, Skin, Card, Card0, Facas, Imagem, SpanYellow, SpanRed, SpanBlue, SpanRose} from "./CardsStyled";



// interface SkinsProps{
//     CloseModal: () => void
//     OpenModal: () => void
// }
/*({ OpenModal}: SkinsProps)*/ 
export function Skins(){

    return(
        <>
            <Skin>
                <Card0 >
                    <Imagem src="src/assets/img/faca bowie.png" alt="" />
                    <Facas>
                        <p> <SpanYellow>Facas</SpanYellow> | Faca Bowie </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card0>

                <Card>
                    <Imagem src="src/assets/img/Faca de Caça.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Facas</SpanYellow>| Faca de Caça</p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/pngwing.com.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Facas</SpanYellow> | Punhal Spider  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card >
                    <Imagem src="src/assets/img/revolver Dino.png" alt=""/>
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed> | Dino </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card>
                    <Imagem src="src/assets/img/Revolver On Fire.png" alt="" />
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | On Fire  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/revolver PT900.png" alt="" />
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | Raibow Die </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/Rifle Counter Strike.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Counter Strike </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
                <Card>
                    <Imagem src="src/assets/img/Rifle Voltaic.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Voltaic </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card>
                    <Imagem src="src/assets/img/Sabre Purple.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/revolver PT900.png" alt=""/>
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | Raibow Die  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/Rifle Aqua Marine.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  |  Aqua Marine   </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card> 
                <Card>
                    <Imagem src="src/assets/img/Rifle Golden Queen.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Golden Queen </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card /*onClick={}*/ >
                    <Imagem  src="src/assets/img/Rifle RTX800.png" style={{margin:'10px 0'}} alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | RTX800 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem src="src/assets/img/Rifle Xtrike 90.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Xtrike 66 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card>
                    <Imagem  src="src/assets/img/Balas Golden Balas.png" alt="" />
                    <Facas>
                        <p><SpanRose>Outros</SpanRose> | Balas </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Explore>
                <p>Explore mais CS-Skins</p>
            </Explore>
        </>
    )

    
}