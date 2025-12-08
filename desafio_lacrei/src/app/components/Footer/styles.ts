import styled from "styled-components";

/* FOOTER BACKGROUND */
export const Container = styled.footer`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
`;

/* WRAPPER INTERNO */
export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

/* LINHA SUPERIOR — DESKTOP */
export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

/* LINKS */
export const Links = styled.nav`
  display: flex;
  gap: 32px;

  a {
    font-size: 16px;
    color: #2d2d2d;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

/* ESTILO BASE BOTÃO */
const BaseBackToTop = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #018762;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: #f3fdfb;
  }
`;

/* BOTÃO DESKTOP */
export const BackToTopDesktop = styled(BaseBackToTop)`
  @media (max-width: 768px) {
    display: none;
  }
`;

/* BOTÃO MOBILE */
export const BackToTopMobile = styled(BaseBackToTop)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

/* LINHA ÍCONES + CNPJ DESKTOP */
export const SocialRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialButton = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* CNPJ — DESKTOP APENAS QUANDO ESTÁ EM SocialRow */
export const LegalText = styled.p`
  font-size: 14px;
  color: #2d2d2d;

  &.desktop-only {
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

/* MOBILE: CNPJ + BOTÃO */
export const SocialAndCnpjRow = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

/* DIVISÓRIA FINAL */
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e0e0e0;
`;
