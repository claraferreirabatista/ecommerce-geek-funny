import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
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
  background-color: lightblue;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
