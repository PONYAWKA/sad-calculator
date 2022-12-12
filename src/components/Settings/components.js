import styled from "styled-components";

export const SettingContent = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  max-width: 300px;
  color: ${({ theme }) => theme.textColor};
`;
export const SettingTitle = styled.h3`
  text-align: center;
`;
export const SettingSubTitle = styled.div`
  font-size: 1rem;
`;
export const ThemeSwitcher = styled.select`
  padding: 20px 0;
  text-align: center;
  font-size: 2rem;
  background: ${({ theme }) => theme.keyBackground};
  color: ${({ theme }) => theme.textColor};
  border-radius: 10px;
  outline: none;
  &::after {
    content: "some Text";
    position: absolute;
  }
`;
export const ClearHistoryButton = styled.button`
  padding: 20px 0;
  margin-top: 30px;
  font-size: 2rem;
  border-radius: 10px;
  border-width: 1px;
  background: ${({ theme }) => theme.keyBackground};
  color: ${({ theme }) => theme.textColor};
  &:active {
    background-color: grey;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SettingsBody = styled.div`
  background: ${({ theme }) => theme.background};
  height: 100%;
`;
