export const getHistory = () => {
  return JSON.parse(localStorage.getItem("history")) ?? [];
};
export const setHistory = (history) =>
  localStorage.setItem("history", JSON.stringify(history));

export const clearHistory = () => localStorage.setItem("history", "[]");

export const getStorageTheme = () => {
  return localStorage.getItem("theme");
};

export const setStorageTheme = (theme) => localStorage.setItem("theme", theme);
