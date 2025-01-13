import { Plus, Search, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react"
import { 
    Titulo1, Titulo2, StyledHeader, Cadastrar,Container,Home,Footer, Media, Pesquisa, Searcher,  
    Default, Box, Categorias, Crescente, Decrescente, Lost, Real, Rh, All, Line 
} from "./headerStyled"

import { Skins } from "./Cards"

export function Header0(){
    return(
        <>
            <StyledHeader>
                <Titulo1>SKINSTORE</Titulo1>
                <Cadastrar>
                    <Plus width={'15px'}  />
                    <Titulo2>Cadastrar CS-Skin</Titulo2> 
                </Cadastrar>
            </StyledHeader>
            <Container>
                <Home>
                    <Searcher>
                        <Box>
                            <Search width={'24px'} cursor={'Pointer'} />
                            <Pesquisa placeholder="busque por uma skin..."  ></Pesquisa>
                        </Box>
                        
                        <Default>
                            <Categorias>
                                <p>Default</p>
                            </Categorias>
                            <Categorias>
                                <p>Categórias</p>
                            </Categorias>
                            <Categorias>
                                <ArrowDownWideNarrow width={'24px'}  />
                                <p>Preço</p>
                            </Categorias>
                            <Categorias>
                                < ArrowUpNarrowWide width={'24px'} />
                                <p>Float</p>
                            </Categorias>
                        </Default>
                    </Searcher>
                    <Line></Line>
                    <Crescente>
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
                <Skins />
                </Home>
            </Container>
               
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