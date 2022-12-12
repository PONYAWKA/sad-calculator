import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  max-height: 100px;
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.textcolor}
  border: 1px solid #707070;
  font-family: "Kanit", sans-serif;
`;

export const HeaderTitle = styled.h1`
  color: #b5b5b5;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(Link)`
  margin: 0 15px;
  font-size: 20px;
  color: #b5b5b5;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
