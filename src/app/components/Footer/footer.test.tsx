import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Footer } from "./footer";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ src, alt, priority, ...props }: any) => {
        return <img src={src} alt={alt} {...props} />;
    },
}));

describe("Footer Component", () => {
    beforeEach(() => {
        (window as any).scrollTo = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("You should scroll to the top by clicking the back-to-top button", async () => {
        render(<Footer />);

        const button = screen.getByRole("button", {
            name: /Voltar ao topo da página/i,
        });

        await userEvent.click(button);

        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });
});
