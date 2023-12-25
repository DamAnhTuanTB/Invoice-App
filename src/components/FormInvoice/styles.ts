import { DatePicker, Form, Input, Select } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Content = styled.div`
  background-color: var(--background-form-invoice);
  height: calc(100% - 80px);
  width: 800px;
  padding-left: 120px;
  padding-right: 40px;
  border-top-right-radius: 20px;
  padding-top: 40px;
  color: var(--color-text-main);
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const ContentForm = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-right: 15px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const TitleAdd = styled.div``

export const TitleEdit = styled.div`
  span {
    color: rgb(126, 136, 195);
  }
`;

export const FormCustom = styled(Form)``;

export const FormItem = styled(Form.Item)``;

export const InputItem = styled(Input)`
  background-color: var(--background-input-item);
  border: none;
  height: 40px;
`;

export const BillFrom = styled.div`
  color: #7155e2;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const BillTo = styled.div`
  color: #7155e2;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const TitleItem = styled.div`
  color: var(--color-text-main);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
`;

export const RowDate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;
export const Column = styled.div``;

export const DatePickerCustom = styled(DatePicker)`
  background-color: var(--background-input-item) !important;
  border: none;
  height: 40px;
  width: 100%;
  input {
    color: var(--color-text-main) !important;
    font-weight: bold !important;
    &::placeholder {
      color: transparent !important;
    }
  }
  .ant-picker-suffix {
    color: #494e74 !important;
  }
`;

export const SelectCustom = styled(Select)`
  .ant-select-selector {
    background-color: var(--background-input-item) !important;
    border: none !important;
    height: 40px !important;
    color: var(--color-text-main) !important;
  }
  .ant-select-selection-item {
    font-weight: bold !important;
  }
`;

export const ItemListTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: var(--color-item-list-title);
`;

export const RowTitleItemList = styled.div`
  display: grid;
  column-gap: 12px;
  grid-template-columns: 2.5fr 1fr 1.5fr 1.5fr 0.5fr;
  & > div {
    color: var(--color-text-main);
  }
  margin-bottom: 10px;
`;

export const RowItem = styled.div`
  display: grid;
  column-gap: 12px;
  grid-template-columns: 2.5fr 1fr 1.5fr 1.5fr 0.5fr;
`;

export const ItemName = styled.div``;

export const ItemQty = styled.div``;

export const ItemPrice = styled.div``;

export const ItemTotal = styled.div`
  padding-left: 12px;
`;

export const FormList = styled(Form.List)``;

export const TotalItem = styled.div``;

export const ColumnDelete = styled.div`
  padding-top: 10px;
  text-align: right;
  cursor: pointer;
`;

export const InputTotal = styled(Input)`
  height: 40px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  color: var(--color-text-main);
  &:focus {
    box-shadow: none !important;
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100px;
  padding: 0px 40px 0px 120px;
  background-color: var(--background-group-button);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  border-top-right-radius: 20px;
`;

export const GroupChild = styled.div`
  display: flex;
  gap: 10px;
`;

export const ErrorItemList = styled.div`
  color: #ff4d4f;
  margin-top: -20px;
`;

export const GroupButtonEdit = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100px;
  padding: 0px 40px 0px 120px;
  background-color: var(--background-group-button);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 800px;
  border-top-right-radius: 20px;
  gap: 10px;
`;
