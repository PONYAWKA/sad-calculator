import { useSelector } from "react-redux";
import { HistoryContainer, HistoryTie, HistoryTitle } from "./components";

export const HistoryFC = () => {
  const history = useSelector((state) => state.history);
  return (
    <>
      <HistoryTitle>HISTORY</HistoryTitle>
      <HistoryContainer id="history">
        {history?.map((item, index) => (
          <HistoryTie key={index}>{item}</HistoryTie>
        ))}
      </HistoryContainer>
    </>
  );
};
