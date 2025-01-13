import styled from "styled-components";


export const Skin = styled.div`
  display: flex;
  gap: 40px;
`
export const Card = styled.div`
  width: 251px;
  height: 276px;
  align-items: center;
  margin-top: 20px;
  background-color:  #212126;
  cursor: pointer;

  &:hover{
    box-shadow: 4px 4px 4px 0px #C2F22D;
    transition: all 200ms ease-in-out;
  }
`
export const Card0 = styled.div`
  width: 251px;
  height: 276px;
  align-items: center;
  margin-top: 20px;
  background-color:  #212126;
  cursor: pointer;
  

  &:hover{
    box-shadow: 4px 4px 4px 0px #C2F22D;
    transition: all 200ms ease-in-out;
  }
  &:nth-child(1){
    box-shadow: 4px 4px 4px 0px #C2F22D;

  }
`

export const Imagem = styled.img`
  margin-top: 20px;
`
export const Facas = styled.div`
  width: 158px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  color: #FFFFFF;
  height: 53px;
  margin-top: 20px;
  padding-left: 15px;
 
`
export const SpanYellow = styled.span`
  font-size: 20px;
  color: #C2F22D;
`
export const SpanRed = styled.span`
  font-size: 20px;
  color: #FF5C00;
`
export const SpanBlue = styled.span`
  font-size: 20px;
  color:#1D00FF;
`
export const SpanRose = styled.span`
  font-size: 20px;
  color: #E40DE9;
`

export const Explore = styled.div`
  width: 300px;
  height: 66px;
  border-radius: 10px;
  background-color: #FF5C0063;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover{
    background-color:#FF5C00;
    transition: all 200ms ease-in-out;
  }
`