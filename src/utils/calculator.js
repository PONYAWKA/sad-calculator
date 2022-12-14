import { expressionCalculator } from "./expressionCalculator";

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const mod = (x, y) => x % y;
class Сommand {
  constructor(command) {
    this.command = command;
  }
}

export class CalculatorApi {
  constructor(current = 0) {
    this.current = current;
  }
  execute(Command, expression) {
    this.current = Command.command(expression);
    return this.current;
}
}

// export const AddCommand = () => new Сommand(add, value);
// export const SubCommand = () => new Сommand(subtract, value);
// export const MultCommand = () => new Сommand(multiply, value);
// export const DivCommand = () => new Сommand(divide, value);
// export const ModCommand = () => new Сommand(mod);
export const ExpressionCommand = new
  Сommand(expressionCalculator);
