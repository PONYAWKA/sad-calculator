import styled from "styled-components";

export const ErrorBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
`;
