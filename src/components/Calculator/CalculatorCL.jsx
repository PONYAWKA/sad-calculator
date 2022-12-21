import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNumber } from "@/store/actions/actions";
import DispalyCL from "components/Display/DisplayCL";
import { ControlPanel } from "./components";
import KeyPadCL from "../Keypad/KeyPadCL";
class CalculatorCL extends React.Component {
  render() {
    const { dispatch } = this.props;
    const KeyPadHanle = (e) => {
      dispatch(addNumber(e.target.value));
    };
    return (
      <ControlPanel>
        <DispalyCL />
        <KeyPadCL keypadHandle={KeyPadHanle} />
      </ControlPanel>
    );
  }
}
CalculatorCL.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(CalculatorCL);
