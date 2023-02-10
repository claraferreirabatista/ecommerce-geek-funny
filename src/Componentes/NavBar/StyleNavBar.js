import styled from "styled-components";
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export default px2vw;

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
export const Banner = styled.img`
width: 100%
`




