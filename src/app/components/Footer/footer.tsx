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
import { colors } from "../../designTokens/colors";


function FooterComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Container as="footer" role="contentinfo">
      <Content>
        <Divider aria-hidden="true" />

        <TopRow>
         
          <div
            style={{
              width: isMobile ? "120px" : "159px",
              height: isMobile ? "36px" : "48px",
              position: "relative",
              opacity: isLogoLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in",
              willChange: "opacity"
            }}
          >
            <Image
              src="/LogoFooter.svg"
              fill
              sizes="(max-width: 768px) 120px, 159px"
              alt="Lacrei Saúde"
              loading={isMobile ? "eager" : "lazy"}
              onLoad={() => setIsLogoLoaded(true)}
              style={{
                objectFit: "contain",
                objectPosition: "left center"
              }}
            />
          </div>

         
          <nav aria-label="Links institucionais">
            <Links>
              <a href="#" aria-label="Saiba mais sobre a Lacrei Saúde">
                Lacrei Saúde
              </a>
              <a href="#" aria-label="Profissionais da Lacrei Saúde">
                Pessoas Profissionais
              </a>
              <a href="#" aria-label="Política de Privacidade">
                Política de Privacidade
              </a>
              <a href="#" aria-label="Termos de Uso">
                Termos de Uso
              </a>
            </Links>
          </nav>

        
          <BackToTopDesktop
            onClick={handleScrollTop}
            aria-label="Voltar ao topo da página"
          >
            <ChevronUp size={24} aria-hidden="true" color={`${colors.emerald60}`} />
          </BackToTopDesktop>
        </TopRow>

        
        <SocialRow>
          <nav aria-label="Redes sociais">
            <SocialIcons>
              <SocialButton
                as="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Lacrei Saúde (abre em nova aba)"
              >
                <Facebook size={isMobile ? 20 : 24} aria-hidden="true" />
              </SocialButton>

              <SocialButton
                as="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Lacrei Saúde (abre em nova aba)"
              >
                <Instagram size={isMobile ? 20 : 24} aria-hidden="true" />
              </SocialButton>

              <SocialButton
                as="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Lacrei Saúde (abre em nova aba)"
              >
                <Linkedin size={isMobile ? 20 : 24} aria-hidden="true" />
              </SocialButton>

              <SocialButton
                as="a"
                href="https://mail.google.com/mail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar e-mail para a Lacrei Saúde (abre em nova aba)"
              >
                <Mail size={isMobile ? 20 : 24} aria-hidden="true" />
              </SocialButton>
            </SocialIcons>
          </nav>

         
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
            <ChevronUp size={isMobile ? 20 : 24} aria-hidden="true" color={`${colors.emerald60}`} />
          </BackToTopMobile>
        </SocialAndCnpjRow>

        <Divider aria-hidden="true" />
      </Content>
    </Container>
  );
}

export const Footer = memo(FooterComponent);
