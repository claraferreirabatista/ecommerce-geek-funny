import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;

const Table = styled.table`
  width: 90%;
  max-width: 700px;
  border-collapse: collapse;
  margin: 20px 0;
`;

const THead = styled.thead`
  background-color: #333;
  color: white;
`;

const TBody = styled.tbody`
  background-color: #ddd;
`;

const TFoot = styled.tfoot`
  background-color: #333;
  color: white;
`;

const TH = styled.th`
  padding: 10px;
  border: 1px solid #333;
`;

const TD = styled.td`
  padding: 10px;
  border: 1px solid #333;
  text-align: center;
`;

const Total = styled.td`
  font-weight: bold;
`;

export {
  TableContainer,
  Table,
  THead,
  TBody,
  TFoot,
  TH,
  TD,
  Total,
};
