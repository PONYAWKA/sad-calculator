import React from "react";
import {
  ClearHistoryButton,
  SettingContent,
  SettingsBody,
  SettingTitle,
} from "components/Settings/components";
import { clearHistoy } from "@/store/actions/actions";
import { connect } from "react-redux";
import { ThemeSelectorCL } from "components/Settings/ThemeSelectorCL/ThemeSelectorCL";
class SettingsCL extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch } = this.props;
    const clearHistoryHandler = () => dispatch(clearHistoy());
    return (
      <SettingsBody>
        <SettingContent>
          <SettingTitle>Settings</SettingTitle>
          <ThemeSelectorCL />
          <ClearHistoryButton onClick={clearHistoryHandler} id="clear">
            Clear All History
          </ClearHistoryButton>
        </SettingContent>
      </SettingsBody>
    );
  }
}

export default connect()(SettingsCL);
