"use client";

import Image from "next/image";
import {
  Container,
  Content,
  TopRow,
  Links,
  SocialRow,
  SocialIcons,
  SocialButton,
  SocialAndCnpjRow,
  LegalText,
  Divider,
  BackToTopDesktop,
  BackToTopMobile
} from "./styles";

import { Facebook, Instagram, Linkedin, Mail, ChevronUp } from "lucide-react";

export function Footer() {
  const handleScrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container>
      <Content>

        {/* LINHA SUPERIOR — DESKTOP */}
        <TopRow>
          <Image
            src="/LogoFooter.svg"
            width={159}
            height={48}
            alt="Logo Lacrei Saúde"
          />

          <Links>
            <a href="#">Lacrei Saúde</a>
            <a href="#">Pessoas Profissionais</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </Links>

          {/* DESKTOP: botão no topo */}
          <BackToTopDesktop onClick={handleScrollTop}>
            <ChevronUp size={24} color="#018762" />
          </BackToTopDesktop>
        </TopRow>

        {/* LINHA DOS ÍCONES + CNPJ (DESKTOP APENAS) */}
        <SocialRow>
          <SocialIcons>
            <SocialButton><Facebook size={24} color="#018762" /></SocialButton>
            <SocialButton><Instagram size={24} color="#018762" /></SocialButton>
            <SocialButton><Linkedin size={24} color="#018762" /></SocialButton>
            <SocialButton><Mail size={24} color="#018762" /></SocialButton>
          </SocialIcons>

          {/* CNPJ (somente DESKTOP) */}
          <LegalText className="desktop-only">
            CNPJ: 51.265.351/0001-65
          </LegalText>
        </SocialRow>

        {/* MOBILE: CNPJ + botão topo */}
        <SocialAndCnpjRow>
          <LegalText>CNPJ: 51.265.351/0001-65</LegalText>

          <BackToTopMobile onClick={handleScrollTop}>
            <ChevronUp size={24} color="#018762" />
          </BackToTopMobile>
        </SocialAndCnpjRow>

        <Divider />

      </Content>
    </Container>
  );
}
