import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  DisplayContainer,
  DisplayInfo,
  DispalyAnswer,
} from "components/Display/styled";
class DisplayCL extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { answer, expression } = this.props;
    return (
      <DisplayContainer>
        <DispalyAnswer id="Answer">{answer && `${answer} =`}</DispalyAnswer>
        <DisplayInfo id="Info">{expression}</DisplayInfo>
      </DisplayContainer>
    );
  }
}
function mapStateToProps(state) {
  return { expression: state.expression, answer: state.answer };
}
DisplayCL.propTypes = {
  expression: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(DisplayCL);
