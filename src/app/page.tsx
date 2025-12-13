"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
} from "./styles";

// Skeleton estável (fora do render)
const ButtonSkeleton = () => (
  <div
    aria-hidden
    style={{
      padding: "12px 32px",
      borderRadius: "8px",
      background: "#f0f0f0",
      border: "none",
      minWidth: "200px",
      minHeight: "48px",
    }}
  />
);

// Dynamic import FORA do componente
const Button = dynamic(() => import("@components/Button/Button"), {
  ssr: true,
  loading: () => <ButtonSkeleton />,
});

export default function Home() {
  return (
    <BackgroundWrapper role="main">
      <MainContainer>
        <Title>
          Olá, você está <br />
          na Lacrei Saúde!
        </Title>

        <Description>
          Conectamos pessoas <strong>LGBTQIAPN+</strong>
          <br />
          com profissionais de saúde qualificados, proporcionando experiências
          de cuidado seguras e inclusivas.
        </Description>

        <ButtonsRow>
          <Link href="/2l/EscolhaDaPessoa">
            <Button
              variant="solid"
              aria-label="Ir para a página de escolha para pacientes"
            >
              Para pacientes
            </Button>
          </Link>

          <Link href="/2l/EscolhaDaPessoa">
            <Button
              variant="solid"
              aria-label="Ir para a página de escolha para profissionais"
            >
              Para profissionais
            </Button>
          </Link>
        </ButtonsRow>
      </MainContainer>
    </BackgroundWrapper>
  );
}
