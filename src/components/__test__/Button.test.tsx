import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

afterEach(() => {
  cleanup();
});

const mockProps = {
  text: "Button",
  background: "blue",
  handleClick: jest.fn(),
};

describe("Button Component", () => {
  it("renders the button component", () => {
    setUp(mockProps);
    const buttonElement = screen.getByTestId("button-element");
    expect(buttonElement).not.toBeNull();
  });

  it("renders the button component include icon", () => {
    setUp({ ...mockProps, icon: true });
    const iconElement = screen.getByTestId("icon-button-element");
    expect(iconElement).not.toBeNull();
  });

  it("check click button component", () => {
    const handleClick = jest.fn();
    setUp({ ...mockProps, handleClick });
    const buttonElement = screen.getByTestId("button-element");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});

const setUp = ({
  text,
  background,
  handleClick,
  icon = false,
}: {
  text: string;
  background: string;
  icon?: boolean;
  handleClick: any;
}) => {
  render(
    <Button
      text={text}
      background={background}
      handleClick={handleClick}
      icon={icon}
    />
  );
};
