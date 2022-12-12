import styled from "styled-components";

export const CalculatorBody = styled.div`
  display: flex;
  grid-template-rows: 1fr 1fr;
  flex-direction: row;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;
export const ControlPanel = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;
