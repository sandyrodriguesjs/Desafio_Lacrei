"use client";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
  SolidButton
} from "./styles";

export default function Home() {
  return (
    <BackgroundWrapper>
      <MainContainer>
        <Title>
          Olá, você está na <br />
          <span>Lacrei Saúde!</span>
        </Title>

        <Description>
          Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais da
          saúde qualificados, proporcionando experiências de cuidado seguras e
          inclusivas.
        </Description>

        <ButtonsRow>
          <SolidButton>Para pacientes</SolidButton>
          <SolidButton>Para profissionais</SolidButton>
        </ButtonsRow>
      </MainContainer>
    </BackgroundWrapper>
  );
}
