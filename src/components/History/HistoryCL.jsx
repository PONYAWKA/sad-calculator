import React from "react";
import { connect } from "react-redux";
import { HistoryContainer, HistoryTie, HistoryTitle } from "./components";
class HistoryCL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <HistoryContainer id="history">
        <HistoryTitle>HISTORY</HistoryTitle>
        {history?.map((item, index) => (
          <HistoryTie key={index}>{item}</HistoryTie>
        ))}
      </HistoryContainer>
    );
  }
}
function mapStateToProps(state) {
  return { history: state.history };
}
export default connect(mapStateToProps)(HistoryCL);
