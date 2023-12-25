import { useContext, useMemo, useState } from "react";
import AppContext from "../../contexts";
import { ActionFormInvoice, InvoiceItem } from "../../types";
import EmptyList from "./components/EmptyList";
import HeaderList from "./components/HeaderList";
import InvoiceList from "./components/InvoiceList";
import { Wrapper } from "./styles";

export default function ListInvoice() {
  const { invoices, setActionFormInvoice } = useContext(AppContext);
  const [status, setStatus] = useState("all");
  const listInvoice = useMemo(() => {
    return status !== "all"
      ? invoices.filter((item: InvoiceItem) => item.status === status)
      : invoices;
  }, [status, invoices]);
  const handleAddInvoice = () => {
    setActionFormInvoice(ActionFormInvoice.ADD);
  };
  return (
    <Wrapper data-testid="list-invoice-element">
      <HeaderList
        length={invoices.length}
        handleAddInvoice={handleAddInvoice}
        setStatus={setStatus}
      />
      {invoices?.length > 0 ? (
        <InvoiceList invoices={listInvoice} />
      ) : (
        <EmptyList />
      )}
    </Wrapper>
  );
}
