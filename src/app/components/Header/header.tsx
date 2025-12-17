"use client";

import { memo } from "react";
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

function HeaderComponent() {
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
              priority={false}
              loading="eager"
              decoding="async"
            />
          </Link>
        </LogoArea>

        <NavGroup>
          <Link href="">
            <ButtonBase>Quem somos</ButtonBase>
          </Link>

          <Link
            href="https://lacreisaude.com.br/ajuda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonBase>Ajuda</ButtonBase>
          </Link>

          <ButtonPrimary>
            Entrar <User size={24} />
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

export const Header = memo(HeaderComponent);
