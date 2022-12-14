import React from "react";
import { connect } from "react-redux";
import { DisplayContainer, DisplayInfo, DispalyAnswer} from "./components";
class DisplayCL extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { answer, expression } = this.props;
    return (
      <DisplayContainer>
        <DispalyAnswer>{answer && `${answer} =`}</DispalyAnswer>
        <DisplayInfo>{expression}</DisplayInfo>
      </DisplayContainer>
    );
  }
}
function mapStateToProps(state) {
  return { expression: state.expression, answer: state.answer };
}
export default connect(mapStateToProps)(DisplayCL);