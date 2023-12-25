import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailInvoice from "..";
import AppContext from "../../../contexts";
import { StatusInvoice } from "../../../types";

afterEach(() => {
  cleanup();
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockContext = {
  invoices: [{ id: "1" }],
  setInvoices: jest.fn(),
  setEditInvoice: jest.fn(),
  setActionFormInvoice: jest.fn(),
};

describe("Detail Invoice", () => {
  it("renders detail invoice", () => {
    setUp(mockContext);
    const detailInvoice = screen.getByTestId("detail-invoice-element");
    expect(detailInvoice).not.toBeNull();
  });

  it("should open modal delete when click button delete", async () => {
    setUp(mockContext);
    const buttonDelete = screen.getByText("Delete");
    fireEvent.click(buttonDelete);
    await waitFor(() => {
      const modalDelete = screen.getByTestId("modal-confirm-delete");
      expect(modalDelete).not.toBeNull();
    });
  });

  it("should open form invoice edit when click button edit", async () => {
    const setActionFormInvoice = jest.fn();
    setUp({ ...mockContext, setActionFormInvoice });
    const buttonEdit = screen.getByText("Edit");
    fireEvent.click(buttonEdit);
    await waitFor(() => {
      expect(setActionFormInvoice).toHaveBeenCalled();
    });
  });

  it("should mark as paid when click button mark as paid", async () => {
    setUp({
      ...mockContext,
      invoices: [{ id: "1", status: StatusInvoice.PENDING }],
    });
    const buttonMark = screen.getByText("Mark as Paid");
    fireEvent.click(buttonMark);
    await waitFor(() => {
      const successText = screen.getByText("Successfully Mark as Paid!");
      expect(successText).not.toBeNull();
    });
  });
});

const setUp = (appContext: any) => {
  render(
    <AppContext.Provider value={appContext}>
      <MemoryRouter initialEntries={["/invoice/1"]}>
        <Routes>
          <Route path="/invoice/:id" element={<DetailInvoice />} />
        </Routes>
      </MemoryRouter>
    </AppContext.Provider>
  );
};
