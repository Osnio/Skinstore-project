import styled from "styled-components";

export const Kianda = styled.div`
  width: 100%;
  height:100%;
  background-color: #000000c6;
  backdrop-filter: blur(5px);
`

export const Want = styled.div`
  width:  800px;
  height:  400px;
  display: flex;
  margin: auto;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  position: relative;
  bottom: 1200px;
  background-color:  #2D2D33;

 
  
  &:hover{
    box-shadow: 4px 4px 4px 0px #C2F22D;
    transition: all 200ms ease-in-out;
  }
`
export const Card01 = styled.div`
  width: 251px;
  height: 276px;
  align-items: center;
  margin-top: 20px;
  background-color:  #212126;
  display: flex;
  cursor: pointer;
`
export  const Imagem0 = styled.img`
  margin-top: 30px;
`
export const CadastrarSkin=styled.input`
  height: 268px;
  cursor: pointer;
  width: 245px;
  
 
`
export const Facas0 = styled.div`
  width: 360px;
  height: 153px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  text-align: justify;
  color: #FFFFFF;
  display: grid;
  gap: 4px;
  margin-top: -60px;
  padding-left: 15px;
 
`
export const Botao = styled.button`
  width: 140px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 15px;
  background-color: #78787880;
  color: #212126;
  
  transition: all 0.3s ease;

  &:hover{
    box-shadow: 0px 0px 18px 0px #FFFFFF42 inset;
    border:solid 1px #FFFFFF;
    color: #fff;
   
  }

`
export const BotoesSkins = styled.div`
  display: flex;
  gap: 20px;
`

export const PP = styled.p`
  margin-top: 25px;
`

// Estilo da div do cadastro
export const FacasCadastro = styled.div`
  width: 360px;
  height: 153px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  text-align: justify;
  color: #FFFFFF;
  display: grid;
  gap: 4px;

  margin-top: -80px;
  padding-left: 15px;
 
`
export const DivSkins = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 20px;
`
export const Colecionador= styled.div`
  background-color: #78787880;
  padding: 8px;
  width: 100px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 18px 0px #FFFFFF42 inset;
    border:solid 1px #FFFFFF;
   
  }

  &:nth-child(2){
    width: 155px;
  }
  
`

export const Selector=styled.select`
  outline: none;
  cursor: pointer;
  width: 100px;
  border: none;
  color: #fff;
  background-color: transparent;

  &:hover {
    color: #fff;
  }

`
export const Opcao=styled.option`
  background-color: #2D2D33;

`

export const TituloSkin = styled.input`
  width: 136px;
  border: none;
  background-color: transparent;
  outline: none;
  transition: all 0.3s ease;

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
export const ComentSkin=styled.input`
  height:100px ;
  outline: none;
  border: none;
  margin-top: 12px;
  border-radius: 4px;

`



