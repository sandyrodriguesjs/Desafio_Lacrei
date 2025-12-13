import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 96px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  padding: 0 32px;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  contain: layout paint;

  @media (max-width: 768px) {
    padding: 24px 16px;
    height: auto;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: 169px;
  }

  @media (max-width: 768px) {
    img {
      width: 133.67px;
      height: 16px;
    }
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 10px 32px;

  gap: 8px;

  background: #ffffff;
  color: #018762;

  font-size: 18px;
  font-weight: 700;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f3fdfb;
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  background: #018762;
  color: #ffffff;
`;

export const MobileButtons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const HelpButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  color: #018762;

  cursor: pointer;
`;

export const LoginIconButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #018762;
  color: white;

  border-radius: 8px;
  border: none;

  cursor: pointer;
`;






