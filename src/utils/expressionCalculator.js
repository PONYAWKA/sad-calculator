import { addToast } from "sad-toast-lib";
import {
  CalculatorApi,
  DifCommand,
  DivCommand,
  ModCommand,
  MulCommand,
  SumCommand,
} from "./calculator";

export const expressionCalculator = (string) => {
  try {
    let solvePorblem = (stack, sing) => {
      let a = stack.pop() ?? 0;
      let b = stack.pop() ?? 0;
      stack.push(doEasyMath(b, a, sing));
    };

    let doEasyMath = (a, b, sing) => {
      if (b === 0 && sing === "/") throw Error("Division by zero");
      switch (sing) {
        case "+":
          return new CalculatorApi(b).execute(SumCommand, a);
        case "-":
          return new CalculatorApi(b).execute(DifCommand, a);
        case "*":
          return new CalculatorApi(b).execute(MulCommand, a);
        case "/":
          return new CalculatorApi(b).execute(DivCommand, a);
        case "%":
          return new CalculatorApi(b).execute(ModCommand, a);
        default:
          throw Error("Wrong sing");
      }
    };

    const singPriority = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "%": 3,
    };

    string = `${string.replace(/\s/g, "")})`;
    if (!string.length) throw Error("String is Empty");
    if (string.match(/([+\-/*%][+\-/*%]+)/)) throw Error("Expression Error!");
    if (string.match(/(\(\))/)) throw Error("Expression Error!");
    if (!string.match(/^((\d*\.?\d*)([()+-/*%]))*(\d*\.?\d*)$/))
      throw Error("String Error!");

    let numberStack = [];
    let singStack = [];

    for (let i = 0; i < string.length; i++) {
      let curElement = string[i];
      let curElementPriority = singPriority[curElement];
      if (curElementPriority) {
        if (
          singPriority[singStack.at(-1)] >= curElementPriority &&
          singStack.length
        ) {
          let localSing = singStack.pop();
          while (singPriority[localSing] >= curElementPriority) {
            solvePorblem(numberStack, localSing, singStack);
            localSing = singStack.pop();
          }
          if (localSing) singStack.push(localSing);
          singStack.push(curElement);
        } else singStack.push(curElement);
      } else if (curElement === "(") singStack.push(curElement);
      else if (curElement === ")") {
        let localSing = singStack.pop();
        while (localSing !== "(" && localSing?.length) {
          solvePorblem(numberStack, localSing, singStack);
          localSing = singStack.pop();
        }
      } else {
        let number = string.substring(i).match(/(\.?[0-9]+\.?[0-9]*)/);
        if (number?.index === 0) {
          i += number[0].length - 1;
          numberStack.push(Number(number[0]));
        }
      }
    }

    if (numberStack.length > 1 || singStack?.length > 0 || isNaN(numberStack))
      throw Error("Expression Error!");
    if (!numberStack.length) throw Error("Expression Error!");
    return String(numberStack.pop());
  } catch (e) {
    console.log(e);
    addToast({
      text: e.message,
      duration: 2000,
      type: "error",
      animation: "letfToRight",
    });
  }
};
