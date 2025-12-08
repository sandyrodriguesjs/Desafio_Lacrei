import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  background-image: url("/BackgroundHome.png");
  background-size: cover;         /* cobre todo o espaço */
  background-position: center;    /* centraliza igual ao Figma */
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  padding: 64px 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 600px; /* largura apenas do bloco de texto */
  
  padding-left: 96px;
  padding-right: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  align-items: flex-start;

  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
      
    padding-left: 24px;
    padding-right: 24px;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  color: #018762;

  span {
    color: #018762;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Description = styled.p`
  max-width: 520px;

  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;

  strong {
    color: #018762;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SolidButton = styled.button`
  height: 48px;
  padding: 10px 32px;

  border-radius: 8px;
  border: none;

  background: #018762;
  color: #ffffff;

  font-size: 16px;
  font-weight: 700;

  box-shadow: 0px 8px 16px rgba(1, 135, 98, 0.25);

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #017256;
  }
`;
