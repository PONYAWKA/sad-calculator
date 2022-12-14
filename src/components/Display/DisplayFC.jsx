import { useSelector } from "react-redux";
import { DisplayContainer, DisplayInfo, DispalyAnswerFC } from "./components";

export const DispalyFC = () => {
  const expression = useSelector((state) => state.expression);
  const answer = useSelector((state) => state.answer);
  return (
    <DisplayContainer>
      <DispalyAnswerFC>{answer && `= ${answer}`}</DispalyAnswerFC>
      <DisplayInfo>{expression}</DisplayInfo>
    </DisplayContainer>
  );
};
