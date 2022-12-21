import { useDispatch, useSelector } from "react-redux";
import { hideShowHistory } from "@/store/actions/actions";
import { HistoryFC } from "components/History/HistoryFC";
import {
  CalculatorBody,
  HideHistoryButton,
} from "components/Calculator/components";
import { CalculatorFC } from "components/Calculator/CalculatorFC";
export const ControlPanelFC = () => {
  const dispatch = useDispatch();
  const historyShown = useSelector((state) => state.historyShown);

  const hideHistoryButton = () => {
    dispatch(hideShowHistory());
  };
  return (
    <CalculatorBody>
      <CalculatorFC />
      <HideHistoryButton onClick={hideHistoryButton} id="hideShow">
        {historyShown ? "Hide\nHistory" : "Show\nHistory"}
      </HideHistoryButton>
      {historyShown && <HistoryFC />}
    </CalculatorBody>
  );
};
