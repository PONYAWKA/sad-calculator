import { useSelector } from "react-redux";
import {
  HistoryBody,
  HistoryContainer,
  HistoryTie,
  HistoryTitle,
} from "./components";

export const HistoryFC = () => {
  const history = useSelector((state) => state.history);
  return (
    <HistoryBody>
      <HistoryTitle>HISTORY</HistoryTitle>
      <HistoryContainer id="history">
        {history?.map((item, index) => (
          <HistoryTie key={index}>{item}</HistoryTie>
        ))}
      </HistoryContainer>
    </HistoryBody>
  );
};
