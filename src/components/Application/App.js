import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HOME_PAGE_FC, SETTINGS } from "../../constants/routs";
import { GlobalTheme } from "../../constants/Themes";
import { ThemeContext } from "../../utils/ThemeContext";
import { CalculatorFC } from "../Calculator/CalculatorFC";
import { Header } from "../Header/Header";
import { Settings } from "../Settings/SettingsFC/SettingsFC";
import { AppBody } from "./components";

function App() {
  const [theme, setTheme] = useState(GlobalTheme.light);

  const toggleTheme = (event) => {
    const { value } = event.target;
    switch (value) {
      case "light":
        setTheme(GlobalTheme.light);
        break;
      case "dark":
        setTheme(GlobalTheme.black);
        break;
      case "colored":
        setTheme(GlobalTheme.colored);
        break;
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <AppBody>
            <Header />
            <Routes>
              <Route path={HOME_PAGE_FC} element={<CalculatorFC />} />
              <Route path={SETTINGS} element={<Settings />} />
            </Routes>
          </AppBody>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
