import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[3]}px;
  max-height: ${({ theme }) => theme.height[6]}px;
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.textcolor};
  border: 1px solid #707070;
  font-family: "Kanit", sans-serif;
`;

export const HeaderTitle = styled.h1`
  color: #b5b5b5;
`;
export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(Link)`
  margin: 0 ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSize[1]}rem;
  color: #b5b5b5;
  text-decoration: ${(props) => props._isactive};
  &:hover {
    color: red;
  }
`;
