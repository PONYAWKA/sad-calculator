import styled from "styled-components";

export const HistoryContainer = styled.div`
  border-left: 3px solid gray;
  display: flex;
  min-width: 200px;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
  &::-webkit-scrollbar {
    width: 10px;
  }
`;

export const HistoryInfo = styled.h3`
  padding-left: 15px;
`;
export const HistoryTitle = styled.h3`
  text-align: center;
`;

export const HistoryTie = styled.div`
  max-height: 120px;
  margin: 0 10px;
  text-align: center;
  font-size: 2rem;
  word-wrap: break-word;
`;
