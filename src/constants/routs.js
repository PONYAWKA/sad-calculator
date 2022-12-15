import CalculatorCL from "../components/Calculator/CalculatorCL";
import { CalculatorFC } from "../components/Calculator/CalculatorFC";
import { Settings } from "../components/Settings/SettingsFC/SettingsFC";
export const HOME_PAGE_FC = "/fc";
export const HOME_PAGE_CL = "/cl";
export const SETTINGS_FC = "/settings";

export const PATHS = [
  {
    title: "HOME CL",
    path: HOME_PAGE_CL,
    component: <CalculatorCL />,
  },
  {
    title: "HOME FC",
    path: HOME_PAGE_FC,
    component: <CalculatorFC />,
  },
  {
    title: "Settings FC",
    path: SETTINGS_FC,
    component: <Settings />,
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
    component: <Settings />,
  },
];
