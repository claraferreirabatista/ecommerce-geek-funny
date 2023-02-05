import styled from "styled-components";

export const FooterConteiner = styled.footer`
display: flex;
justify-content: space-between;
background-color: #222;
padding: 1em;
`

export const Icons = styled.div`
  display: flex;
gap:20px;
  @media (max-width: 700px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

export const TextFooter = styled.h4`
padding: 0 0 20px;
  text-align: right;
  color: #F1F1F1;
  @media (max-width: 700px) {
    text-align: center;
  }
`
/* export const FooterConteiner = styled.footer`
position: fixed;
bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #222;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 20px;
  @media (max-width: 700px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

export const TextFooter = styled.h3`
  text-align: right;
  color: #F1F1F1;
  padding: 20px;
  @media (max-width: 700px) {
    text-align: center;
  } */