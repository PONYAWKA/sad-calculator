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
export const GlobalTheme = {
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
  },
};
