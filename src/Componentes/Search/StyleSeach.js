import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;

`;

export const SearchInput = styled.input`
  height: 40px;
  width: 80%;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 20%;
  border-radius: 75px;
  border: none;
  background-color:#301E4E;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border: 2px bold #000000;
    background-color: #7761E2;
  }


`;
