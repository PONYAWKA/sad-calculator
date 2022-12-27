import { useSelector } from "react-redux";
import {
  HistoryBody,
  HistoryContainer,
  HistoryTie,
  HistoryTitle,
} from "components/History/styled";

export const HistoryFC = () => {
  const history = useSelector((state) => state.history);
  console.log("render");
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
};
