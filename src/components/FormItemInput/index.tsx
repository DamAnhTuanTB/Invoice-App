import { FormItem, InputItem, TitleItem, Wrapper } from "./styles";

export default function FormItemInput({
  title,
  name,
  rules,
  restField,
}: {
  name: any;
  title?: string;
  rules?: any;
  restField?: any;
}) {
  return (
    <Wrapper data-testid="form-item-input-element">
      {title && <TitleItem>{title}</TitleItem>}
      <FormItem name={name} rules={rules || []} {...restField}>
        <InputItem />
      </FormItem>
    </Wrapper>
  );
}
