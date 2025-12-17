import styled from "styled-components";
import {
  spacingLayoutL,
  spacingLayoutXl,
  spacingL,
  spacingM,
} from "../../designTokens/spacing";
import { colorBackgroundDefault, colorTextHeading, colorTextBody } from "../../designTokens/colorTokens";
import { headlineXl, textXl } from "../../designTokens/tipography";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  ${colorBackgroundDefault};

  contain: layout paint;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${spacingLayoutL} ${spacingLayoutXl};

  & > img,
  & > span {
    display: block;
    flex: 0 0 480px;
    width: 480px;
    max-width: 100%;
    height: auto;
    min-width: 0; /* allow shrinking on small screens */
  }

  @media (max-width: 900px) {
    flex-direction: column;

    padding: ${spacingL} ${spacingM};
    text-align: center;

    /* remove large background images on small screens to reduce paint */
    background-image: none;

    & > img,
    & > span {
      flex: 0 0 auto;
      width: 100%;
      min-width: 0;
      height: auto;
      margin-top: ${spacingM};
    }
  }
`;

export const MainContainer = styled.div`
  max-width: 520px;
  flex: 0 1 520px;

  display: flex;
  flex-direction: column;
  gap: ${spacingM};

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${headlineXl};
  ${colorTextHeading};

  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 44px;
    text-align: center;
  }
`;

export const Description = styled.p`
  ${textXl};
  max-width: 520px;
  ${colorTextBody};

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: ${spacingM};

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;
