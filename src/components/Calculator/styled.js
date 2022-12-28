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
  color: ${({ theme }) => theme.textColor};
  max-height: ${({ theme }) => theme.height[4]}px;
  margin: ${({ theme }) => theme.space[1]}% 0;
  max-width: ${({ theme }) => theme.width[3]}px;
  font-size: ${({ theme }) => theme.fontSize[0]}rem;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  overflow: hidden;
`;
