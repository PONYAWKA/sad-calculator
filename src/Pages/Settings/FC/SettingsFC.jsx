import React from "react";
import { useDispatch } from "react-redux";
import { clearHistoy } from "@/store/actions/actions";
import {
  ClearHistoryButton,
  SettingContent,
  SettingsBody,
  SettingTitle,
} from "components/Settings/styled";
import { ThemeSelectorFC } from "components/Settings/ThemeSelectorFC/index";

export const SettingsFC = () => {
  const dispatch = useDispatch();
  const clearHistoryHandler = () => dispatch(clearHistoy());
  return (
    <SettingsBody>
      <SettingContent>
        <SettingTitle>Settings</SettingTitle>
        <ThemeSelectorFC />
        <ClearHistoryButton onClick={clearHistoryHandler} id="clear">
          Clear All History
        </ClearHistoryButton>
      </SettingContent>
    </SettingsBody>
  );
};
