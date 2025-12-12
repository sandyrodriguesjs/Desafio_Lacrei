import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "./header";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/link", () => {
  return ({ href, children }: any) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const { useRouter } = require("next/navigation");
        useRouter().push(href);
      }}
    >
      {children}
    </a>
  );
});

describe("Header Component", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    const { useRouter: mockedUseRouter } = jest.requireMock("next/navigation");
    mockedUseRouter.mockReturnValue({
      push: pushMock,
    });
  });

  test("You must navigate by clicking on the logo.", async () => {
    render(<Header />);

    const logo = screen.getByAltText("Lacrei Saúde");

    await userEvent.click(logo);

    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
