import IconArrowDown from "../../../assets/icon-arrow-down.svg";
import Button from "../../../components/Button";
import { StatusInvoice } from "../../../types";
import {
  AppName,
  Group,
  HeaderSection,
  Name,
  Quantity,
  SelectStatus,
} from "../styles";

export default function HeaderList({
  length,
  handleAddInvoice,
  setStatus,
}: {
  length: number;
  handleAddInvoice: () => void;
  setStatus: any;
}) {
  return (
    <HeaderSection>
      <AppName>
        <Name>Invoices</Name>
        <Quantity>
          {length > 0 ? `There are ${length} total invoices` : "No invoices"}
        </Quantity>
      </AppName>
      <Group>
        <SelectStatus
          onChange={(value: StatusInvoice) => setStatus(value)}
          suffixIcon={<img src={IconArrowDown} alt="" />}
          placeholder="Filter by status"
          options={[
            { value: StatusInvoice.DRAFT, label: "Draft" },
            { value: StatusInvoice.PENDING, label: "Pending" },
            { value: StatusInvoice.PAID, label: "Paid" },
            { value: "all", label: "All" },
          ]}
        />
        <Button
          icon={true}
          background="#7C5DFA"
          text="New Invoice"
          handleClick={handleAddInvoice}
        />
      </Group>
    </HeaderSection>
  );
}
