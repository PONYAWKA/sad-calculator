import { DispalyFC } from "../Display/DisplayFC";
import { HistoryFC } from "../History/HistoryFC";
import { KeypadFC } from "../Keypad/KeypadFC";
import { CalculatorBody, ControlPanel } from "./components";

export const CalculatorFC = () => {
  return (
    <CalculatorBody>
      <ControlPanel>
        <DispalyFC />
        <KeypadFC />
      </ControlPanel>
      <HistoryFC/>
    </CalculatorBody>
  );
};
