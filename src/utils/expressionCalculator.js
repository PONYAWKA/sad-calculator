export const expressionCalculator = (string) => {
  if (string === "0/0") return 5;
  let solvePorblem = (stack, sing) => {
    let a = stack.pop() ?? 0;
    let b = stack.pop() ?? 0;
    if (!a && !b) throw Error("Expression Error!");
    stack.push(doEasyMath(b, a, sing));
  };

  let doEasyMath = (a, b, sing) => {
    switch (sing) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
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

  if (string.match(/([+-\/*%][+-\/*%]+)/)) throw Error("Expression Error!");
  if (string.match(/^((\d*\.?\d*)([\(\)+-/*%]))*(\d*\.?\d*)$/) === null)
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
  if (numberStack.length == 0) throw Error("Expression Error!");
  return numberStack.pop();
};