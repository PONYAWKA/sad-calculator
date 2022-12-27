import React from "react";
import { connect } from "react-redux";
import { KeypadButton, KeypadContainer } from "components/Keypad/styled";
import { KEYS } from "constants/keypadKeys";
import { ThemeContext } from "utils/ThemeContext";
class KeyPadCL extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { keypadHandle } = this.props;
    const handleOnDigit = (e) => {
      keypadHandle(e);
    };
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <KeypadContainer>
            {KEYS.map((item) => (
              <KeypadButton
                key={item}
                curTheme={theme}
                onClick={handleOnDigit}
                value={item}
              >
                {item}
              </KeypadButton>
            ))}
          </KeypadContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default connect()(KeyPadCL);
