import styled from "styled-components";

export const DisplayInfo = styled.div`
  text-align: right;
  font-size: 3rem;
  color: ${({ theme }) => theme.textColor};
  padding-right: 40px;
`;
export const DisplayContainer = styled.div`
  max-width: 72vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 100px;
  margin: 5px auto;
  width: 90%;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
  border-bottom: 2px solid ${({ theme }) => theme.underline};
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: gainsboro;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DispalyAnswer = styled.div`
  display: flex;
  justify-content: end;
`;
