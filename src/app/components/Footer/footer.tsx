"use client";

import { memo, useCallback } from "react";
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

function FooterComponent() {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Content>
        <TopRow>
          <Image
            src="/LogoFooter.svg"
            width={159}
            height={48}
            alt="Logo Lacrei Saúde"
            priority={false}
          />

          <Links>
            <a href="#">Lacrei Saúde</a>
            <a href="#">Pessoas Profissionais</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </Links>

          <BackToTopDesktop
            onClick={handleScrollTop}
            aria-label="Voltar ao topo da página"
          >
            <ChevronUp size={24} color="#018762" />
          </BackToTopDesktop>
        </TopRow>

        <SocialRow>
          <SocialIcons>
            <SocialButton as="a"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar nosso Facebook"
            >
              <Facebook size={24} color="#018762" />
            </SocialButton>

            <SocialButton as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar nosso Instagram"
            >
              <Instagram size={24} color="#018762" />
            </SocialButton>

            <SocialButton as="a"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar nosso Linkedin"
            >
              <Linkedin size={24} color="#018762" />
            </SocialButton>

            <SocialButton as="a"
              href="https://mail.google.com/mail"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envie-nos um email"
            >
              <Mail size={24} color="#018762" />
            </SocialButton>
          </SocialIcons>

          <LegalText className="desktop-only">
            CNPJ: 51.265.351/0001-65
          </LegalText>
        </SocialRow>

        <SocialAndCnpjRow>
          <LegalText>CNPJ: 51.265.351/0001-65</LegalText>

          <BackToTopMobile
            onClick={handleScrollTop}
            aria-label="Voltar ao topo da página"
          >
            <ChevronUp size={24} color="#018762" />
          </BackToTopMobile>
        </SocialAndCnpjRow>

        <Divider />
      </Content>
    </Container>
  );
}

export const Footer = memo(FooterComponent);
