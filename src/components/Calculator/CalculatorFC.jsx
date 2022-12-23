import React from "react";
import PropTypes from "prop-types";
import { addNumber } from "@/store/actions/actions";
import DispalyCL from "components/Display/DisplayCL";
import { ControlPanel } from "./components";
import KeyPadCL from "components/Keypad/KeyPadCL";
import { useDispatch } from "react-redux";
export const CalculatorFC = () => {
  const dispatch = useDispatch();

  const KeyPadHanle = (e) => {
    dispatch(addNumber(e.target.value));
  };
  return (
    <ControlPanel>
      <DispalyCL />
      <KeyPadCL keypadHandle={KeyPadHanle} />
    </ControlPanel>
  );
};
CalculatorFC.propTypes = {
  dispatch: PropTypes.func,
};
