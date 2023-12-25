import { Form, Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const FormItem = styled(Form.Item)``;

export const InputItem = styled(Input)`
  font-weight: bold;
  background-color: var(--background-input-item);
  border: none;
  height: 40px;
  color: var(--color-text-main);
`;

export const TitleItem = styled.div`
  color: var(--color-text-main);
`;
