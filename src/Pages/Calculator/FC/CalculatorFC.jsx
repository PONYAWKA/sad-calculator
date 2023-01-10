import { useDispatch, useSelector } from "react-redux";
import { hideShowHistory } from "@/store/actions/actions";
import { HistoryFC } from "components/History/FC/index";
import {
  CalculatorBody,
  HideHistoryButton,
} from "components/Calculator/styled";
import { addToast } from "sad-toast-lib";
import { CalculatorFC } from "components/Calculator/FC/index";
import { ToastConfin } from "@/Pages/Calculator/toastConfig";
export const ControlPanelFC = () => {
  const dispatch = useDispatch();
  const historyShown = useSelector((state) => state.historyShown);

  const hideHistoryButton = () => {
    dispatch(hideShowHistory());
    addToast(ToastConfin(historyShown));
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
