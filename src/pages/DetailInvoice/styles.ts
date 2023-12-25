import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 972px;
  margin: auto;
  padding-top: 70px;
  padding-bottom: 50px;
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const FirstSection = styled.div`
  margin-top: 30px;
  width: 100%;
  background-color: var(--background-invoice-item);
  padding: 20px 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const GroupButton = styled.div`
  display: flex;
  gap: 10px;
`;

export const SecondSection = styled.div`
  margin-top: 30px;
  width: 100%;
  background-color: var(--background-invoice-item);
  padding: 40px 35px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IDAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const ID = styled.div`
  font-weight: bold;
  font-size: 22px;
  span {
    color: rgb(126, 136, 195);
  }
`;

export const Description = styled.div``;

export const SenderAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ItemSA = styled.div``;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr;
`;

export const CreatedAtAndPaymentDue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InvoiceDate = styled.div``;

export const ValueInvoiceDate = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const CreatedAt = styled.div``;

export const PaymentDue = styled.div``;

export const ValuePaymentDue = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const TitleItem = styled.div``;

export const BillTo = styled.div``;

export const SendTo = styled.div``;

export const ClientName = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemAddress = styled.div`
  margin-bottom: 7px;
`;

export const ClientEmail = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const ThirdRow = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

export const ListItem = styled.div`
  padding: 30px;
  padding-bottom: 10px;
  background-color: var(--background-list-item);
`;
export const TitleListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  margin-bottom: 20px;
`;

export const TitleItemName = styled.div``;

export const TitleItemQt = styled.div``;

export const TitleItemPrice = styled.div`
  text-align: right;
  padding-right: 30px;
`;

export const TitleItemTotal = styled.div`
  text-align: right;
`;

export const ValueItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  & > div {
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 20px;
  }
`;

export const ValueItemName = styled.div``;

export const ValueItemQty = styled.div`
  padding-left: 10px;
`;

export const ValueItemPrice = styled.div`
  text-align: right;
  padding-right: 30px;
`;

export const ValueItemTotal = styled.div`
  text-align: right;
`;

export const AmountDue = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-amount-due);
`;

export const TitleAmountDue = styled.div``;

export const ValueAmountDue = styled.div`
  font-weight: bold;
  font-size: 25px;
`;
