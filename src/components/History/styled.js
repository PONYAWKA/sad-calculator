import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  max-height: 80vh;
`;

export const HistoryInfo = styled.h3`
  padding-left: 15px;
`;
export const HistoryTitle = styled.h3`
  text-align: center;
`;

export const HistoryTie = styled.div`
  margin: 5px 10px;
  text-align: center;
  font-size: 2rem;
  word-wrap: break-word;
`;
export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${({ theme }) => theme.underline};
  min-width: 200px;
  max-width: 20vw;
  margin-top: 10px;
`;
