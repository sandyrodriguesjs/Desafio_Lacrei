"use client";

import { memo, useCallback, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Detecta mobile para otimização
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Container>
      <Content>
        <Divider />
        <TopRow>
          {/* Otimização da imagem para LCP */}
          <div style={{
            width: isMobile ? "120px" : "159px",
            height: isMobile ? "36px" : "48px",
            position: "relative",
            opacity: isLogoLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in",
            willChange: "opacity"
          }}>
            <Image
              src="/LogoFooter.svg"
              fill
              sizes="(max-width: 768px) 120px, 159px"
              alt="Logo Lacrei Saúde"
              priority={false}
              loading={isMobile ? "eager" : "lazy"}
              onLoad={() => setIsLogoLoaded(true)}
              style={{
                objectFit: "contain",
                objectPosition: "left center"
              }}
            />
          </div>

          <Links>
            <a href="#" aria-label="Saiba mais sobre a Lacrei Saúde">Lacrei Saúde</a>
            <a href="#" aria-label="Profissionais da Lacrei Saúde">Pessoas Profissionais</a>
            <a href="#" aria-label="Política de privacidade">Política de Privacidade</a>
            <a href="#" aria-label="Termos de uso">Termos de Uso</a>
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
              aria-label="facebook site externo - abrirá uma nova janela"
            >
              <Facebook size={isMobile ? 20 : 24} />
            </SocialButton>

            <SocialButton as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram site externo - abrirá uma nova janela"
            >
              <Instagram size={isMobile ? 20 : 24} />
            </SocialButton>

            <SocialButton as="a"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin site externo - abrirá uma nova janela"
            >
              <Linkedin size={isMobile ? 20 : 24} />
            </SocialButton>

            <SocialButton as="a"
              href="https://mail.google.com/mail"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="e-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a Lacrei saúde como destinatário"
            >
              <Mail size={isMobile ? 20 : 24} />
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
            <ChevronUp size={isMobile ? 20 : 24} color="#018762" />
          </BackToTopMobile>
        </SocialAndCnpjRow>

        <Divider />
      </Content>
    </Container>
  );
}

export const Footer = memo(FooterComponent);