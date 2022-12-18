import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideShowHistory } from "../../../store/actions/actions";
import HistoryCL from "../../../components/History/HistoryCL";
import {
  CalculatorBody,
  HideHistoryButton,
} from "../../../components/Calculator/components";
import CalculatorCL from "../../../components/Calculator/CalculatorCL";
class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historyShown, dispatch } = this.props;

    const hideHistoryButton = () => {
      dispatch(hideShowHistory());
    };

    return (
      <CalculatorBody>
        <CalculatorCL />
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

export default connect(mapStateToProps)(ControlPanel);
