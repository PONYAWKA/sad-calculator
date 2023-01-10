import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideShowHistory } from "@/store/actions/actions";
import HistoryCL from "components/History/CL/index";
import {
  CalculatorBody,
  HideHistoryButton,
} from "components/Calculator/styled";
import CalculatorCL from "components/Calculator/CL/index";
import { addToast } from "sad-toast-lib";
import { ToastConfin } from "@/Pages/Calculator/toastConfig";
class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historyShown, dispatch } = this.props;

    const hideHistoryButton = () => {
      dispatch(hideShowHistory());
      addToast(ToastConfin(historyShown));
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
  dispatch: PropTypes.func,
  historyShown: PropTypes.bool,
};

function mapStateToProps(state) {
  return { historyShown: state.historyShown };
}

export default connect(mapStateToProps)(ControlPanel);
