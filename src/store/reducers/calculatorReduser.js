import { CalculatorApi, ExpressionCommand } from "../../utils/calculator";
import { breaketBalance } from "../../utils/BreaketBalance";
import { clearHistory, getHistory, setHistory } from "../../utils/localStorage";

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
  history: getHistory(),
  answer: "",
  isCalulated: false,
  historyShown: false,
};

export const CalculatorReduser = (state = initialState, action) => {
  switch (action.type) {
    case "addNumber": {
      const { payload } = action;
      const { expression, isCalulated } = state;
      const lastSymbol = expression?.at(-1);
      if (lastSymbol === ")" && !breaket[payload] && !singList[payload])
        return state;
      if (isCalulated && !singList[payload])
        return { ...state, expression: payload };
      if (
        singList[payload] &&
        singList[lastSymbol] &&
        (payload !== "." || lastSymbol === ".")
      )
        return { ...state, expression: expression.slice(0, -1) + payload };
      if (expression === "0" && !singList[payload])
        return { ...state, expression: payload };
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
      return { ...state, expression: "0", isCalulated: false, answer: "" };
    case "changeSing":
      return {
        ...state,
        expression: state.expression
          ? String(-Number(state.expression))
          : state.expression,
      };
    case "calculate": {
      const { expression } = state;
      const lastSymbol = expression?.at(-1);
      const calcExp = new CalculatorApi().execute(
        ExpressionCommand,
        state.expression
      );
      if (singList[lastSymbol]) return state;
      const newHistory = [`${state.expression} = ${calcExp}`, ...state.history];
      setHistory(newHistory);
      return {
        ...state,
        answer: expression,
        history: newHistory,
        expression: calcExp,
        isCalulated: true,
      };
    }
    case "clearHistory":
      clearHistory();
      return { ...state, history: [], expression: "0", answer: "" };
    case "hideShowHistory":
      return { ...state, historyShown: !state.historyShown };
    default:
      return state;
  }
};
