import { ExpressionCommand } from "../../utils/calculator";

const CommandList = {
  "+": 1,
  "-": 1,
  "*": 1,
  "/": 1,
  "%": 1,
};

export const addNumber = (Symbol) => {
  switch (Symbol) {
    case "=": {
      return { type: "calculate" };
    }
    case "C": {
      console.log(Symbol);
      return { type: "clear" };
    }
    case "+/-": {
      return { type: "changeSing" };
    }
  }
  return { type: "addNumber", payload: Symbol };
};
export const clearHistoy = () => ({ type: "clearHistory" });
