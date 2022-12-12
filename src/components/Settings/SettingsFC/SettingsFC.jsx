import {
  ClearHistoryButton,
  SettingContent,
  SettingsBody,
  SettingTitle,
} from "../components";
import { ThemeSelector } from "./ThemeSelectorFC";

export const Settings = () => {
  return (
    <SettingsBody>
      <SettingContent>
        <SettingTitle>Settings</SettingTitle>
        <ThemeSelector />
        <ClearHistoryButton>Clear All History</ClearHistoryButton>
      </SettingContent>
    </SettingsBody>
  );
};
