import { useDispatch } from "react-redux";
import { addNumber } from "../../store/actions/actions";
import { DispalyFC } from "../Display/DisplayFC";
import { HistoryFC } from "../History/HistoryFC";
import { KeypadFC } from "../Keypad/KeypadFC";
import { CalculatorBody, ControlPanel } from "./components";

export const CalculatorFC = () => {
  const dispatch = useDispatch();

  const KeyPadhanle = ({ target }) => {
    dispatch(addNumber(target.value));
  };
  return (
    <CalculatorBody>
      <ControlPanel>
        <DispalyFC />
        <KeypadFC keypadHandle={KeyPadhanle} />
      </ControlPanel>
      <HistoryFC />
    </CalculatorBody>
  );
};
