# 🚀 Portfolio Dario Reis - PWA Multilíngue

Portfólio moderno, responsivo e multilíngue inspirado na interface do VS Code. Construído com React, Vite, TypeScript e Tailwind CSS, ele destaca projetos, serviços, trajetória profissional e canais de contato de forma imersiva, com animações fluidas e suporte a instalação como aplicativo (manifesto PWA).

![Portfolio Screenshot](https://github.com/user-attachments/assets/24487151-bff4-4613-9021-9c0d1d7dfbbc)

## 📚 Sumário
- [Visão Geral](#visão-geral)
- [Destaques](#destaques)
- [Tecnologias](#tecnologias)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Internacionalização](#internacionalização)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [CI/CD](#cicd)
- [Boas práticas e padrões](#boas-práticas-e-padrões)
- [Deploy](#deploy)
- [Contato](#contato)

## Visão Geral
- Layout completo inspirado no VS Code com titlebar, navegação lateral responsiva e status bar personalizados.
- Experiência multilíngue (Português BR/PT, Inglês e Espanhol) com detecção, persistência e tradução de todo o conteúdo.
- Seções animadas com Framer Motion, efeitos de digitação, cartões interativos e filtros para facilitar a navegação.
- Manifesto PWA, ícones e metadados SEO prontos para instalação em dispositivos e compartilhamento em redes sociais.
- Stack moderna com componentes shadcn/ui, gerenciamento de tema com persistência e base para requisições com React Query.

## Destaques
### 🎨 Visual e UX
- **Loading Screen animada** com barra de progresso, animação pulse e indicadores de carregamento. (`src/App.tsx`)
- **Header VS Code** com seletor de idioma, alternância de tema (light/dark/system) e identificação da página atual. (`src/components/Header.tsx`)
- **Navegação adaptativa**: menu lateral/flutuante em mobile e tabs com efeito "água" no desktop. (`src/components/Navigation.tsx`)
- **Status Bar dinâmica** exibindo informações contextuais, horário e estado da aplicação. (`src/components/StatusBar.tsx`)

### 📄 Conteúdo interativo
- **Home** com efeito typewriter, CTAs rápidos e vitrine de skills em cartões animados. (`src/components/sections/HomeSection.tsx`)
- **Sobre** com linha do tempo profissional, estatísticas e destaque de formações. (`src/components/sections/AboutSection.tsx`)
- **Serviços** organizados em cards com detalhes expandíveis e categorização por solução. (`src/components/sections/ServicesSection.tsx`)
- **Projetos** com filtro por categoria, badges de tecnologias e ações rápidas para demo/GitHub. (`src/components/sections/ProjectsSection.tsx`)
- **Contato** com formulário controlado, feedback via toasts, cartões de contato rápido (WhatsApp, LinkedIn, GitHub, E-mail) e informações de localização/horário. (`src/components/sections/ContactSection.tsx`)
- **Página 404** altamente interativa com animações, navegação rápida e restauração do título da aba. (`src/pages/NotFound.tsx`)

### 🤖 Assistente e engajamento
- **FAQ Bot (Airi)**: chat flutuante com animações, lista de perguntas frequentes, mensagens temporizadas e suporte multilíngue. (`src/components/FAQBot.tsx`)
- **Toasts e notificações** centralizados via `@/components/ui/toaster` e `sonner`, garantindo feedback consistente.

### 🌍 Internacionalização e acessibilidade
- 4 idiomas com dicionário centralizado e fácil expansão. (`src/components/LanguageProvider.tsx`)
- Títulos de página, CTA, formulários, mensagens e bot do FAQ traduzidos dinamicamente.
- Detecção do idioma do navegador, persistência em localStorage e atualização do `document.title` conforme a rota.

### ⚙️ Performance e fundamentos técnicos
- Estrutura modular com providers para **tema**, **idioma** e **React Query** já configurados. (`src/App.tsx`)
- Manifesto PWA, ícones maskable e meta tags completas (Open Graph, Twitter, Schema.org, preconnect). (`public/manifest.json`, `index.html`)
- Rotas com React Router DOM, lazy transitions via `AnimatePresence` e efeitos controlados em todas as páginas. (`src/pages/Layout.tsx`)

## Tecnologias
**Core**
- React 18 + TypeScript
- Vite 5 (dev server e build)
- React Router DOM
- @tanstack/react-query (base para dados assíncronos)

**UI e animações**
- Tailwind CSS + tailwind-merge + tailwindcss-animate
- shadcn/ui (componentes Radix + design system)
- Framer Motion (animações)
- Radix UI (acessibilidade e interações avançadas)
- Lucide React, React Icons

**Formulários e feedback**
- shadcn/ui form helpers com react-hook-form (infra pronta)
- Toasts via `@/components/ui/toaster` e Sonner

**Ferramentas e qualidade**
- ESLint 9 com regras para React, Hooks e TypeScript
- GitHub Actions para lint/build (feature, development, production)
- Vercel rewrite configurado para SPA (`vercel.json`)

## Estrutura de Pastas
```
src/
├── App.tsx               # Composição de providers, rotas e loading screen
├── components/
│   ├── Header.tsx        # Titlebar VS Code + controles de idioma/tema
│   ├── Navigation.tsx    # Menu responsivo
│   ├── StatusBar.tsx     # Barra de status estilo editor
│   ├── FAQBot.tsx        # Assistente de FAQ flutuante
│   ├── ThemeProvider.tsx # Persistência e detecção de tema
│   ├── LanguageProvider.tsx # Dicionário e hooks de tradução
│   ├── sections/         # Seções reutilizadas nas páginas
│   └── ui/               # Componentes base (shadcn/ui)
├── hooks/                # Hooks utilitários (ex.: `use-mobile`)
├── pages/                # Composição das páginas e layout com transições
├── lib/                  # Utilidades compartilhadas
└── main.tsx              # Montagem da aplicação React
```

## Internacionalização
- Todas as chaves de texto vivem em `src/components/LanguageProvider.tsx`.
- Para adicionar um idioma:
  1. Inclua a sigla no tipo `Language`.
  2. Adicione o dicionário completo no objeto `translations`.
  3. Adicione a bandeira e nome ao seletor no `Header`.
- O idioma é detectado pelo navegador na primeira visita e persistido em `localStorage`.
- Rotas, títulos e mensagens do FAQ bot são traduzidas automaticamente.

## Como rodar o projeto
### Pré-requisitos
- Node.js 18+
- npm (ou pnpm/bun se preferir, lockfiles incluídos)

### Passos
```bash
# Clone o repositório
git clone https://github.com/darioreisjr/portifolio_2026.git
cd portifolio_2026

# Instale as dependências
npm install

# Ambiente de desenvolvimento (localhost:8080)
npm run dev
```

## Scripts disponíveis
```bash
npm run dev       # Servidor de desenvolvimento com Vite
npm run build     # Build de produção
npm run build:dev # Build com variáveis de desenvolvimento (usado na pipeline)
npm run preview   # Preview da build local
npm run lint      # Lint da base com ESLint
```

## CI/CD
Workflow automatizado com GitHub Actions (`.github/workflows`):
1. **Validate Feature Branches** (`feature-validation.yml`): lint + build para PRs direcionados à `development`.
2. **Promote to Development** (`development.yml`): lint + `npm run build:dev` a cada push na branch `development`.
3. **Promote to Production** (`production.yml`): lint + `npm run build` a cada push na branch `main`.

## Boas práticas e padrões
- Código escrito em TypeScript com importações absolutas (`@/…`).
- Classes utilitárias via Tailwind com `tailwind-merge` para evitar conflitos.
- Animações encapsuladas com Framer Motion e variantes reutilizáveis.
- Hooks e providers isolados para tema, idioma e responsividade.
- Estrutura de componentes pronta para expansão de formulários com `react-hook-form` e validações (via Zod, se necessário).

## Deploy
- Build estática gerada em `dist/` via `npm run build`.
- Arquivo `vercel.json` prepara o rewrite para Single Page Application (todas as rotas apontam para `/`).
- Manifesto e ícones PWA residem em `public/` (`manifest.json`, `icon-192.png`, `icon-512.png`, etc.).
- Hospedagem recomendada: **Vercel** ou qualquer provedor que sirva arquivos estáticos.

## Contato
**Dario Reis**
- 💼 [LinkedIn](https://linkedin.com/in/darioreisjr)
- 🐙 [GitHub](https://github.com/darioreisjr)
- 📧 [dev.darioreis@gmail.com](mailto:dev.darioreis@gmail.com)
- 📱 [WhatsApp](https://wa.me/5511961889886)

---
⭐ Se este projeto te ajudou, deixe uma estrela!
