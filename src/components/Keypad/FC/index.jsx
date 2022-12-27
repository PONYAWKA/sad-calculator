import { KeypadButton, KeypadContainer } from "components/Keypad/styled";
import { KEYS } from "constants/keypadKeys";
import { ThemeContext } from "utils/ThemeContext";
import propTypes from "prop-types";

export const KeypadFC = ({ keypadHandle }) => {
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
};

KeypadFC.propTypes = {
  keypadHandle: propTypes.func.isRequired,
};
