import styled, { css } from "styled-components";
import {
  colorBackgroundAccent,
  colorBackgroundSuccess,
  colorBackgroundDefault,
  colorBorderHover
}
  from "../../designTokens/colorTokens";
import {
  colorTextAccent,
  colorTextInvert
} from "../../designTokens/colorTokens";
import { textXlHigh200 } from "../../designTokens/tipography";

export const StyledButton = styled.button<{ variant: "solid" | "outline" }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 15px 35px;

  border-radius: 8px;
  ${textXlHigh200}

  vertical-align: middle;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;

  /* VARIANT: SOLID */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      ${colorBackgroundAccent}
      ${colorTextInvert}
      border: 2px solid transparent;
      box-shadow: 0px 8px 16px rgba(1, 135, 98, 0.25);

      &:hover {
        ${colorBackgroundAccent}
      }
    `}

  /* VARIANT: OUTLINE */
  ${({ variant }) =>
    variant === "outline" &&
    css`
      ${colorBackgroundDefault};
      ${colorTextAccent};
      border: 2px solid ${colorBorderHover};

      &:hover {
        ${colorBackgroundSuccess};
      }
    `}
`;
