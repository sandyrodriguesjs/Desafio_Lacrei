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
import Link from "next/link";

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
            <Link href="https://paciente.lacreisaude.com.br" passHref>
              <Button variant="solid" aria-label="Ir para a página de buscar atendimento - opção para pacientes">Buscar atendimento</Button>
            </Link>
            <Link href="https://paciente.lacreisaude.com.br" passHref>
              <Button variant="outline" aria-label="Ir para a página de buscar atendimento - opção para profissionais">Oferecer atendimento</Button>
            </Link>
          </ButtonsRow>
        </MainContainer>

        <Image
          src="/Escolha-da-Pessoa.webp"
          alt="Profissionais de saúde"
          width={480}
          height={600}
          sizes="(max-width: 900px) 100vw, 480px"
          placeholder="blur"
          blurDataURL="/Escolha-da-Pessoa-blur.webp"
          loading="lazy"
          quality={70}
          style={{
            objectFit: "cover",
            display: "block"
          }}
        />

      </BackgroundWrapper>
    </>
  );
}
