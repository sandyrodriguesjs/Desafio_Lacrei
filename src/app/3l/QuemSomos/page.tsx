"use client";

import Image from "next/image";
import {
  Wrapper,
  Content,
  TextBlock,
  Title,
  Description,
  ImageBlock
} from "./styles";

export default function QuemSomosPage() {
  return (
    <Wrapper>
      <Content>
        <TextBlock>
          <Title>
            Atendimento qualificado,<br />seguro e inclusivo
          </Title>

          <Description>
            Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade,
            transformamos o mundo.
          </Description>

          <Description>
            Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito
            de oferecer a melhor experiência no acesso à profissionais da saúde
            para as pessoas LGBTQIAPN+.
          </Description>

          <Description>
            Atuamos de forma ética e embasada nas regras e
            diretrizes estabelecidas pelos órgãos de classe e regulamentos.
          </Description>
        </TextBlock>

        <ImageBlock>
          <Image
            src="/QuemSomos.webp"
            alt="Profissional de saúde sorrindo"
            width={809}
            height={501}
            sizes="(max-width: 900px) 100vw, 560px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </ImageBlock>
      </Content>
    </Wrapper>
  );
}