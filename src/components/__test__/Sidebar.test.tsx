import { fireEvent, render, screen } from "@testing-library/react";
import AppContext from "../../contexts";
import { ThemeEnum } from "../../types";
import Sidebar from "../Sidebar";

const mockAppContextValue: any = {
  theme: ThemeEnum.DARK_THEME,
  setTheme: jest.fn(),
};

describe("Sidebar component", () => {
  it("renders correctly", () => {
    setUp(mockAppContextValue);
    const sidebarElement = screen.getByTestId("sidebar-element");
    expect(sidebarElement).toBeInTheDocument();
  });

  it("changes theme on theme icon click", () => {
    setUp(mockAppContextValue);
    const themeIcon = screen.getByAltText("icon-sun");

    fireEvent.click(themeIcon);

    expect(mockAppContextValue.setTheme).toHaveBeenCalledWith(
      ThemeEnum.LIGHT_THEME
    );
  });

  it("displays sun icon when the theme is DARK_THEME", () => {
    setUp(mockAppContextValue);

    const sunIcon = screen.getByAltText("icon-sun");
    expect(sunIcon).toBeInTheDocument();
  });

  it("displays moon icon when the theme is LIGHT_THEME", () => {
    setUp({ ...mockAppContextValue, theme: ThemeEnum.LIGHT_THEME });

    const moonIcon = screen.getByAltText("icon-moon");
    expect(moonIcon).toBeInTheDocument();
  });
});

const setUp = (appContext: any) => {
  render(
    <AppContext.Provider value={appContext}>
      <Sidebar />
    </AppContext.Provider>
  );
};
