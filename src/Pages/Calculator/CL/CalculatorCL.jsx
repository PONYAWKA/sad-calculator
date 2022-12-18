import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNumber, hideShowHistory } from "../../../store/actions/actions";
import DispalyCL from "../../../components/Display/DisplayCL";
import HistoryCL from "../../../components/History/HistoryCL";
import KeyPadCL from "../../../components/Keypad/KeyPadCL";
import {
  CalculatorBody,
  ControlPanel,
  HideHistoryButton,
} from "../../../components/Calculator/components";
class CalculatorCL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historyShown, dispatch } = this.props;
    const KeyPadHanle = (e) => {
      dispatch(addNumber(e.target.value));
    };

    const hideHistoryButton = () => {
      dispatch(hideShowHistory());
    };

    return (
      <CalculatorBody>
        <ControlPanel>
          <DispalyCL />
          <KeyPadCL keypadHandle={KeyPadHanle} />
        </ControlPanel>
        <HideHistoryButton onClick={hideHistoryButton} id="hideShow">
          {historyShown ? "Hide\nHistory" : "Show\nHistory"}
        </HideHistoryButton>
        {historyShown && <HistoryCL />}
      </CalculatorBody>
    );
  }
}

CalculatorCL.propTypes = {
  dispatch: PropTypes.func.isRequired,
  historyShown: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return { historyShown: state.historyShown };
}

export default connect(mapStateToProps)(CalculatorCL);
