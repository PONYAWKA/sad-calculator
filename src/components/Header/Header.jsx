import { HOME_PAGE_CL, HOME_PAGE_FC,SETTINGS } from "../../constants/routs";
import {
  HeaderBlock,
  HeaderContainer,
  HeaderNavigationContainer,
  HeaderTitle,
  HeaderLink,
} from "./components";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderTitle>Calculator app</HeaderTitle>
        <HeaderNavigationContainer>
          <HeaderLink to={HOME_PAGE_CL}>HOME (CL)</HeaderLink>
          <HeaderLink to={HOME_PAGE_FC}>HOME (FC)</HeaderLink>
          <HeaderLink to={SETTINGS}>SETTINGS</HeaderLink>
        </HeaderNavigationContainer>
      </HeaderContainer>
    </HeaderBlock>
  );
};
