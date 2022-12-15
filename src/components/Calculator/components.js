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

export const HideHistoryButton = styled.button`
  background: ${({ theme }) => theme.keyBackground};
  max-height: 60px;
  margin: 10% 0;
  max-width: 60px;
  font-size: 1rem;
  border-width: 1px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: -20px;
`;
