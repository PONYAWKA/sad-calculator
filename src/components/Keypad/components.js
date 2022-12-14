import styled from "styled-components";

export const KeypadContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  margin: 10px 0;
`;

export const KeypadButton = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 32px;
  cursor: pointer;
  color: ${(props) => props.curTheme.textColor};
  margin: 15px 0;
  background: ${(props) => props.curTheme.keyBackground};
  border: 1px solid #707070;
  font: normal normal normal 64px/77px "Kanit", sans-serif;
  &:hover {
    background: darkgray;
  }
  @media (max-width: 851px) {
    font-size: 32px;
    border-radius: 16px;
    width: 70px;
    height: 70px;
  }
`;
