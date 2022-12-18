import React from "react";
import { Themes } from "../../../constants/themes";
import { ThemeContext } from "../../../utils/ThemeContext";
import { SettingSubTitle, ThemeSwitcher } from "../components";

export class ThemeSelectorCL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <>
            <SettingSubTitle>Switch theme</SettingSubTitle>
            <ThemeSwitcher onChange={toggleTheme} value={theme.name} id="theme">
              {Themes.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </ThemeSwitcher>
          </>
        )}
      </ThemeContext.Consumer>
    );
  }
}
