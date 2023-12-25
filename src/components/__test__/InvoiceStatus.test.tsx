import { render, screen } from "@testing-library/react";
import { StatusInvoice } from "../../types";
import InvoiceStatus from "../InvoiceStatus";

describe("InvoiceStatus component", () => {
  it("renders correctly with DRAFT status", () => {
    render(<InvoiceStatus status={StatusInvoice.DRAFT} />);
    const wrapperElement = screen.getByTestId("invoice-status-wrapper");

    expect(wrapperElement).toHaveStyle({
      backgroundColor: "var(--background-invoice-draft-status)",
      color: "var(--color-text-main)",
    });
    expect(wrapperElement).toHaveTextContent("Draft");
  });

  it("renders correctly with PENDING status", () => {
    render(<InvoiceStatus status={StatusInvoice.PENDING} />);
    const wrapperElement = screen.getByTestId("invoice-status-wrapper");

    expect(wrapperElement).toHaveStyle({
      backgroundColor: "var(--background-invoice-pending-status)",
      color: "#FF8E00",
    });
    expect(wrapperElement).toHaveTextContent("Pending");
  });

  it("renders correctly with PAID status", () => {
    render(<InvoiceStatus status={StatusInvoice.PAID} />);
    const wrapperElement = screen.getByTestId("invoice-status-wrapper");

    expect(wrapperElement).toHaveStyle({
      backgroundColor: "var(--background-invoice-paid-status)",
      color: "#30C293",
    });
    expect(wrapperElement).toHaveTextContent("Paid");
  });
});
