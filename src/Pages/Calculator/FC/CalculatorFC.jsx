import { useDispatch, useSelector } from "react-redux";
import { addNumber, hideShowHistory } from "../../../store/actions/actions";
import { DispalyFC } from "../../../components/Display/DisplayFC";
import { HistoryFC } from "../../../components/History/HistoryFC";
import { KeypadFC } from "../../../components/Keypad/KeypadFC";
import {
  CalculatorBody,
  ControlPanel,
  HideHistoryButton,
} from "../../../components/Calculator/components";

export const CalculatorFC = () => {
  const dispatch = useDispatch();
  const historyShown = useSelector((state) => state.historyShown);
  const hideHistoryButton = () => {
    dispatch(hideShowHistory());
  };
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
        {historyShown ? "Hide\nHistory" : "Show\nHistory"}
      </HideHistoryButton>
      {historyShown && <HistoryFC />}
    </CalculatorBody>
  );
};
