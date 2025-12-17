import styled from "styled-components";
import { textBase } from "../../designTokens/tipography";
import { textXs } from "../../designTokens/tipography";
import { colorBorderDivider, colorIconAccent } from "../../designTokens/colorTokens";
import { colors } from "../../designTokens/colors";
import { colorBackgroundDefault } from "../../designTokens/colorTokens";
import { colorBorderHover } from "../../designTokens/colorTokens";
import { fontPrimary } from "../../designTokens/fonts";
import { spacingLayoutL } from "../../designTokens/spacing";
import {
  spacingS,
  spacingL,
  spacingM
} from "../../designTokens/spacing";

export const Container = styled.footer`
  width: 100%;
  min-height: 280px;
  ${colorBackgroundDefault};
  border-top: 1px solid #e0e0e0;
  
  contain: layout;
  will-change: transform;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${spacingLayoutL};
  
  display: flex;
  flex-direction: column;
  gap: ${spacingL};
  
  @media (max-width: 768px) {
    gap: ${spacingM};
    padding: ${spacingM} ${spacingS};
    contain: content;
  }

  @media (max-width: 375px) {
    padding: ${spacingS};
    gap: ${spacingS};
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  min-height: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacingM};
    min-height: auto;
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: ${spacingM};
  
  min-height: 24px;

  a {
    ${fontPrimary}
    ${textBase};
    color: ${colors.gray70};
    text-decoration: none;
    will-change: transform;
    
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacingS};
    min-height: 140px;
    width: 100%;
  }

  @media (max-width: 375px) {
    min-height: 120px;
    gap: 8px;
  }
`;

const BaseBackToTop = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colorBorderHover};
  ${colorBackgroundDefault};
  box-shadow: 0px 8px 10px #0000004D;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  flex-shrink: 0;
  
  &:hover {
    background: #f3fdfb;
  }
    
  @media (max-width: 768px) {
    box-shadow: none;
    width: 40px;
    height: 40px;
  }
`;

export const BackToTopDesktop = styled(BaseBackToTop)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackToTopMobile = styled(BaseBackToTop)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SocialRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  min-height: 56px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacingS};
    min-height: 96px;
    padding: ${spacingS} 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${spacingS};
  min-height: 48px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 8px;
    min-height: 40px;
  }
`;

export const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  ${colorIconAccent};
  
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
    
`;

export const LegalText = styled.p`
  ${textXs};
  color: ${colors.gray70};
  min-height: 20px;
  margin: 0;
  
  &.desktop-only {
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    min-height: 18px;
  }
`;

export const SocialAndCnpjRow = styled.div`
  width: 100%;
  display: none;
  min-height: 56px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacingS} 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: solid 1px ${colorBorderDivider};
  flex-shrink: 0;
`;