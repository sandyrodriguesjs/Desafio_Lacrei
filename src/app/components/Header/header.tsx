"use client";

import Image from "next/image";
import Link from "next/link";

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
        <LogoArea>
          <Link href="/" aria-label="Voltar para a página inicial">
            <Image
              src="/LogoHeader.svg"
              width={169}
              height={48}
              alt="Lacrei Saúde"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </LogoArea>

        <NavGroup>
          <Link href="/3l/QuemSomos" passHref>
            <ButtonBase>Quem somos</ButtonBase>
          </Link>

          <Link href="https://lacreisaude.com.br/ajuda/" passHref>
            <ButtonBase>Ajuda</ButtonBase>
          </Link>

          <ButtonPrimary>
            <User size={18} /> Entrar
          </ButtonPrimary>
        </NavGroup>

        <MobileButtons>
          <HelpButton aria-label="ajuda">
            <HelpCircle size={24} />
          </HelpButton>

          <LoginIconButton aria-label="entrar">
            <User size={24} />
          </LoginIconButton>
        </MobileButtons>

      </Content>
    </Container>
  );
}
