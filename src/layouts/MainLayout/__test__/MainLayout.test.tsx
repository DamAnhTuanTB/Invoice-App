import { cleanup, render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "../../../contexts";
import MainLayout from "../index";

afterEach(() => {
  cleanup();
});

const mockContext = {
  theme: "dark",
  actionFormInvoice: null,
};

describe("Main Layout", () => {
  it("renders the main layout with elements", () => {
    setUp(mockContext);
    const headerElement = screen.getByTestId("sidebar-element");
    const contentElement = screen.getByTestId("content-element");
    expect(headerElement).not.toBeNull();
    expect(contentElement).not.toBeNull();
  });

  it("renders form invoice with elements", () => {
    setUp({ ...mockContext, actionFormInvoice: "add" });
    const formInvoiceElement = screen.getByTestId("form-invoice-element");
    expect(formInvoiceElement).not.toBeNull();
  });
});

const setUp = (appContext: any) => {
  render(
    <AppContext.Provider value={appContext}>
      <Router>
        <MainLayout />
      </Router>
    </AppContext.Provider>
  );
};
