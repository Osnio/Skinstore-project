import styled from "styled-components";


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
    bottom: 1300px;
    background-color:  #2D2D33;
    
    &:hover{
    box-shadow: 4px 4px 4px 0px #C2F22D;
    transition: all 200ms ease-in-out;
  }
`
export const Card = styled.div`
  width: 251px;
  height: 276px;
  align-items: center;
  margin-top: 20px;
  background-color:  #212126;
  display: flex;
  cursor: pointer;
`
export const Facas = styled.div`
  width: 458px;
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
  width: 130px;
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
export const PP = styled.p`
    margin-top: 25px;
`
