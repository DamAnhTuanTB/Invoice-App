import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContext from "../../contexts";
import { ThemeEnum } from "../../types";
import ModalConfirmDelete from "../ModalConfirmDelete";

const mockAppContextValue: any = {
  invoices: [{ id: "1" }, { id: "2" }],
  setInvoices: jest.fn(),
  theme: ThemeEnum.DARK_THEME,
};

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const MockedProvider = ({ children }: any) => (
  <AppContext.Provider value={mockAppContextValue}>
    <Router>{children}</Router>
  </AppContext.Provider>
);

describe("ModalConfirmDelete component", () => {
  it("renders correctly", () => {
    render(<ModalConfirmDelete open id="1" setOpen={() => {}} />);
    const modalElement = screen.getByTestId("modal-confirm-delete");
    expect(modalElement).toBeInTheDocument();
  });

  it('triggers cancel function on "Cancel" button click', () => {
    const setOpenMock = jest.fn();
    render(<ModalConfirmDelete open id="1" setOpen={setOpenMock} />);

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });

  it('triggers delete function on "Delete" button click', async () => {
    const setOpenMock = jest.fn();
    render(
      <MockedProvider>
        <ModalConfirmDelete open id="1" setOpen={setOpenMock} />
      </MockedProvider>
    );

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockAppContextValue.setInvoices).toHaveBeenCalled();
    });

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
