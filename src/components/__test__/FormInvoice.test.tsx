import { cleanup, render, screen } from "@testing-library/react";

import AppContext from "../../contexts";
import { ActionFormInvoice } from "../../types";
import FormInvoice from "../FormInvoice";

afterEach(() => {
  cleanup();
});

const mockContext = {
  actionFormInvoice: ActionFormInvoice.ADD,
  editInvoice: null,
  setEditInvoice: jest.fn(),
  setActionFormInvoice: jest.fn(),
  invoices: [{ id: "1" }, { id: "2" }],
  setInvoices: jest.fn(),
};

describe("Form Invoice", () => {
  it("renders form invoice", () => {
    setUp(mockContext);
    const formInvoiceElement = screen.getByTestId("form-invoice-element");
    expect(formInvoiceElement).not.toBeNull();
  });

  it("renders form invoice in case add", () => {
    setUp(mockContext);
    const titleAddElement = screen.getByTestId("add-invoice-text");
    const groupButtonAddElement = screen.getByTestId(
      "group-button-add-invoice"
    );
    expect(titleAddElement).not.toBeNull();
    expect(groupButtonAddElement).not.toBeNull();
  });

  it("renders form invoice in case edit", () => {
    setUp({
      ...mockContext,
      editInvoice: { id: "1" },
      actionFormInvoice: ActionFormInvoice.EDIT,
    });
    const titleEditElement = screen.getByTestId("edit-invoice-text");
    const groupButtonEditElement = screen.getByTestId(
      "group-button-edit-invoice"
    );
    expect(titleEditElement).not.toBeNull();
    expect(groupButtonEditElement).not.toBeNull();
  });
});

const setUp = (appContext: any) => {
  render(
    <AppContext.Provider value={appContext}>
      <FormInvoice />
    </AppContext.Provider>
  );
};
