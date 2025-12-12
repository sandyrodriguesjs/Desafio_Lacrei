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
                    <Title>Atendimento qualificado,<br />seguro e inclusivo</Title>

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
                        src="/QuemSomos.png"
                        alt="Profissional de saúde sorrindo"
                        fill={false}
                        width={0}
                        height={0}
                        sizes="100%"
                        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                    />
                </ImageBlock>
            </Content>
        </Wrapper>
    );
}
