import React from "react";
import { connect } from "react-redux";
import {
  HistoryBody,
  HistoryContainer,
  HistoryTie,
  HistoryTitle,
} from "components/History/styled";
class HistoryCL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <HistoryBody>
        <HistoryTitle>HISTORY</HistoryTitle>
        <HistoryContainer id="history">
          {history?.map((item) => (
            <HistoryTie key={item}>{item}</HistoryTie>
          ))}
        </HistoryContainer>
      </HistoryBody>
    );
  }
}
function mapStateToProps(state) {
  return { history: state.history };
}
export default connect(mapStateToProps)(HistoryCL);
