import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ variant: "solid" | "outline" }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 10px 32px;

  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;

  vertical-align: middle;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;

  /* VARIANT: SOLID */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background: #018762;
      color: #ffffff;
      border: 2px solid transparent;
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
