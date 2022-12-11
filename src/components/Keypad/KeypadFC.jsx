import { KeypadButton,KeypadContainer } from "./components"
import {KEYS} from '../../constants/keypadKeys'

export const KeypadFC = ({keypadHandle}) =>
{
    const handleOnDigit = e => {
        keypadHandle(e)
      }
    return (
        <KeypadContainer>
          {KEYS.map(item => (
            <KeypadButton
              key={item}
              onClick={handleOnDigit}>
              {item}
            </KeypadButton>
          ))}
        </KeypadContainer>
      )
}
