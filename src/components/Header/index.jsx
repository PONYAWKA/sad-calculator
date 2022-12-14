import { PATHS } from "constants/routs";
import {
  HeaderBlock,
  HeaderContainer,
  HeaderNavigationContainer,
  HeaderTitle,
} from "components/Header/styled";
import { HeaderLinkComponent } from "components/Header/HeaderLinkComponent";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderTitle>Calculator app</HeaderTitle>
        <HeaderNavigationContainer>
          {PATHS.map(({ title, path }) => (
            <HeaderLinkComponent to={path} key={path} title={title} />
          ))}
        </HeaderNavigationContainer>
      </HeaderContainer>
    </HeaderBlock>
  );
};
