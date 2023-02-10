import styled from "styled-components";

export const StyledCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1em;
padding: 2em;
`
export const StyleBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 3em;
margin-top: 15px;
text-align: center;
`;

export const StyledSelect = styled.select`
min-width: 200px
padding: 10px;
font-size: 14px;
font-family: sans-serif;
border-radius: 5px;
border: 1px solid #ccc;
text-align: center;
`;

export const HomeButton = styled.button`
margin: 25px;
background-color: #7A02FC;
color: #ffffff;
padding: 8px 16px;
border-radius: 5px;
font-weight: bold;
border: none;
cursor: pointer;
font-size: 14px;

&:hover {
    border: 2px bold #000000;
    background-color: #7761E2;
  }`
