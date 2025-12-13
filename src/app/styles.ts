import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 100%;
  height: 80vh;
  
  background-color: #f5f5f5;
  background-image: url("/BackgroundHome.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  contain: layout paint;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 80px 120px;

  @media (max-width: 1024px) {
    padding: 40px 24px;
    text-align: center;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  max-width: 550px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: #018762;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 44px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #444;
  max-width: 520px;

  strong {
    color: #000000;
  }

  @media (max-width: 1024px) {
    text-align: center;
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
