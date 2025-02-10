import { Plus, Search, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react"
import { 
    Titulo1, Titulo2, StyledHeader, Cadastrar,Container,Home,Footer, Media, Pesquisa, Searcher,  
    Default, Box, Categorias, Crescente, Decrescente, Lost, Real, Rh, All, Line 
} from "./headerStyled"
import { useState } from "react"
import { Want, Card01, Botao, CadastrarSkin, BotoesSkins,FacasCadastro, DivSkins,Colecionador,Selector, Opcao, TituloSkin, ComentSkin } from "./modalStyled"
import { Skins } from "./Cards"


export function Header0(){

    const[isPreco, setIsPreco]= useState(false)


    const[isCadastrar, setIsCadastrar]= useState(false)

    function OpenCadastro(){
        setIsCadastrar(true)
    }
    function CloseCadastro(){
        setIsCadastrar(false)
    }
    
    return(
        <>
            <StyledHeader>
                <Titulo1>SKINSTORE</Titulo1>
                <Cadastrar>
                    <Plus width={'15px'} onClick={OpenCadastro} />
                    <Titulo2 onClick={OpenCadastro} >Cadastrar CS-Skin</Titulo2> 
                </Cadastrar>
            </StyledHeader>
            <Container>
                <Home>
                    <Searcher>
                        <Box>
                            <Search width={'24px'} cursor={'Pointer'} />
                            <Pesquisa placeholder="busque por uma skin..." type="search"  ></Pesquisa>
                        </Box>
                        
                        <Default>
                            <Categorias>
                                <p>Default</p>
                            </Categorias>
                            <Categorias>
                                <p>Categórias</p>
                            </Categorias>
                            <Categorias>
                                <ArrowDownWideNarrow onClick={()=>setIsPreco(!isPreco)} width={'24px'}  />
                                <p onClick={()=>setIsPreco(!isPreco)} >Preço</p>
                            </Categorias>
                            <Categorias>
                                < ArrowUpNarrowWide width={'24px'} />
                                <p>Float</p>
                            </Categorias>
                        </Default>
                    </Searcher>
                    <Line></Line>
                    {isPreco ?(
                        <Crescente >
                            <Decrescente>
                                <ArrowDownWideNarrow width={'24px'}  />
                                <p>Crescente</p>
                            </Decrescente>
                            <Decrescente>
                                < ArrowUpNarrowWide width={'24px'} />
                                <p>Decrescente</p>
                            </Decrescente>
                            <All>
                                <Lost>
                                    <p>De</p>
                                    <p>Para</p>
                                </Lost>
                                <Lost>
                                    <Real>
                                        <p> <Rh>R$</Rh> 0.00</p>
                                    </Real>
                                        <p>:</p>
                                    <Real>
                                        <p> <Rh>R$</Rh> 1000.00</p>
                                    </Real>
                                </Lost>
                            </All>
                        </Crescente>
                    ): null}
                    
                <Skins />
                </Home>
            </Container>
            { isCadastrar ? (
                <Want>
                    <Card01>    
                        <CadastrarSkin type="file" required name="" id="" /> 
                    </Card01>                
                        <FacasCadastro>
                            <DivSkins>
                                <Colecionador>
                                    <Selector name="Tipo de Skin" required  id="">
                                        <Opcao value="">Nenhum</Opcao>
                                        <Opcao value="">Faca</Opcao>
                                        <Opcao value="">Revolver</Opcao>
                                        <Opcao value="">Refle</Opcao>
                                        <Opcao value="">Outro</Opcao>
                                    </Selector>
                                </Colecionador>

                                <Colecionador>
                                    <TituloSkin placeholder="Nome da Skin" required type="text"/>
                                </Colecionador>
                            </DivSkins>
                            <Colecionador>
                                <TituloSkin placeholder="Preço da Skin" required type="number" />
                            </Colecionador>

                            <ComentSkin type="text"/>
                            
                            <BotoesSkins>
                                <Botao onClick={CloseCadastro}>
                                    Close Cadastro
                                </Botao>

                                <Botao type="submit">
                                    Cadastrar uma Skin
                                </Botao> 
                            </BotoesSkins>
                        </FacasCadastro>
                </Want>
            ): null}
            <Footer>
                <Media>
                    <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                        <img src="src/assets/img/facebook.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                        <img src="src/assets/img/linkedIn.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/osvaniolopes/" target="_blank">
                        <img src="src/assets/img/instagram.png" alt="" />
                    </a>
                </Media>
                <p>Osvânio De Castro, All Rights Reserved </p>
            </Footer>
            
            
        </>
    )
}