"use client";

import Image from "next/image";
import {
  Container,
  Content,
  LogoArea,
  NavGroup,
  ButtonBase,
  ButtonPrimary,
  MobileButtons,
  HelpButton,
  LoginIconButton,
} from "./styles";

import { User, HelpCircle } from "lucide-react";

export function Header() {
  return (
    <Container>
      <Content>
        
        {/* LOGO */}
        <LogoArea>
          <Image
            src="/LogoHeader.svg"
            width={169}
            height={48}
            alt="Lacrei Saúde"
          />
        </LogoArea>

        {/* DESKTOP NAV */}
        <NavGroup>
          <ButtonBase>Quem somos</ButtonBase>
          <ButtonBase>Ajuda</ButtonBase>
          <ButtonPrimary>
            <User size={18} /> Entrar
          </ButtonPrimary>
        </NavGroup>

        {/* MOBILE ONLY */}
        <MobileButtons>
          <HelpButton aria-label="ajuda">
            <HelpCircle size={24} />
          </HelpButton>

          <LoginIconButton aria-label="abrir opções de entrada">
            <User size={24} />
          </LoginIconButton>
        </MobileButtons>

      </Content>
    </Container>
  );
}
