import { cleanup, render, screen } from "@testing-library/react";
import FormItemInput from "../FormItemInput";

afterEach(() => {
  cleanup();
});

const mockProps = {
  name: "email",
};

describe("FormItemInput Component", () => {
  it("renders the button component", () => {
    setUp(mockProps);
    const formItem = screen.getByTestId("form-item-input-element");
    expect(formItem).not.toBeNull();
  });
});

const setUp = ({ name }: { name: string }) => {
  render(<FormItemInput name={name} />);
};
