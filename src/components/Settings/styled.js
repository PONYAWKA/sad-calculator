import styled from "styled-components";

export const SettingContent = styled.div`
  margin-left: ${({ theme }) => theme.space[2]}px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize[2]}rem;
  max-width: ${({ theme }) => theme.width[7]}px;
  color: ${({ theme }) => theme.textColor};
`;
export const SettingTitle = styled.h3`
  text-align: center;
`;
export const SettingSubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize[1]}rem;
`;
export const ThemeSwitcher = styled.select`
  padding: ${({ theme }) => theme.space[2]}px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[2]}rem;
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
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[1]}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSize[2]}rem;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
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
