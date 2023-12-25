import { message } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../contexts";
import { ROUTES } from "../../routes/routes";
import { InvoiceItem, ThemeEnum } from "../../types";
import Button from "../Button";
import { Description, GroupButton, Title, Wrapper } from "./styles";

export default function ModalConfirmDelete({
  open,
  setOpen,
  id,
}: {
  id: string;
  open: boolean;
  setOpen: any;
}) {
  const { invoices, setInvoices, theme } = useContext(AppContext);
  const navigate = useNavigate();
  const handleCancel = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const index = invoices.findIndex((item: InvoiceItem) => item.id === id);
    invoices.splice(index, 1);
    setInvoices([...invoices]);
    message.success("Successfully delete invoice!");
    handleCancel();
    navigate(ROUTES.LIST_INVOICE);
  };

  return (
    <Wrapper
      data-testid="modal-confirm-delete"
      theme={theme}
      open={open}
      width={600}
      centered
      closable={false}
      footer={null}
    >
      <Title>Confirm Deletion</Title>
      <Description>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </Description>
      <GroupButton>
        <Button
          background={theme === ThemeEnum.DARK_THEME ? "#252946" : "#a2a1a3ae"}
          text="Cancel"
          handleClick={handleCancel}
          color={theme === ThemeEnum.DARK_THEME ? "white" : "rgb(20,22,37)"}
        />
        <Button
          background="rgb(236,87,87)"
          text="Delete"
          handleClick={handleDelete}
        />
      </GroupButton>
    </Wrapper>
  );
}
