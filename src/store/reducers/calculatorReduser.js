import { CalculatorApi } from "../../utils/calculator";
import { expressionCalculator } from "../../utils/expressionCalculator";
import { breaketBalance } from "../../utils/helper";

const singList = {
  "+": 1,
  "-": 1,
  "*": 1,
  "/": 1,
  "%": 1,
  ".": 1,
};
const breaket = {
  "(": 1,
  ")": 1,
};
const initialState = {
  expression: "0",
  history: [],
  answer: "",
  isCalulated: false,
};

export const CalculatorReduser = (state = initialState, action) => {
  switch (action.type) {
    case "addNumber": {
      const { payload } = action;
      const { expression, isCalulated } = state;
      if (isCalulated && !singList[payload])
        return { ...state, expression: payload };
      const lastSymbol = expression?.at(-1);
      if (singList[payload] && singList[lastSymbol])
        return { ...state, expression: expression.slice(0, -1) + payload };
      if (expression === "0" && !singList[payload])
        return { ...state, expression: payload };
      //if (breaket[lastSymbol] && singList[payload]) return state;
      if ((+lastSymbol || lastSymbol === ".") && payload === "(") return state;
      if (breaket[payload] && breaketBalance(expression + payload) < 0)
        return state;
      return {
        ...state,
        expression: state.expression + payload,
        isCalulated: false,
      };
    }
    case "clear":
      return { ...state, expression: "0", isCalulated: false };
    case "changeSing":
      return {
        ...state,
        expression: state.expression
          ? String(-Number(state.expression))
          : state.expression,
      };
    case "calculate": {
      const { expression } = state;
      const calcExp = expressionCalculator(expression);
      if (singList[expression.at(-1)]) return state;
      return {
        ...state,
        answer: calcExp,
        history: [...state.history, `${state.expression} = ${calcExp}`],
        expression: calcExp,
        isCalulated: true,
      };
    }
    case "clearHistory":
      return { ...state, history: [], expression: "0", answer: "" };
    case "defaultCommand":
      return {
        ...state,
        answer: new CalculatorApi().execute(action.payload, state.expression),
      };
    default:
      return state;
  }
};
