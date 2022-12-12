import { createContext } from "react";
import { GlobalTheme } from "../constants/Themes";

export const ThemeContext = createContext({
  theme: GlobalTheme.light,
  toggleTheme: () => {},
});
