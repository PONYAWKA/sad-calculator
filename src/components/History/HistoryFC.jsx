import { useSelector } from "react-redux";
import { HistoryContainer, HistoryTie, HistoryTitle } from "./components";

export const HistoryFC = () => {
  const history = useSelector((state) => state.history);
  console.log(history);
  return (
    <HistoryContainer>
      <HistoryTitle>HISTORY</HistoryTitle>
      {history?.map((item) => (
        <HistoryTie key={item}>
          {item}
        </HistoryTie>
      ))}
    </HistoryContainer>
  );
};
