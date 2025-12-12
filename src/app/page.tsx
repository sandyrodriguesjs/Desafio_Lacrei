"use client";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
} from "./styles";
import Link from "next/link";
import Button from "@components/Button/Button";

export default function Home() {
  return (
    <BackgroundWrapper>
      <MainContainer>
        <Title>
          Olá, você está <br />
          na Lacrei Saúde!
        </Title>

        <Description>
          Conectamos pessoas <strong>LGBTQIAPN+</strong><br />
          com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
        </Description>

        <ButtonsRow>
          <Link href="/2l/EscolhaDaPessoa" passHref>
            <Button variant="solid" aria-label="Ir para a página de escolha — opção para pacientes">
              Para pacientes
            </Button>
          </Link>
          <Link href="/2l/EscolhaDaPessoa" passHref>
            <Button variant="solid" aria-label="Ir para a página de escolha — opção para profissionais">
              Para profissionais
            </Button>
          </Link>
        </ButtonsRow>
      </MainContainer>
    </BackgroundWrapper>
  );
}