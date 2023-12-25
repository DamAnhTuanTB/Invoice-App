import { Modal } from "antd";
import styled from "styled-components";
import { ThemeEnum } from "../../types";

export const Wrapper = styled(Modal)<any>`
  .ant-modal-content {
    padding: 40px;
    background-color: ${(props) =>
      props.theme === ThemeEnum.DARK_THEME ? "#1F213A" : "white"};
    color: ${(props) =>
      props.theme === ThemeEnum.DARK_THEME ? "white" : "rgb(20,22,37)"};
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 16px;
`;

export const GroupButton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
