import { hist } from "../../constants/routs";
import { HistoryContainer, HistoryTie, HistoryTitle } from "./components";

export const HistoryFC = ({ history }) => {
  return (
    <HistoryContainer>
      <HistoryTitle>HISTORY</HistoryTitle>
      {history?.map((item) => (
        <HistoryTie key={item}><h5>{item}</h5></HistoryTie>
      ))}
    </HistoryContainer>
  );
};
