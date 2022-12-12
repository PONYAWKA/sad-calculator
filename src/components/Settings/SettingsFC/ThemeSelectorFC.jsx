import { Themes, GlobalTheme } from "../../../constants/Themes";
import { ThemeContext } from "../../../utils/ThemeContext";
import { SettingSubTitle, ThemeSwitcher } from "../components";

export const ThemeSelector = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <>
            <SettingSubTitle>Switch theme</SettingSubTitle>
            <ThemeSwitcher onChangeCapture={toggleTheme} defaultValue={theme}>
              {Themes.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </ThemeSwitcher>
          </>
        )}
      </ThemeContext.Consumer>
    </>
  );
};
