import { expressionCalculator } from "./expressionCalculator";

const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;
const mod = (a, b) => a % b;
class Сommand {
  constructor(command) {
    this.command = command;
  }
}

export class CalculatorApi {
  constructor(value = 0) {
    this.value = value;
  }
  execute(Command, expression) {
    return Math.round(Command.command(expression, this.value) * 1e3) / 1e3;
  }
}
export const SumCommand = new Сommand(sum);
export const DifCommand = new Сommand(dif);
export const ModCommand = new Сommand(mod);
export const DivCommand = new Сommand(div);
export const MulCommand = new Сommand(mul);
export const ExpressionCommand = new Сommand(expressionCalculator);
