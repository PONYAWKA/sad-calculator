import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  isplay: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  max-height: 100px;
  background: gray;
  color: white;
  border: 1px solid #707070;
  font-family: "Kanit", sans-serif;
`;

export const HeaderTitle = styled.h1`
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
  text-decoration: none;
  color: white;
  &:hover {
    color: red;
  }
`;
