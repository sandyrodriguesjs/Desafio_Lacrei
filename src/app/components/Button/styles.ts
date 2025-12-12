import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ variant: "solid" | "outline" }>`
  height: 48px;
  padding: 10px 32px;

  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
  transition: 0.2s;

  /* VARIANT: SOLID */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background: #018762;
      color: #ffffff;
      border: none;
      box-shadow: 0px 8px 16px rgba(1, 135, 98, 0.25);

      &:hover {
        background: #017256;
      }
    `}

  /* VARIANT: OUTLINE */
  ${({ variant }) =>
    variant === "outline" &&
    css`
      background: #ffffff;
      color: #018762;
      border: 2px solid #018762;

      &:hover {
        background: #f3fdfb;
      }
    `}
`;
