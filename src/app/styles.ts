import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  background-image: url("/BackgroundHome.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 80px 120px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 24px;
    text-align: center;
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
    color: #000000ff;
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