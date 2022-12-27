import React from "react";
import PropTypes from "prop-types";
import { addNumber } from "@/store/actions/actions";
import { DispalyFC } from "components/Display/FC/index";
import { ControlPanel } from "components/Calculator/styled";
import { KeypadFC } from "components/Keypad/FC/index";
import { useDispatch } from "react-redux";
export const CalculatorFC = () => {
  const dispatch = useDispatch();

  const KeyPadHanle = (e) => {
    dispatch(addNumber(e.target.value));
  };
  return (
    <ControlPanel>
      <DispalyFC />
      <KeypadFC keypadHandle={KeyPadHanle} />
    </ControlPanel>
  );
};
CalculatorFC.propTypes = {
  dispatch: PropTypes.func,
};
