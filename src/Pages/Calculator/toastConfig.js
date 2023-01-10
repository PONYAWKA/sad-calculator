export const ToastConfin = (historyShown) => ({
  type: "success",
  position: "LeftTop",
  text: `History is ${!historyShown ? "shown" : "hidden"}`,
  label: "",
  duration: 2000,
});
