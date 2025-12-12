import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  background: #ffffff; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 64px 96px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 24px;
    text-align: center;
  }
`;


export const MainContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: #2d2d2d;

  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 44px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #4d4d4d;
  max-width: 520px;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

