import styled from 'styled-components';

export const StyledCelltd = styled.td`
  text-align: center;
`;

export const StyledTr = styled.tr`
  height: 35px;
  color: #696969;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 16px;
  :nth-child(odd) {
    background-color: white;
  }
  :nth-child(even) {
    background-color: #dcdcdc;
  }
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  border-radius: 10px;
  border-color: #060606;
`;

export const StyledCell = styled.th`
  width: 166px;
  height: 40px;
  table-layout: fixed;
  padding: 0;
  font-size: 25px;
  color: white;
  background-color: #2d98f6;
`;
