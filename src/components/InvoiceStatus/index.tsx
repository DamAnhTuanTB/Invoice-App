import { StatusInvoice } from "../../types";
import { Circle, Wrapper } from "./styles";

export default function InvoiceStatus({ status }: { status: StatusInvoice }) {
  return (
    <Wrapper
      data-testid="invoice-status-wrapper"
      style={{
        backgroundColor:
          status === StatusInvoice.DRAFT
            ? "var(--background-invoice-draft-status)"
            : status === StatusInvoice.PENDING
            ? "var(--background-invoice-pending-status)"
            : "var(--background-invoice-paid-status)",
        color:
          status === StatusInvoice.DRAFT
            ? "var(--color-text-main)"
            : status === StatusInvoice.PENDING
            ? "#FF8E00"
            : "#30C293",
      }}
    >
      <Circle
        style={{
          backgroundColor:
            status === StatusInvoice.DRAFT
              ? "var(--color-text-main)"
              : status === StatusInvoice.PENDING
              ? "#FF8E00"
              : "#30C293",
        }}
      />
      {status && status[0].toUpperCase().concat(status.slice(1))}
    </Wrapper>
  );
}
