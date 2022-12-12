import styled from "styled-components";

export const DisplayInfo = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.textColor};
  padding-right: 40px;
  font: normal normal normal 64px/77px "Kanit", sans-serif;
`;
export const DisplayContainer = styled.div`
  justify-content: end;
  margin: 5px auto;
  width: 90%;
  border-bottom: 2px solid ${({ theme }) => theme.underline};
`;
