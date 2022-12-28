export const Themes = [
  { name: "Light theme", value: "light" },
  { name: "Dark Theme", value: "dark" },
  { name: "Colored theme", value: "colored" },
];

const grey = "#515054";
const black = "#000";
const yellowGreen = "#2e9100";
const greyBackground = "#858585";
const white = "#fff";
const dimWhite = "#b5b5b5";

export const ThemeColor = {
  light: {
    name: "light",
    header: grey,
    background: white,
    underline: grey,
    textColor: black,
    keyBackground: white,
  },

  dark: {
    name: "dark",
    header: black,
    background: greyBackground,
    underline: black,
    keyBackground: black,
    textColor: dimWhite,
  },

  colored: {
    name: "colored",
    header: yellowGreen,
    background: white,
    underline: grey,
    keyBackground: yellowGreen,
    textColor: black,
  },
};
const width = [10, 20, 30, 60, 90, 100, 200, 300, 400, "auto"];
const height = [2, 10, 20, 50, 60, 80, 90, 100];
const space = [0, 10, 15, 30, 40, 50];
const fontSize = [1, 1.5, 2, 3];
const borderRadius = [20, 5, 10];

export const GlobalTheme = (theme) => ({
  borderRadius,
  width,
  height,
  fontSize,
  space,
  ...ThemeColor[theme],
});
