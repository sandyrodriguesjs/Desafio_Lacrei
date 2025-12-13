import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 280px;
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  contain: layout paint;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  cursor: pointer;
`;

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

export const SocialAndCnpjRow = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e0e0e0;
`;