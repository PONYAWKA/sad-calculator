export const addNumber = (Symbol) => {
  switch (Symbol) {
    case "=": {
      return { type: "calculate" };
    }
    case "C": {
      return { type: "clear" };
    }
    case "+/-": {
      return { type: "changeSing" };
    }
  }
  return { type: "addNumber", payload: Symbol };
};
export const clearHistoy = () => ({ type: "clearHistory" });
