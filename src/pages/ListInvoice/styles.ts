import { Select } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 972px;
  margin: auto;
  padding-top: 70px;
  height: 100%;
  background-color: var(--bg-primary);
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const AppName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Quantity = styled.div``;

export const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const SelectStatus = styled(Select)`
  .ant-select-selector {
    border: none !important;
    background-color: transparent !important;
    color: var(--color-text-main) !important;
    box-shadow: none !important;
    font-weight: bold !important;
    width: 135px !important;
  }
  .ant-select-selection-placeholder {
    color: var(--color-text-main) !important;
    font-weight: bold !important;
  }
  .ant-select-selection-item {
    color: var(--color-text-main) !important;
    font-weight: bold !important;
  }
`;

export const ContentNothing = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextNothing = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 50px;
`;

export const DescriptionNothing = styled.div`
  margin-top: 20px;
  max-width: 240px;
  text-align: center;
  span {
    font-weight: bold;
  }
`;

export const InvoicesContent = styled.div`
  padding-bottom: 30px;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 15px;
  padding: 10px 20px 10px 30px;
  background-color: var(--background-invoice-item);
  border-radius: 5px;
  margin-top: 15px;
  align-items: center;
`;

export const InvoiceId = styled.div`
  font-weight: bold;
  span {
    color: rgb(126, 136, 195);
  }
`;

export const InvoiceCreatedAt = styled.div``;

export const InvoiceClientName = styled.div``;

export const InvoiceTotal = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: right;
  padding-right: 100px;
  white-space: nowrap;
`;

export const ArrowRight = styled.div`
  cursor: pointer;
`;
