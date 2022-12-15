import { useSelector } from "react-redux";
import { DisplayContainer, DisplayInfo, DispalyAnswer } from "./components";

export const DispalyFC = () => {
  const expression = useSelector((state) => state.expression);
  const answer = useSelector((state) => state.answer);
  return (
    <DisplayContainer>
      <DispalyAnswer>{answer && `${answer} =`}</DispalyAnswer>
      <DisplayInfo>{expression}</DisplayInfo>
    </DisplayContainer>
  );
};
