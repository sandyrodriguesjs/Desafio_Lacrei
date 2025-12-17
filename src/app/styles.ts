import styled from "styled-components";


import {
  headlineXl,
  headlineLg,
  textXl,
  textBase,
} from "../app/designTokens/tipography";
import {
  colorBrandPrimary,
  colorTextBody,
  colorTextHeading,
  colorBackgroundDefault
} from "./designTokens/colorTokens";

import {
  spacingLayoutXl,
  spacingLayoutL,
  spacingL,
  spacingM,
} from "../app/designTokens/spacing";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  ${colorBackgroundDefault};
  background-image: url("/BackgroundHome.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  contain: layout paint;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: ${spacingLayoutL} ${spacingLayoutXl};

  @media (max-width: 1024px) {
    padding: ${spacingL} ${spacingM};
    justify-content: center;
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  max-width: 560px;

  display: flex;
  flex-direction: column;
  gap: ${spacingM};
`;

/* --------------------------------
 * TITLE
 * -------------------------------- */
export const Title = styled.h1`
  ${headlineXl};
  ${colorBrandPrimary};
  max-width: 14ch;

  @media (max-width: 1024px) {
    ${headlineLg};
    text-align: center;
     max-width: 100%;
  }
`;

/* --------------------------------
 * DESCRIPTION
 * -------------------------------- */
export const Description = styled.p`
  ${textXl};
  ${colorTextBody};
  max-width: 520px;

  strong {
    ${colorTextHeading};
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    ${textBase};
    text-align: center;
  }
`;

/* --------------------------------
 * BUTTONS
 * -------------------------------- */
export const ButtonsRow = styled.div`
  display: flex;
  gap: ${spacingM};

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;
