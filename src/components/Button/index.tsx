import IconPlus from "../../assets/icon-plus.svg";
import { Icon, Wrapper } from "./styles";

export default function Button({
  text,
  background,
  color = "white",
  loading = false,
  disable = false,
  width = "max-content",
  height = "40px",
  icon = false,
  handleClick,
}: {
  text: string;
  background: string;
  width?: string;
  color?: string;
  loading?: boolean;
  disable?: boolean;
  height?: string;
  icon?: boolean;
  gap?: string;
  handleClick: () => void;
}) {
  return (
    <Wrapper
      data-testid="button-element"
      style={{
        background,
        color,
        height,
        width,
        gap: icon ? "12px" : "2px",
        paddingLeft: icon ? "7px" : "15px",
      }}
      loading={loading}
      disabled={disable}
      onClick={handleClick}
    >
      {icon && (
        <Icon>
          <img data-testid="icon-button-element" src={IconPlus} alt="" />
        </Icon>
      )}{" "}
      {text}
    </Wrapper>
  );
}
