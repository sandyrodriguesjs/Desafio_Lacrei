import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/dynamic", () => {
  return (loader: any, options?: any) => {
    return (props: any) => {
      return <button {...props}>{props.children}</button>;
    };
  };
});

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

describe("Home page navigation", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    const { useRouter: mockedUseRouter } = jest.requireMock("next/navigation");
    mockedUseRouter.mockReturnValue({ push: pushMock });
  });

  afterEach(() => jest.resetAllMocks());

  test(" Navigate by clicking 'Para pacientes'", async () => {
    render(<Home />);

    const pacientes = await screen.findByLabelText(/Ir para a página de escolha para pacientes/i);

    await userEvent.click(pacientes);

    expect(pushMock).toHaveBeenCalledWith("/2l/EscolhaDaPessoa");
  });

  test("Navigate by clicking 'Para profissionais'", async () => {
    render(<Home />);

    const profs = await screen.findByLabelText(/Ir para a página de escolha para profissionais/i);

    await userEvent.click(profs);

    expect(pushMock).toHaveBeenCalledWith("/2l/EscolhaDaPessoa");
  });
});
