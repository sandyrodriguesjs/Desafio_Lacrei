##🚀 Projeto Lacrei Saúde: Desafio Front EndEste repositório apresenta a construção de uma aplicação web utilizando **Next.js (App Router)** e **TypeScript**. O foco do desenvolvimento foi a fidelidade visual ao layout fornecido (Figma), componentização, roteamento e testes unitários.

Foram desenvolvidos componentes reutilizáveis (**Header**, **Footer** e **Button**) e páginas com navegação interna, mantendo **responsividade** e boas práticas de **acessibilidade** (atributos ARIA quando necessário).

---

##💻 Tecnologias Utilizadas* **Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Styled-Components
* **Testes:** Jest e React Testing Library
* **Ícones:** Lucide React

---

##🛠️ Funcionalidades Implementadas###1. Header e Footer (Componentes Reutilizáveis)O Header e o Footer foram implementados com Styled-Components para garantir reutilização, organização e consistência visual.

####Header* Logo clicável que redireciona para a **página inicial** (`/`).
* Botão **“Quem somos”** com roteamento interno para `/3l/QuemSomos`.
* Botão **“Ajuda”** com link externo para a página oficial de ajuda.
* **Layout responsivo:** Versão desktop e versão mobile com botões por ícone.

####Footer* Links institucionais.
* Ícones sociais com links externos (Facebook, Instagram, Linkedin e E-mail).
* Botão **“voltar ao topo”** (desktop e mobile).
* CNPJ exibido corretamente (sem duplicação no mobile).

###2. Roteamento (App Router)O projeto utiliza o sistema de rotas do Next.js baseado em pastas dentro de `src/app/pages`.

| Página | Rota |
| --- | --- |
| Página Inicial (Home) | `/` |
| Escolha da Pessoa | `/2l/EscolhaDaPessoa` |
| Quem Somos | `/3l/QuemSomos` |

###3. Botões ReutilizáveisFoi criado um componente **`Button`** reutilizável para padronizar os botões do projeto e facilitar a manutenção.

####Variações* `solid` (botão preenchido)
* `outline` (botão com borda)

O componente é utilizado nas páginas (ex.: Home e Escolha da Pessoa), mantendo o mesmo estilo visual em todo o sistema.

###4. Acessibilidade (ARIA)Foram aplicados atributos ARIA quando necessário para melhorar navegação e entendimento por leitores de tela:

* `aria-label` em botões ícone-only (ex.: ajuda e entrar no mobile).
* `aria-label` no link da logo para indicar “Voltar para a página inicial”.

---

##🔗 Demonstração e AcessoO projeto está hospedado e pode ser acessado em:

**[Acessar Demonstração no Vercel](https://desafio-lacrei-saude-mu.vercel.app)**

###Versão Desktop* **Página Inicial (Home)** com hero, texto e botões de navegação.
* **Página Escolha da Pessoa** com layout de texto + imagem ao lado.
* **Página Quem Somos** com texto institucional + imagem em destaque.

###Versão Mobile* Header com botões reduzidos para ícones.
* Layout das páginas ajustado para empilhamento e alinhamento central.
* Footer adaptado com botão “voltar ao topo” e CNPJ na linha correta.

---

##⚙️ Como Iniciar###Instalação1. **Clone o repositório:**
```bash
git clone https://github.com/sandyrodriguesjs/desafio-lacrei-saude.git

```


2. **Instale as dependências:**
```bash
npm install

```



###Inicie o ServidorPara iniciar o servidor de desenvolvimento:

```bash
npm run dev

```

Acesse o projeto em:

```
http://localhost:3000

```

###Testes UnitáriosPara executar os testes unitários e verificar a cobertura:

```bash
npm run test

```

####Cobertura de testes implementada* Testes do Header (renderização e links principais).
* Testes do Footer (renderização e estrutura).

---

##📝 Comentários sobre Escolhas Técnicas* **Styled-Components** foi escolhido para manter os estilos organizados por componente e facilitar a manutenção.
* **Componentização** (`Header`/`Footer`/`Button`) garante reutilização e consistência visual.
* **React Testing Library** foi utilizada por testar o comportamento do componente do ponto de vista do usuário.
* Uso de **rotas por pasta (App Router)** simplifica a estrutura e deixa o projeto mais alinhado com o padrão moderno do Next.js.


```