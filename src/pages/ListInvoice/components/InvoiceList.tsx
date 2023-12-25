import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import IconArrowRight from "../../../assets/icon-arrow-right.svg";
import InvoiceStatus from "../../../components/InvoiceStatus";
import { InvoiceItem } from "../../../types";
import { formatMoney } from "../../../utils/formatMoney";
import {
  ArrowRight,
  InvoiceClientName,
  InvoiceCreatedAt,
  InvoiceId,
  InvoiceTotal,
  InvoicesContent,
  ItemWrapper,
} from "../styles";

export default function InvoiceList({ invoices }: { invoices: InvoiceItem[] }) {
  const navigate = useNavigate();
  return (
    <InvoicesContent data-testid="content-invoice-list">
      {invoices?.map((item: InvoiceItem) => (
        <ItemWrapper key={item?.id}>
          <InvoiceId>
            <span>#</span>
            {item?.id}
          </InvoiceId>
          <InvoiceCreatedAt>
            Due{" "}
            {item?.paymentDue
              ? dayjs(item.paymentDue).format("DD MMM YYYY")
              : ""}
          </InvoiceCreatedAt>
          <InvoiceClientName>{item?.clientName}</InvoiceClientName>
          <InvoiceTotal>&#163; {formatMoney(item?.total)}</InvoiceTotal>
          <InvoiceStatus status={item?.status} />
          <ArrowRight onClick={() => navigate(`/invoice/${item?.id}`)}>
            <img src={IconArrowRight} alt="" />
          </ArrowRight>
        </ItemWrapper>
      ))}
    </InvoicesContent>
  );
}
