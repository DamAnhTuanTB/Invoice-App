import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ListInvoice from "..";
import AppContext from "../../../contexts";

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
  setActionFormInvoice: jest.fn(),
};

describe("List Invoice", () => {
  it("renders list invoice with elements", () => {
    setUp(mockContext);
    const listInvoice = screen.getByTestId("list-invoice-element");
    expect(listInvoice).not.toBeNull();
  });

  it("renders list invoice in case empty list invoice", () => {
    setUp({ ...mockContext, invoices: [] });
    const contentEmpty = screen.getByTestId("content-empty-list");
    expect(contentEmpty).not.toBeNull();
  });

  it("renders list invoice in case has list invoice", () => {
    setUp(mockContext);
    const invoiceList = screen.getByTestId("content-invoice-list");
    expect(invoiceList).not.toBeNull();
  });

  it("should open modal add new invoice when click button Add invoice", async () => {
    const setActionFormInvoice = jest.fn();
    setUp({ ...mockContext, setActionFormInvoice });
    const buttonAdd = screen.getByText("New Invoice");
    fireEvent.click(buttonAdd);
    await waitFor(() => {
      expect(setActionFormInvoice).toHaveBeenCalled();
    });
  });
});

const setUp = (appContext: any) => {
  render(
    <AppContext.Provider value={appContext}>
      <Router>
        <ListInvoice />
      </Router>
    </AppContext.Provider>
  );
};
