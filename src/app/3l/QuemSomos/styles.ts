import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background: #ffffff;

  display: flex;
  justify-content: center;

  padding: 64px 0;

  min-height: 520px;
  contain: layout paint;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 64px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 0 24px;
    gap: 32px;
  }
`;

export const TextBlock = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #2d2d2d;
  line-height: 44px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;
`;

export const ImageBlock = styled.div`
  flex: 1;
  max-width: 560px;
  width: 100%;

  position: relative;
  aspect-ratio: 4 / 3;

  border-radius: 16px;
  overflow: hidden;
`;
