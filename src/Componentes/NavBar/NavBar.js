import { Link } from "react-router-dom"
import styled from "styled-components"
import{ StyleNav, StyleList, StyleLine } from "./StyleNavBar"

export const StyledLink = styled(Link)`
color: #F1F1F1`


const NavBar = () => {
  return (
    <StyleNav>
      <StyleList>
        <StyleLine>
          <StyledLink to="/">Home</StyledLink>
        </StyleLine>
        <StyleLine>
          <StyledLink to="/Cart">Carrinho</StyledLink>
        </StyleLine>
      </StyleList>
      </StyleNav>
  )
}
export default NavBar
