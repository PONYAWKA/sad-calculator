import React from "react";
import { useDispatch } from "react-redux";
import { clearHistoy } from "../../../store/actions/actions";
import {
  ClearHistoryButton,
  SettingContent,
  SettingsBody,
  SettingTitle,
} from "../components";
import { ThemeSelector } from "./ThemeSelectorFC";

export const Settings = () => {
  const dispatch = useDispatch();
  const clearHistoryHandler = () => dispatch(clearHistoy());

  return (
    <SettingsBody>
      <SettingContent>
        <SettingTitle>Settings</SettingTitle>
        <ThemeSelector />
        <div style={{ overflow: "hidden" }}>
          <ClearHistoryButton onClick={clearHistoryHandler}>
            Clear All History
          </ClearHistoryButton>
        </div>
      </SettingContent>
    </SettingsBody>
  );
};
