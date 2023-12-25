import { Button } from "antd";
import { styled } from "styled-components";
export const Wrapper = styled(Button)`
  padding: 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
