import { useLocation } from "react-router-dom";
import { HeaderLink } from "components/Header/styled";

export const HeaderLinkComponent = ({ to, title }) => {
  const { pathname } = useLocation();
  return (
    <HeaderLink _isactive={pathname === to ? "underline" : "none"} to={to}>
      {title}
    </HeaderLink>
  );
};
