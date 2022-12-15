import CalculatorCL from "../Pages/Calculator/CL/CalculatorCL";
import { CalculatorFC } from "../Pages/Calculator/FC/CalculatorFC";
import SettingsCL from "../Pages/Settings/CL/SettingsCL";
import { SettingsFC } from "../Pages/Settings/FC/SettingsFC";

export const HOME_PAGE_FC = "/fc";
export const HOME_PAGE_CL = "/cl";
export const SETTINGS_FC = "/settingsFC";
export const SETTINGS_CL = "/settingsCL";

export const PATHS = [
  {
    title: "HOME CL",
    path: HOME_PAGE_CL,
  },
  {
    title: "HOME FC",
    path: HOME_PAGE_FC,
  },
  {
    title: "Settings FC",
    path: SETTINGS_FC,
  },
  {
    title: "Settings CL",
    path: SETTINGS_CL,
  },
];

export const ROUTES = [
  {
    path: HOME_PAGE_CL,
    component: <CalculatorCL />,
  },
  {
    path: HOME_PAGE_FC,
    component: <CalculatorFC />,
  },
  {
    path: SETTINGS_FC,
    component: <SettingsFC />,
  },
  {
    path: SETTINGS_CL,
    component: <SettingsCL />,
  },
];
