import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.width[0]}px;
  }
  max-height: ${({ theme }) => theme.height[5]}vh;
`;

export const HistoryInfo = styled.h3`
  padding-left: ${({ theme }) => theme.space[2]}px;
`;
export const HistoryTitle = styled.h3`
  text-align: center;
`;

export const HistoryTie = styled.div`
  margin: ${({ theme }) => theme.space[1]}px 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[2]}rem;
  word-wrap: break-word;
`;
export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${({ theme }) => theme.underline};
  min-width: ${({ theme }) => theme.width[6]}px;
  max-width: ${({ theme }) => theme.width[1]}vw;
  margin-top: ${({ theme }) => theme.space[1]}px;
`;
