import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNumber } from "../../store/actions/actions";
import { DispalyFC } from "../Display/DisplayFC";
import { HistoryFC } from "../History/HistoryFC";
import { KeypadFC } from "../Keypad/KeypadFC";
import { CalculatorBody, ControlPanel, HideHistoryButton } from "./components";

export const CalculatorFC = () => {
  const dispatch = useDispatch();
  const [isHistoryShown, setIsHistoryShown] = useState(false);
  const hideHistoryButton = () => setIsHistoryShown((prev) => !prev);

  const KeyPadHanle = ({ target }) => {
    dispatch(addNumber(target.value));
  };
  return (
    <CalculatorBody>
      <ControlPanel>
        <DispalyFC />
        <KeypadFC keypadHandle={KeyPadHanle} />
      </ControlPanel>
      <HideHistoryButton onClick={hideHistoryButton}>
        {isHistoryShown ? "Hide" : "Show"}
      </HideHistoryButton>
      {isHistoryShown && <HistoryFC />}
    </CalculatorBody>
  );
};
