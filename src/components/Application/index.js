import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ROUTES } from "@/constants/routs";
import { GlobalTheme } from "constants/themes";
import { getStorageTheme, setStorageTheme } from "utils/localStorage";
import { ThemeContext } from "utils/ThemeContext";
import { ErrorBoundary } from "components/ErrorBoudaries";
import { Header } from "components/Header/index";
import { AppBody } from "components/Application/styled";
import { useToast } from "sad-toast-lib";
function App() {
  const [theme, setTheme] = useState(
    GlobalTheme(getStorageTheme()) ?? GlobalTheme("dark")
  );
  const { Toast, addToast } = useToast();
  const toggleTheme = (event) => {
    addToast({ duration: 0, type: "info" });
    const { value } = event.target;
    switch (value) {
      case "light":
        setStorageTheme("light");
        setTheme(GlobalTheme("light"));
        break;
      case "dark":
        setStorageTheme("dark");
        setTheme(GlobalTheme("dark"));
        break;
      case "colored":
        setStorageTheme("colored");
        setTheme(GlobalTheme("colored"));
        break;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <AppBody>
            <Header />
            <Routes>
              {ROUTES.map(({ component, path }) => (
                <Route path={path} element={component} key={path} />
              ))}
            </Routes>
          </AppBody>
        </ThemeProvider>
        <Toast />
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
