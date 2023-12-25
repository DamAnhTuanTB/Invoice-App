import { message } from "antd";
import dayjs from "dayjs";
import { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconArrowLeft from "../../assets/icon-arrow-left.svg";
import Button from "../../components/Button";
import InvoiceStatus from "../../components/InvoiceStatus";
import ModalConfirmDelete from "../../components/ModalConfirmDelete";
import AppContext from "../../contexts";
import { ActionFormInvoice, InvoiceItem, StatusInvoice } from "../../types";
import { formatMoney } from "../../utils/formatMoney";
import {
  AmountDue,
  BillTo,
  ClientEmail,
  ClientName,
  CreatedAtAndPaymentDue,
  Description,
  FirstRow,
  FirstSection,
  GoBack,
  GroupButton,
  ID,
  IDAndDescription,
  InvoiceDate,
  ItemAddress,
  ItemSA,
  ListItem,
  PaymentDue,
  SecondRow,
  SecondSection,
  SendTo,
  SenderAddress,
  Status,
  ThirdRow,
  TitleAmountDue,
  TitleItem,
  TitleItemName,
  TitleItemPrice,
  TitleItemQt,
  TitleItemTotal,
  TitleListItem,
  ValueAmountDue,
  ValueInvoiceDate,
  ValueItem,
  ValueItemName,
  ValueItemPrice,
  ValueItemQty,
  ValueItemTotal,
  ValuePaymentDue,
  Wrapper,
} from "./styles";

export default function DetailInvoice() {
  const params = useParams();
  const navigate = useNavigate();
  const { invoices, setInvoices, setEditInvoice, setActionFormInvoice } =
    useContext(AppContext);
  const [openDelete, setOpenDelete] = useState(false);

  const detail: InvoiceItem = useMemo(() => {
    const invoice = invoices.find(
      (item: InvoiceItem) => item?.id === params?.id
    ) as InvoiceItem;
    return invoice;
  }, [invoices, params?.id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    setActionFormInvoice(ActionFormInvoice.EDIT);
    setEditInvoice(detail as InvoiceItem);
  };

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleMarkPaid = () => {
    const index = invoices.findIndex(
      (item: InvoiceItem) => item.id === params?.id
    );
    if (index !== -1) {
      invoices[index].status = StatusInvoice.PAID;
      setInvoices([...invoices]);
      message.success("Successfully Mark as Paid!");
    }
  };

  return (
    <Wrapper data-testid="detail-invoice-element">
      <GoBack onClick={handleGoBack}>
        <img src={IconArrowLeft} alt="" />
        Go back
      </GoBack>
      <FirstSection>
        <Status>
          Status <InvoiceStatus status={detail?.status} />
        </Status>
        <GroupButton>
          <Button
            background="var(--background-button-edit)"
            text="Edit"
            handleClick={handleEdit}
            color="var(--color-text-main)"
          />
          <Button
            background="var(--nonary-color)"
            text="Delete"
            handleClick={handleDelete}
          />
          <Button
            background="var(--primary-color)"
            text="Mark as Paid"
            handleClick={handleMarkPaid}
            disable={detail?.status !== StatusInvoice.PENDING}
          />
        </GroupButton>
      </FirstSection>
      <SecondSection>
        <FirstRow>
          <IDAndDescription>
            <ID>
              <span>#</span>
              {detail?.id}
            </ID>
            <Description>{detail?.description}</Description>
          </IDAndDescription>
          <SenderAddress>
            <ItemSA>{detail?.senderAddress?.street}</ItemSA>
            <ItemSA>{detail?.senderAddress?.city}</ItemSA>
            <ItemSA>{detail?.senderAddress?.postCode}</ItemSA>
            <ItemSA>{detail?.senderAddress?.country}</ItemSA>
          </SenderAddress>
        </FirstRow>
        <SecondRow>
          <CreatedAtAndPaymentDue>
            <InvoiceDate>
              <TitleItem>Invoice Date</TitleItem>
              <ValueInvoiceDate>
                {detail?.createdAt
                  ? dayjs(detail?.createdAt).format("DD MMM YYYY")
                  : ""}
              </ValueInvoiceDate>
            </InvoiceDate>
            <PaymentDue>
              <TitleItem>Payment Due</TitleItem>
              <ValuePaymentDue>
                {detail?.paymentDue
                  ? dayjs(detail?.paymentDue).format("DD MMM YYYY")
                  : ""}
              </ValuePaymentDue>
            </PaymentDue>
          </CreatedAtAndPaymentDue>
          <BillTo>
            <TitleItem>Bill To</TitleItem>
            <ClientName>{detail?.clientName}</ClientName>
            <ItemAddress>{detail?.clientAddress?.street}</ItemAddress>
            <ItemAddress>{detail?.clientAddress?.city}</ItemAddress>
            <ItemAddress>{detail?.clientAddress?.postCode}</ItemAddress>
            <ItemAddress>{detail?.clientAddress?.country}</ItemAddress>
          </BillTo>
          <SendTo>
            <TitleItem>Send To</TitleItem>
            <ClientEmail>{detail?.clientEmail}</ClientEmail>
          </SendTo>
        </SecondRow>
        <ThirdRow>
          <ListItem>
            <TitleListItem>
              <TitleItemName>Item Name</TitleItemName>
              <TitleItemQt>QTY.</TitleItemQt>
              <TitleItemPrice>Price</TitleItemPrice>
              <TitleItemTotal>Total</TitleItemTotal>
            </TitleListItem>
            {detail?.items?.map((item: any, index: number) => (
              <ValueItem key={index}>
                <ValueItemName>{item?.name}</ValueItemName>
                <ValueItemQty>{item?.quantity}</ValueItemQty>
                <ValueItemPrice>{formatMoney(item?.price)}</ValueItemPrice>
                <ValueItemTotal>{formatMoney(item?.total)}</ValueItemTotal>
              </ValueItem>
            ))}
          </ListItem>
          <AmountDue>
            <TitleAmountDue>Amount Due</TitleAmountDue>
            <ValueAmountDue>&#163; {formatMoney(detail?.total)}</ValueAmountDue>
          </AmountDue>
        </ThirdRow>
      </SecondSection>
      {openDelete && (
        <ModalConfirmDelete
          id={params?.id || ""}
          open={openDelete}
          setOpen={setOpenDelete}
        />
      )}
    </Wrapper>
  );
}
