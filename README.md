# 🚀 Portfolio Dario Reis - PWA Multilíngue

Portfolio moderno e responsivo inspirado no VS Code, construído com React, Vite, TypeScript e Tailwind CSS. Suporte completo a PWA e múltiplos idiomas.

![Portfolio Screenshot](https://github.com/user-attachments/assets/24487151-bff4-4613-9021-9c0d1d7dfbbc)


## ✨ Características

### 🎨 Design e UX
- **Tema VS Code**: Interface inspirada no Visual Studio Code com titlebar, tabs e status bar
- **Dark/Light Mode**: Alternância de temas com persistência no localStorage
- **Responsivo**: Design adaptativo para desktop, tablet e mobile
- **Animações**: Transições suaves com Framer Motion e efeitos CSS customizados
- **Efeito Água**: Animação fluida no menu de navegação desktop

### 🌍 Multilíngue
- **3 Idiomas**: Português (BR), English (US), Português (PT)
- **Detecção Automática**: Identifica idioma do navegador
- **Rotas Localizadas**: URLs e conteúdo adaptados por idioma
- **SEO Multilíngue**: Meta tags e structured data por idioma

### 📱 PWA (Progressive Web App)
- **Instalável**: Pode ser instalado como app nativo
- **Offline Ready**: Service Worker para cache de recursos
- **Ícones**: Conjunto completo de ícones para diferentes dispositivos
- **Manifest**: Configuração completa para stores

### 🔧 Funcionalidades
- **Seções Completas**: Home, Sobre, Serviços, Projetos, Contato
- **Formulário de Contato**: Validação com Zod e envio via API
- **Filtro de Projetos**: Filtragem por categoria (Web, Mobile, Backend)
- **FAQ Interativo**: Acordeões com perguntas frequentes
- **Links Sociais**: Integração com WhatsApp, LinkedIn, GitHub

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI reutilizáveis

### Ferramentas
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones SVG
- **React Query** - Estado do servidor
- **React Router DOM** - Roteamento

### PWA & Performance
- **Vite PWA** - Service Worker automático
- **Web App Manifest** - Configuração de instalação
- **Lazy Loading** - Carregamento otimizado
- **Tree Shaking** - Bundle otimizado

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/darioreisjr/portfolio-pwa.git

# Entre no diretório
cd portfolio-pwa

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint

# Type checking
npm run type-check
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── sections/           # Seções da página
│   ├── Header.tsx          # Cabeçalho VS Code
│   ├── Navigation.tsx      # Menu flutuante/mobile
│   ├── StatusBar.tsx       # Barra de status
│   ├── ThemeProvider.tsx   # Gerenciamento de tema
│   └── LanguageProvider.tsx# Gerenciamento de idioma
├── hooks/                  # Custom hooks
├── lib/                    # Utilitários
├── pages/                  # Páginas principais
└── assets/                 # Recursos estáticos

public/
├── manifest.json           # PWA manifest
├── icon-*.png             # Ícones PWA
├── og-image.png           # Open Graph image
└── robots.txt             # SEO
```

## 🎨 Personalização

### Cores e Tema
As cores estão definidas no design system em `src/index.css`:

```css
:root {
  /* VS Code Light Theme */
  --primary: 213 78% 54%;        /* Azul principal */
  --accent: 202 90% 56%;         /* Ciano destaque */
  --success: 142 71% 45%;        /* Verde sucesso */
  /* ... */
}

.dark {
  /* VS Code Dark Theme */
  --primary: 213 78% 54%;
  --accent: 202 90% 56%;
  /* ... */
}
```

### Adicionando Idiomas
1. Edite `src/components/LanguageProvider.tsx`
2. Adicione as traduções no objeto `translations`
3. Configure a nova flag no componente Header

### Customizando Projetos
Edite o array `projects` em `src/components/sections/ProjectsSection.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição do projeto...',
    image: 'url-da-imagem',
    technologies: ['React', 'Node.js'],
    category: 'web',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/repo'
  }
];
```

### Configurando Serviços
Modifique `src/components/sections/ServicesSection.tsx` para seus serviços:

```typescript
const services = [
  {
    icon: Globe,
    titleKey: 'services.web.title',
    descriptionKey: 'services.web.description',
    priceKey: 'services.web.price',
    // ...
  }
];
```

## 📧 Configuração de E-mail

### Integração com EmailJS
1. Crie conta no [EmailJS](https://emailjs.com)
2. Configure seu template
3. Adicione as variáveis de ambiente:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

### Integração com Resend
1. Crie conta no [Resend](https://resend.com)
2. Configure API route em `pages/api/contact.ts`
3. Adicione variável de ambiente:

```env
RESEND_API_KEY=your_api_key
```

## 🌐 SEO e Performance

### Meta Tags Automáticas
- **Title**: Personalizado por seção
- **Description**: Otimizada para cada idioma
- **Open Graph**: Imagens e textos dinâmicos
- **Structured Data**: Schema.org para melhor indexação

### Otimizações
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Bundles otimizados
- **Tree Shaking**: Remoção de código não utilizado
- **Preconnect**: DNS prefetch para recursos externos

## 📱 PWA Features

### Instalação
O app pode ser instalado em:
- **Desktop**: Chrome, Edge, Safari
- **Android**: Chrome, Samsung Internet
- **iOS**: Safari (Add to Home Screen)

### Offline
- Cache de shell da aplicação
- Estratégia Cache First para recursos estáticos
- Fallback pages para rotas offline

### Notificações
Para adicionar notificações push:
1. Configure Firebase Cloud Messaging
2. Adicione service worker personalizado
3. Implemente subscription logic

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build
npm run build

# Deploy pasta dist/
# Configure redirects para SPA
```

### GitHub Pages
```bash
# Instale gh-pages
npm i -D gh-pages

# Adicione script ao package.json
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📊 Analytics

### Google Analytics
1. Adicione GA4 tag no `index.html`
2. Configure eventos customizados:

```typescript
// Exemplo de tracking
gtag('event', 'contact_form_submit', {
  event_category: 'engagement',
  event_label: 'footer_form'
});
```

### Outras Opções
- **Plausible**: Analytics privacy-focused
- **Mixpanel**: Analytics de eventos
- **Hotjar**: Heatmaps e gravações

## 🐛 Debugging

### Console Logs
```bash
# Ver logs durante desenvolvimento
npm run dev

# Build com logs detalhados
npm run build -- --debug
```

### PWA Testing
- **Chrome DevTools**: Application tab > Service Workers
- **Lighthouse**: PWA audit automático
- **PWA Builder**: Microsoft PWA testing tools

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Contato

**Dario Reis**
- 💼 [LinkedIn](https://linkedin.com/in/darioreisjr)
- 🐙 [GitHub](https://github.com/darioreisjr)
- 📧 [Email](mailto:email@exemplo.com)
- 📱 [WhatsApp](https://wa.me/5511999999999)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!**
