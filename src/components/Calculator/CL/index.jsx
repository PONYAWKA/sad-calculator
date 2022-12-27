import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNumber } from "@/store/actions/actions";
import DispalyCL from "components/Display/CL/index";
import { ControlPanel } from "components/Calculator/styled";
import KeyPadCL from "components/Keypad/CL/index";
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
  dispatch: PropTypes.func,
};
export default connect()(CalculatorCL);
