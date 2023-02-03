import styled from "styled-components";
import { corPrimaria, textoFundoClaro } from "./Variaveis";

export const Img = styled.img`
  height: 25px;
  width: 25px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
`;


export const StyleNav = styled.nav`
display: flex;
justify-content: end;
background-color: #222;
padding: 1em;

`
export const StyleList = styled.ul`
display: flex;
list-style:none;
justify-content: space-between;
`

export const StyleLine = styled.li`
margin-right: 1em;
color: #F1F1F1;
`
export const BoxList = styled.section`
display: flex;
justify-content: space-between;
background-color: #222;
padding: 1em;

`
export const Lista = styled.ul`
display: flex;
list-style:none;
align-items: center;
justify-content: right;
`

export const Item = styled.li`
margin-right: 1em;
color: #F1F1F1;
`
export const StyledCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1em;
padding: 2em;
`

export const CardConteiner = styled.div`
display: grid;
grid-template-rows: 3fr 1fr 0.5fr;
row-gap: 1em;
max-width: 80%;
background-color: #FFFFFF;
padding: 10px;
box-shadow: 5px 10px 18px #888888;
`

export const ImageCard = styled.img`
width: 100%;
height: 100%;
transition: transform 0.3s;
&:hover {
  transform: scale(1.1);
}
`

export const InfoCard = styled.div`
display: grid;
grid-template-rows: 2fr 1fr;
row-gap: 1em;
;`

export const NameCard = styled.h2`
text-align: center;
`
export const PriceCard = styled.p`
text-align: center;
`
export const CardButton = styled.button`
background-color: #5f9ea0;
color: #ffffff;
padding: 8px 16px;
border-radius: 5px;
text-transform: uppercase;
font-weight: bold;
border: none;
cursor: pointer;
font-size: 14px;

  &:hover {
    border: 2px bold #000000;
    background-color: #3f7d90;
  }

`;



