import { useContext } from "react";
import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";
import IconAvatar from "../../assets/image-avatar.jpg";
import IconLogo from "../../assets/logo.svg";
import AppContext from "../../contexts";
import { ThemeEnum } from "../../types";
import {
  Avatar,
  BackgroundInline,
  BottomSection,
  Logo,
  Theme,
  Wrapper,
} from "./styles";

export default function Sidebar() {
  const app = useContext(AppContext);
  const handleChangeTheme = () => {
    app?.setTheme(
      app?.theme === ThemeEnum.DARK_THEME
        ? ThemeEnum.LIGHT_THEME
        : ThemeEnum.DARK_THEME
    );
  };
  return (
    <Wrapper data-testid="sidebar-element">
      <Logo>
        <img src={IconLogo} alt="" />
        <BackgroundInline />
      </Logo>
      <BottomSection>
        <Theme>
          <img
            onClick={handleChangeTheme}
            src={app?.theme === ThemeEnum.DARK_THEME ? IconSun : IconMoon}
            alt={app?.theme === ThemeEnum.DARK_THEME ? "icon-sun" : "icon-moon"}
          />
        </Theme>
        <Avatar>
          <img src={IconAvatar} alt="" />
        </Avatar>
      </BottomSection>
    </Wrapper>
  );
}
