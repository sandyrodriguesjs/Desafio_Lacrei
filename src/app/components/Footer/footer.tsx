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

          <BackToTopDesktop onClick={handleScrollTop} aria-label="Voltar ao topo da página">
            <ChevronUp size={24} color="#018762" />
          </BackToTopDesktop>
        </TopRow>

        <SocialRow>
          <SocialIcons>
            <SocialButton>
              <Facebook size={24}
                color="#018762"
                onClick={() => window.open("https://www.facebook.com", "_blank")}
                aria-label="Visitar nosso Facebook" />
            </SocialButton>
            <SocialButton>
              <Instagram size={24}
                color="#018762"
                onClick={() => window.open("https://www.instagram.com", "_blank")}
                aria-label="Visitar nosso Instagram" />
            </SocialButton>
            <SocialButton><Linkedin
              size={24}
              color="#018762"
              onClick={() => window.open("https://www.linkedin.com", "_blank")}
              aria-label="Visitar nosso Linkedin" />
            </SocialButton>
            <SocialButton>
              <Mail
                size={24}
                color="#018762"
                onClick={() => window.open("https://mail.google.com/mail", "_blank")}
                aria-label="Envie-nos um email" />
            </SocialButton>
          </SocialIcons>

          <LegalText className="desktop-only">
            CNPJ: 51.265.351/0001-65
          </LegalText>
        </SocialRow>

        <SocialAndCnpjRow>
          <LegalText>CNPJ: 51.265.351/0001-65</LegalText>

          <BackToTopMobile onClick={handleScrollTop} aria-label="Voltar ao topo da página">
            <ChevronUp size={24} color="#018762" />
          </BackToTopMobile>
        </SocialAndCnpjRow>

        <Divider />

      </Content>
    </Container>
  );
}
