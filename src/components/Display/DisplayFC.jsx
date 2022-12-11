import { DisplayContainer, DisplayInfo, Display } from "./components";

export const DispalyFC = ({ input = "df", result }) => {
  return (
      <DisplayContainer>
        <DisplayInfo>{input}</DisplayInfo>
      </DisplayContainer>
  );
};
