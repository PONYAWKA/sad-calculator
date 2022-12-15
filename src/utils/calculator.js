import { expressionCalculator } from "./expressionCalculator";
class Сommand {
  constructor(command) {
    this.command = command;
  }
}

export class CalculatorApi {
  constructor() {}
  execute(Command, expression) {
    return String(Math.round(Command.command(expression) * 1e3) / 1e3);
  }
}
export const ExpressionCommand = new Сommand(expressionCalculator);
