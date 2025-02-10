
import { Explore, Skin, Card, Card0, Facas, Imagem, SpanYellow, SpanRed, SpanBlue, SpanRose, Link} from "./CardsStyled";
import { Want, PP,Botao, Facas0, Imagem0, Card01, Kianda  } from "./modalStyled";
import { useState } from "react";
// import { CadaCard } from "./CadaCard";
 
export function Skins(){
    const [isModal, setIsModal]=useState(false)
    
    function OpenModal(){
        setIsModal(true)
    }
    function CloseModal(){
        setIsModal(false)
    }

    
    const [isModal1, setIsModal1]=useState(false)
    
    function OpenModal1(){
        setIsModal1(true)
    }
    function CloseModal1(){
        setIsModal1(false)
    }
    const [isModal2, setIsModal2]=useState(false)
    
    function OpenModal2(){
        setIsModal2(true)
    }
    function CloseModal2(){
        setIsModal2(false)
    }
    const [isModal3, setIsModal3]=useState(false)
    
    function OpenModal3(){
        setIsModal3(true)
    }
    function CloseModal3(){
        setIsModal3(false)
    }
    const [isModal4, setIsModal4]=useState(false)
    
    function OpenModal4(){
        setIsModal4(true)
    }
    function CloseModal4(){
        setIsModal4(false)
    }
    const [isModal5, setIsModal5]=useState(false)
    
    function OpenModal5(){
        setIsModal5(true)
    }
    function CloseModal5(){
        setIsModal5(false)
    }
    const [isModal6, setIsModal6]=useState(false)
    
    function OpenModal6(){
        setIsModal6(true)
    }
    function CloseModal6(){
        setIsModal6(false)      
    }

    const [isModal7, setIsModal7]=useState(false)
    
    function OpenModal7(){
        setIsModal7(true)
    }
    function CloseModal7(){
        setIsModal7(false)
    }

    const [isModal8, setIsModal8]=useState(false)
    
    function OpenModal8(){
        setIsModal8(true)
    }
    function CloseModal8(){
        setIsModal8(false)
    }

    const [isModal9, setIsModal9]=useState(false)
    
    function OpenModal9(){
        setIsModal9(true)
    }
    function CloseModal9(){
        setIsModal9(false)
    }

    const [isModal10, setIsModal10]=useState(false)
    
    function OpenModal10(){
        setIsModal10(true)
    }
    function CloseModal10(){
        setIsModal10(false)
    }
    const [isModal11, setIsModal11]=useState(false)
    
    function OpenModal11(){
        setIsModal11(true)
    }
    function CloseModal11(){
        setIsModal11(false)
    }
    const [isModal12, setIsModal12]=useState(false)
    
    function OpenModal12(){
        setIsModal12(true)
    }
    function CloseModal12(){
        setIsModal12(false)
    }
    const [isModal13, setIsModal13]=useState(false)
    
    function OpenModal13(){
        setIsModal13(true)
    }
    function CloseModal13(){
        setIsModal13(false)
    }
    const [isModal14, setIsModal14]=useState(false)
    
    function OpenModal14(){
        setIsModal14(true)
    }
    function CloseModal14(){
        setIsModal14(false)
    }

        
    return(
        <>
            <Skin>
                <Card0 onClick={OpenModal} >
                    <Imagem src="src/assets/img/faca bowie.png" alt="" />
                    <Facas>
                        <p> <SpanYellow>Facas</SpanYellow> | Faca Bowie </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card0>
                {/* <CadaCard /> */}

                <Card onClick={OpenModal1}>
                    <Imagem src="src/assets/img/Faca de Caça.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Facas</SpanYellow>| Faca de Caça</p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal2}>
                    <Imagem src="src/assets/img/pngwing.com.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Facas</SpanYellow> | Punhal Spider  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal3} >
                    <Imagem src="src/assets/img/revolver Dino.png" alt=""/>
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed> | Dino </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card onClick={OpenModal4}>
                    <Imagem src="src/assets/img/Revolver On Fire.png" alt="" />
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | On Fire  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal5}>
                    <Imagem src="src/assets/img/revolver PT900.png" alt="" />
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | Raibow Die </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal6}>
                    <Imagem src="src/assets/img/Rifle Counter Strike.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Counter Strike </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
                <Card onClick={OpenModal7}>
                    <Imagem src="src/assets/img/Rifle Voltaic.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Voltaic </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card onClick={OpenModal8}>
                    <Imagem src="src/assets/img/Sabre Purple.png" alt="" />
                    <Facas>
                        <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal9}>
                    <Imagem src="src/assets/img/revolver PT900.png" alt=""/>
                    <Facas>
                        <p><SpanRed>Revolver</SpanRed>  | Raibow Die  </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal10}>
                    <Imagem src="src/assets/img/Rifle Aqua Marine.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  |  Aqua Marine   </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card> 

                <Card onClick={OpenModal11}>
                    <Imagem src="src/assets/img/Rifle Golden Queen.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Golden Queen </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>

            <Skin>
                <Card onClick={OpenModal12} >
                    <Imagem  src="src/assets/img/Rifle RTX800.png" style={{margin:'10px 0'}} alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | RTX800 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal13}>
                    <Imagem src="src/assets/img/Rifle Xtrike 90.png" alt="" />
                    <Facas>
                        <p><SpanBlue>Refle</SpanBlue>  | Xtrike 66 </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>

                <Card onClick={OpenModal14}>
                    <Imagem  src="src/assets/img/Balas Golden Balas.png" alt="" />
                    <Facas>
                        <p><SpanRose>Outros</SpanRose> | Balas </p>
                        <p>0.89998872</p>
                    </Facas>
                </Card>
            </Skin>


            <Explore>
                <Link href="modal.tsx" target="_blank"><p>Explore mais CS-Skins</p></Link>
            </Explore>

            {/* Estado 1 */}
            { isModal ? (
                <Kianda>

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
                </Kianda>
            ): null}

            {/* Estado 2 */}
            { isModal1 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Faca de Caça.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Facas</SpanYellow> | Faca de Caça</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal1}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

            {/* Estado 3 */}
            { isModal2 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/pngwing.com.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Facas</SpanYellow> | Punhal Spider  </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal2}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

           {/* Estado 4 */}
           { isModal3 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/revolver Dino.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanRed>Revolver</SpanRed> | Dino </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal3}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}
         
              {/* Estado 5 */}
              { isModal4 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Revolver On Fire.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanRed>Revolver</SpanRed>  | On Fire </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal4}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

           {/* Estado 6 */}
           { isModal5 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/revolver PT900.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanRed>Revolver</SpanRed>  | Raibow Die </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal5}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

           {/* Estado 7 */}
           { isModal6 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle Counter Strike.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanBlue>Refle</SpanBlue>  | Counter Strike  </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal6}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

              {/* Estado 8 */}
              { isModal7 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle Voltaic.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Facas</SpanYellow> | Punhal Spider  </p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal7}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

           {/* Estado 9 */}
           { isModal8 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Sabre Purple.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal8}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

            {/* Estado 10 */}
           { isModal9 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/revolver PT900.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanRed>Revolver</SpanRed>  | Raibow Die</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal9}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

            {/* Estado 11 */}
           { isModal10 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle Aqua Marine.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal10}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

          {/* Estado 12 */}
          { isModal11 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle Golden Queen.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanBlue>Refle</SpanBlue>  | Golden Queen</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal11}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

            {/* Estado 13 */}
           { isModal12 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle RTX800.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal12}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

         {/* Estado 14 */}
         { isModal13 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Rifle Xtrike 90.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal13}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}

            {/* Estado 15 */}
            {isModal14 ? (
                <Want>
                    <Card01>     
                        <Imagem0  src="src/assets/img/Balas Golden Balas.png" alt=""  />
                    </Card01>                
                        <Facas0>
                            <p><SpanYellow>Faca</SpanYellow>  | Purple RTX90</p>
                            <p>0.89998872</p>
                            <PP>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero atque expedita, 
                                culpa labore eum doloremque sit mollitia dolor perspiciatis repellat quas commodi, impedit 
                                delectus repudiandae accusamus perferendis in facilis.
                            </PP>
                            <Botao onClick={CloseModal14}>
                                Close Modal
                            </Botao>    
                        </Facas0>
                </Want>
            ): null}
        </>
    )

}