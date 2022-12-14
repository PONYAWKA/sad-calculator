import React from "react";
import { connect } from "react-redux";
import { addNumber } from "../../store/actions/actions";
import DispalyCL from "../Display/DisplayCL";
import HistoryCL from "../History/HistoryCL";
import KeyPadCL from "../Keypad/KeyPadCL";
import { CalculatorBody, ControlPanel, HideHistoryButton } from "./components";
class CalculatorCL extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHistoryShown: false };
  }

  render() {
    const { isHistoryShown } = this.state;
    const KeyPadHanle = (e) => {
      this.props.dispatch(addNumber(e.target.value));
    };

    const hideHistoryButton = () => {
      this.setState((prev) => ({
        ...prev,
        isHistoryShown: !prev.isHistoryShown,
      }));
    };

    return (
      <CalculatorBody>
        <ControlPanel>
          <DispalyCL />
          <KeyPadCL keypadHandle={KeyPadHanle} />
        </ControlPanel>
        <HideHistoryButton onClick={hideHistoryButton}>
          {isHistoryShown ? "Hide" : "Show"}
        </HideHistoryButton>
        {isHistoryShown && <HistoryCL />}
      </CalculatorBody>
    );
  }
}
export default connect()(CalculatorCL);
