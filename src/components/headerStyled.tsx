import styled from "styled-components";



export const StyledHeader = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

@media screen and (min-width: 360px) and (max-width: 600px){
  /* width: 350px; */
  /* background-color: yellow; */
  display: flex;
  /* justify-content: space-around; */
  /* gap: 20px; */
  }
`
export const Titulo1 = styled.h1`
  height: 43px;
  font-weight: 400;
  font-size: 36px;
  line-height: 43.2px;
  background: linear-gradient(90deg, #1D00FF 0%, #E40DE9 50%, #FF5C00 100%);
  background-clip: text; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  font-family: '';
  font-size: 2rem;

  /* @media screen and (min-width: 360px) and (max-width: 600px){
    font-size: 26px;
  } */
`
export const Titulo2 = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #E4E4E7;

  @media screen and (min-width: 360px) and (max-width: 600px){
    /* font-size: 14px; */
  }
`
export const Cadastrar = styled.div`
  width: 168px;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 10px;
  background-color:#2D2D33;
  cursor: pointer;

  @media screen and (min-width: 360px) and (max-width: 600px){
    /* background-color:; */
    width: 180px;
    gap: 2px;
  }
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
` 
export const Home = styled.div`
  width: 1190px;
  height: 1417px;
  border-radius: 10px;
  padding: 0 30px;
  align-items: center;
  background-color:#2D2D33;
  margin-bottom: 40px;
`

export const Searcher = styled.div`
  width:96.5%;
  align-items: center;
  padding: 20px 20px 10px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Box = styled.div`
  width: 403px;
  height: 40px;
  background-color: #78787880;
  display: flex;
  gap: 15px;
  padding-left: 20px;
  color: snow;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease;

  
  &:hover{
    box-shadow: 0px 0px 18px 0px #FFFFFF42 inset;
    border:solid 1px #FFFFFF;
   
  }
`
export const Pesquisa = styled.input`
  background-color: transparent;
  color:  #1E1E1E;
  height: 40px;
  width: 100%;
  border: none;
  display: flex;
  outline: none;


  &::placeholder{
    color:#1E1E1E;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    
    &::placeholder{
      color:#FFFFFF;
    }
  }
`

export const Default = styled.div`
  display: flex; 
  gap: 40px;
`
export const Categorias = styled.div`
  color:  #787878;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  align-items: center;
  display: flex;
  gap: 5px;
  cursor: pointer;

  &:nth-child(1){
    color:#E4E4E7;
  }
  &:hover{
    color:#E4E4E7;
    transition: all 200ms ease-in-out;
  }
`

export const Crescente = styled.div`
  width:153px ;
  height: 121px;
  padding: 7px 12px;
  background-color: #1E1E1E;
  color: #787878;
  box-shadow: 0px 0px 2px 0px #FFFFFF40;
  position: absolute;
  border-radius: 10px;
  right: 190px;
  top:140px;
  display: grid;
`

export const Decrescente = styled.div`
  width: 133px;
  height: 18px;
  font-weight: 400;
  line-height: 38px;
  padding-bottom: 7px;
  font-size: 17px;
  color: #787878;
  display: flex;
  margin: auto;
  align-items: center;
  border-bottom: solid 1px;
`
export const All = styled.div`
  width: 138px;
  margin: auto;
  height: 38px;
  font-size: 12px;
  border-radius: 4px;
`
export const Lost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Real = styled.div`
  width: 62px;
  height: 24px;
  display: flex;
  justify-content: center;
  text-align: center;
  color:  #FFFFFF;
  align-items: center;
  border-radius: 4px;
  background-color: #2D2D33;

`
export const Rh = styled.span`
  color: #787878;

`
export const Line = styled.div`
  width: 1130px;
  display: flex;
  margin: 0 auto;
  border-top: solid 1.5px #535356;
  justify-content: center;
`
export const Footer = styled.footer`
  width: 267px;
  height: 100px;
  color:  #FFFFFF;
  font-size: 16px;
  margin: auto ;
  line-height: 40px;
  padding-top: 10px;  
`
export const Media = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
`

