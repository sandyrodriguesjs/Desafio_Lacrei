"use client";
import Image from "next/image";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
} from "./styles";
import Button from "@components/Button/Button";

export default function EscolhaDaPessoaPage() {
  return (
    <>
      <BackgroundWrapper>
        <MainContainer>
          <Title>
            Junte-se à <br />
            nossa comunidade
          </Title>

          <Description>
            Encontre atendimento clínico de qualidade ou entre para o time de
            profissionais da Lacrei Saúde.
          </Description>

          <ButtonsRow>
            <Button variant="solid" aria-label="Ir para a página de buscar atendimento - opção para pacientes">Buscar atendimento</Button>
            <Button variant="outline" aria-label="Ir para a página de buscar atendimento - opção para profissionais">Oferecer atendimento</Button>
          </ButtonsRow>
        </MainContainer>

        <Image
          src="/EscolhaDaPessoa.svg"
          alt="Profissionais de saúde"
          width={480}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </BackgroundWrapper>
    </>
  );
}
