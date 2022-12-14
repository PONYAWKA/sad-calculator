import { expressionCalculator } from "./expressionCalculator";
class Сommand {
  constructor(command) {
    this.command = command;
  }
}

export class CalculatorApi {
  constructor() {
  }
  execute(Command, expression) {
    this.current = Command.command(expression);
    return this.current;
}
}
export const ExpressionCommand = new
  Сommand(expressionCalculator);
