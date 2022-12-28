import styled from "styled-components";

export const DisplayInfo = styled.div`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize[3]}rem;
  color: ${({ theme }) => theme.textColor};
  padding-right: ${({ theme }) => theme.space[4]}px;
`;
export const DisplayContainer = styled.div`
  max-width: 72vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: ${({ theme }) => theme.height[7]}px;
  margin: 5px auto;
  width: ${({ theme }) => theme.width[5]}%;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
  border-bottom: 2px solid ${({ theme }) => theme.underline};
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.width[0]}px;
  }
  
  &::-webkit-scrollbar-track {
    background: gainsboro;
    border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  }
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[0]}rem;
  }
`;

export const DispalyAnswer = styled.div`
  display: flex;
  justify-content: end;
`;
