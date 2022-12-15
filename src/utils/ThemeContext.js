import { createContext } from "react";
import { GlobalTheme } from "../constants/themes";

export const ThemeContext = createContext({
  theme: GlobalTheme.light,
  toggleTheme: () => {},
});
