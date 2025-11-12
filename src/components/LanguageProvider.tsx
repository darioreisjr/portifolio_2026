import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt-BR' | 'en' | 'pt-PT' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.system': 'Sistema',
    // Site
    'site.name': 'Dario Reis',
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // 404 Page
    '404.title': 'Página Não Encontrada',
    '404.description': 'Ops! A página que você está procurando não existe ou foi movida para outro lugar.',
    '404.button.home': 'Voltar para Home',
    '404.button.back': 'Voltar',
    '404.links.title': 'Você também pode acessar:',
    
    // Home
    'home.title': 'Desenvolvedor de Software',
    'home.subtitle': 'Especializado em Criação de soluções com React, Node.js, AWS e IA',
    'home.description': 'Criando experiências digitais modernas com foco em performance, acessibilidade e experiência do usuário.',
    'home.cta.projects': 'Ver Projetos',
    'home.cta.contact': 'Falar no WhatsApp',
    'home.skills.title': 'Principais Tecnologias',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Desenvolvedor apaixonado por tecnologia com foco em JavaScript, React e Node.js. Experiência em criar aplicações web modernas, performáticas e acessíveis.',
    'about.download.cv': 'Download CV',
    'about.timeline.title': 'Trajetória Profissional',
    'about.location.city_state': 'São Paulo, SP',
    // About timeline items
    'about.timeline.2025.probrain.title': 'Front-end Developer',
    'about.timeline.2025.probrain.description': 'Atuação no desenvolvimento de plataformas web modernas e escaláveis usando ReactJS, Next.js e TypeScript. Implementação de componentes reutilizáveis, gestão de estado (Redux, Context API), integração com APIs REST e autenticação com AWS Cognito, com foco em performance e experiência do utilizador.',
    'about.timeline.2025.security.title': 'Fundamentos de Cibersegurança',
    'about.timeline.2025.security.description': 'Curso focado nos fundamentos de segurança da informação, boas práticas e proteção de aplicações.',
    'about.timeline.2023.workana.title': 'Desenvolvedor Web Front-end (Freelancer)',
    'about.timeline.2023.workana.description': 'Criação de aplicações com React, Next.js, Vite e Node.js. Desenvolvimento de funcionalidades com Hooks, testes unitários com Jest e integração com APIs RESTful. Experiência em UI/UX para aplicações responsivas e escaláveis.',
    'about.timeline.2023.esocial.title': 'Analista de eSocial',
    'about.timeline.2023.esocial.description': 'Responsável pela criação de eventos em XML no eSocial (admissão, demissão, alterações cadastrais, etc.), garantindo conformidade legal e prazos. Manutenção de cadastros, análise e resolução de erros, e validação de ficheiros XML.',
    'about.timeline.2021.estacio.title': 'Licenciatura – Análise e Desenvolvimento de Sistemas',
    'about.timeline.2021.estacio.description': 'Formação em desenvolvimento de software com foco em front-end e back-end, estruturas de dados e bases de dados relacionais.',
    // About stats
    'about.stats.projects': 'Projectos',
    'about.stats.years': 'Anos Exp.',
    'about.stats.clients': 'Clientes',
    'about.location.city_state': 'São Paulo, SP',
    // About timeline items
    'about.timeline.2025.probrain.title': 'Front-end Developer',
    'about.timeline.2025.probrain.description': 'Atuação no desenvolvimento de plataformas web modernas e escaláveis usando ReactJS, Next.js e TypeScript. Implementação de componentes reutilizáveis, gerenciamento de estado (Redux, Context API), integração com APIs REST e autenticação com AWS Cognito, com foco em performance e experiência do usuário.',
    'about.timeline.2025.security.title': 'Fundamentos de Cibersegurança',
    'about.timeline.2025.security.description': 'Curso focado em fundamentos de segurança da informação, boas práticas e proteção de aplicações.',
    'about.timeline.2023.workana.title': 'Desenvolvedor Web Front-end (Freelancer)',
    'about.timeline.2023.workana.description': 'Criação de aplicações com React, Next.js, Vite e Node.js. Desenvolvi funcionalidades com Hooks, testes unitários com Jest e integração com APIs RESTful. Experiência em UI/UX para aplicações responsivas e escaláveis.',
    'about.timeline.2023.esocial.title': 'Analista de eSocial',
    'about.timeline.2023.esocial.description': 'Responsável pela criação de eventos em XML no eSocial (admissão, demissão, alterações cadastrais etc.), garantindo conformidade legal e prazos. Manutenção de cadastros, análise e resolução de erros e validação de arquivos XML.',
    'about.timeline.2021.estacio.title': 'Graduação – Análise e Desenvolvimento de Sistemas',
    'about.timeline.2021.estacio.description': 'Formação em desenvolvimento de software com foco em front-end e back-end, estruturas de dados e bancos de dados relacionais.',
    // About stats
    'about.stats.projects': 'Projetos',
    'about.stats.years': 'Anos Exp.',
    'about.stats.clients': 'Clientes',
    
    // Services
    'services.title': 'Serviços',
    'services.subtitle': 'Soluções completas para suas necessidades digitais',
    'services.view.features': 'Ver recursos',
    
    // Desenvolvimento Web
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Sites e aplicações web modernas com React, Next.js e TypeScript',
    'services.web.feature1': 'Landing Pages responsivas',
    'services.web.feature2': 'E-commerce com Stripe',
    'services.web.feature3': 'Dashboards administrativos',
    'services.web.feature4': 'Progressive Web Apps (PWA)',
    'services.web.feature5': 'Otimização SEO avançada',
    
    // Aplicações Mobile
    'services.mobile.title': 'Aplicações Mobile',
    'services.mobile.description': 'Apps híbridos com React Native e Progressive Web Apps',
    'services.mobile.feature1': 'Apps híbridos React Native',
    'services.mobile.feature2': 'PWAs instaláveis',
    'services.mobile.feature3': 'Integração com APIs nativas',
    'services.mobile.feature4': 'Publicação nas stores',
    'services.mobile.feature5': 'Push notifications',
    
    // API e Backend
    'services.backend.title': 'API e Backend',
    'services.backend.description': 'APIs REST e GraphQL com Node.js, Express e bancos de dados',
    'services.backend.feature1': 'APIs REST e GraphQL',
    'services.backend.feature2': 'Autenticação e autorização',
    'services.backend.feature3': 'Banco de dados PostgreSQL/MongoDB',
    'services.backend.feature4': 'Deploy em cloud (Vercel/AWS)',
    'services.backend.feature5': 'Documentação OpenAPI',
    
    // Consultoria Tech
    'services.consulting.title': 'Consultoria Tech',
    'services.consulting.description': 'Auditoria de código, arquitetura e otimização de performance',
    'services.consulting.feature1': 'Code review e refatoração',
    'services.consulting.feature2': 'Arquitetura de aplicações',
    'services.consulting.feature3': 'Performance optimization',
    'services.consulting.feature4': 'Mentoria técnica',
    'services.consulting.feature5': 'Implementação de boas práticas',
    
    // Formulários Interativos
    'services.forms.title': 'Implementação de Formulários Interativos',
    'services.forms.description': 'Criação de formulários com validação de dados e feedback visual em tempo real.',
    'services.forms.feature1': 'Validação em tempo real',
    'services.forms.feature2': 'Máscaras de input personalizadas',
    'services.forms.feature3': 'Feedback visual de erros',
    'services.forms.feature4': 'Multi-step forms',
    'services.forms.feature5': 'Upload de arquivos com preview',
    
    // Interfaces Responsivas
    'services.responsive.title': 'Desenvolvimento de Interfaces Responsivas',
    'services.responsive.description': 'Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos.',
    'services.responsive.feature1': 'Mobile-first design',
    'services.responsive.feature2': 'Breakpoints customizados',
    'services.responsive.feature3': 'Otimização para tablets',
    'services.responsive.feature4': 'Touch-friendly interfaces',
    'services.responsive.feature5': 'Cross-browser compatibility',
    
    // Componentes Interativos
    'services.components.title': 'Desenvolvimento de Componentes Interativos',
    'services.components.description': 'Criação de componentes front-end interativos como sliders, modais, carrosséis, entre outros.',
    'services.components.feature1': 'Sliders e carrosséis',
    'services.components.feature2': 'Modais e dialogs',
    'services.components.feature3': 'Dropdowns e menus',
    'services.components.feature4': 'Tooltips e popovers',
    'services.components.feature5': 'Drag and drop',
    
    // Integrações de API
    'services.api.title': 'Integrações de API',
    'services.api.description': 'Integração de APIs para melhorar a funcionalidade e experiência do usuário.',
    'services.api.feature1': 'APIs REST e GraphQL',
    'services.api.feature2': 'Autenticação OAuth',
    'services.api.feature3': 'Webhooks',
    'services.api.feature4': 'Rate limiting',
    'services.api.feature5': 'Error handling robusto',
    
    // Portfólios Online
    'services.portfolio.title': 'Desenvolvimento de Portfólios Online',
    'services.portfolio.description': 'Criação de sites personalizados para exibir o trabalho e as habilidades de profissionais em diversas áreas.',
    'services.portfolio.feature1': 'Galeria de projetos',
    'services.portfolio.feature2': 'Blog integrado',
    'services.portfolio.feature3': 'Área de depoimentos',
    'services.portfolio.feature4': 'Formulário de contato',
    'services.portfolio.feature5': 'SEO otimizado',
    
    // Páginas de 404
    'services.404.title': 'Desenvolvimento de Páginas de 404',
    'services.404.description': 'Criação de páginas de erro personalizadas para manter os usuários engajados em caso de página não encontrada.',
    'services.404.feature1': 'Design criativo',
    'services.404.feature2': 'Sugestões de navegação',
    'services.404.feature3': 'Barra de busca integrada',
    'services.404.feature4': 'Links para páginas principais',
    'services.404.feature5': 'Animações envolventes',
    
    // Páginas de Confirmação
    'services.confirmation.title': 'Implementação de Páginas de Confirmação',
    'services.confirmation.description': 'Criação de páginas que aparecem após uma ação específica do usuário, como o envio de um formulário.',
    'services.confirmation.feature1': 'Confirmação visual clara',
    'services.confirmation.feature2': 'Próximos passos',
    'services.confirmation.feature3': 'Botões de ação',
    'services.confirmation.feature4': 'Compartilhamento social',
    'services.confirmation.feature5': 'Redirect automático',
    
    // Animações Front-End
    'services.animations.title': 'Animações Front-End',
    'services.animations.description': 'Transforme sua interface em uma obra de arte animada, proporcionando uma experiência de usuário envolvente e sofisticada.',
    'services.animations.feature1': 'Micro-interações',
    'services.animations.feature2': 'Scroll animations',
    'services.animations.feature3': 'Loading states',
    'services.animations.feature4': 'Hover effects',
    'services.animations.feature5': 'Transições suaves',
    
    // APIs RESTful
    'services.restful.title': 'Desenvolvimento de APIs RESTful',
    'services.restful.description': 'Criação de APIs RESTful robustas para interconectar o front-end e o back-end.',
    'services.restful.feature1': 'Arquitetura REST',
    'services.restful.feature2': 'Versionamento de API',
    'services.restful.feature3': 'Documentação Swagger',
    'services.restful.feature4': 'Rate limiting',
    'services.restful.feature5': 'CORS configurado',
    
    // Bancos de Dados
    'services.database.title': 'Configuração de Bancos de Dados',
    'services.database.description': 'Configuração de bancos de dados SQL ou NoSQL como MySQL ou MongoDB.',
    'services.database.feature1': 'Modelagem de dados',
    'services.database.feature2': 'Migrations e seeds',
    'services.database.feature3': 'Índices otimizados',
    'services.database.feature4': 'Backup e recovery',
    'services.database.feature5': 'Query optimization',
    
    // Autenticação
    'services.auth.title': 'Autenticação e Autorização',
    'services.auth.description': 'Implementação de sistemas de autenticação e autorização seguros, como JWT.',
    'services.auth.feature1': 'JWT authentication',
    'services.auth.feature2': 'OAuth 2.0',
    'services.auth.feature3': 'Role-based access',
    'services.auth.feature4': 'Session management',
    'services.auth.feature5': 'Password encryption',
    
    // CRUD Operations
    'services.crud.title': 'Desenvolvimento de CRUD Operations',
    'services.crud.description': 'Criação de operações CRUD (Create, Read, Update, Delete) para manipulação de dados.',
    'services.crud.feature1': 'Create operations',
    'services.crud.feature2': 'Read e listagem',
    'services.crud.feature3': 'Update parcial/completo',
    'services.crud.feature4': 'Soft delete',
    'services.crud.feature5': 'Validação de dados',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.filter.all': 'Todos',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.backend': 'Backend',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Ver Código',
    'projects.featured': 'Destaque',
    // Project items
    'projects.items.techcompass.title': 'Tech Compass',
    'projects.items.techcompass.description': 'Uma aplicação React moderna para descobrir carreiras em tecnologia através de um questionário interativo. Projeto atualizado com as tecnologias mais recentes do ecossistema React.',
    'projects.items.wemoment_app.title': 'WeMoment - Aplicativo Web para Casais',
    'projects.items.wemoment_app.description': 'Um aplicativo web moderno e romântico desenvolvido especialmente para casais registrarem, planejarem e celebrarem seus momentos especiais juntos. Com design responsivo e interface intuitiva, o app oferece uma experiência completa para organizar a vida a dois.',
    'projects.items.api_wemoment.title': 'API WeMoment',
    'projects.items.api_wemoment.description': 'API RESTful construída com Express e Supabase para autenticação de usuários do projeto WeMoment. O serviço oferece endpoints para cadastro, login, recuperação de senha e consulta de perfil autenticado, além de uma configuração de CORS dinâmica para controlar o acesso a partir dos ambientes web do cliente.',
    'projects.items.lp_wemoment.title': 'WeMoment – Landing Page',
    'projects.items.lp_wemoment.description': 'Landing page moderna criada para apresentar um super app que ajuda casais a organizarem compromissos, sonhos e memórias em um único lugar. O projeto combina performance, SEO avançado, storytelling envolvente e uma experiência visual rica construída sobre um design system próprio.',
    'projects.items.eventflow.title': 'EventFlow',
    'projects.items.eventflow.description': 'Uma plataforma moderna e minimalista para descobrir e participar dos melhores eventos, com design limpo, dark mode e animações suaves.',
    'projects.items.stackid.title': 'StackID',
    'projects.items.stackid.description': 'Aplicação web divertida e interativa que gera uma identidade tecnológica ("crachá tech") personalizada com base na sua data de nascimento. É como se fosse um "horóscopo para developers" - uma ferramenta lúdica para a comunidade de tecnologia.',
    'projects.items.portal_tech.title': 'Portal de Notícias de Tecnologia',
    'projects.items.portal_tech.description': 'Esta homepage foi criada para oferecer uma experiência intuitiva e moderna para usuários de desktop, destacando as últimas novidades em tecnologia, inteligência artificial, robótica e inovações digitais.',
    
    // Contact
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu projeto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.success_description': 'Retornarei em breve!',
    'contact.form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.form.placeholder.name': 'Seu nome',
    'contact.form.placeholder.email': 'seu@email.com',
    'contact.form.placeholder.subject': 'Assunto da mensagem',
    'contact.form.placeholder.message': 'Descreva seu projeto ou dúvida...',
    'contact.quick.title': 'Contato Rápido',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.whatsapp.prefill': 'Olá! Vi seu portfólio e gostaria de conversar.',
    // Contact location
    'contact.location.title': 'Localização',
    'contact.location.city_country': 'São Paulo, Brasil',
    'contact.location.available': 'Disponível para colaboração em projetos no Brasil e no exterior.',
    'contact.location.hours': 'Horário comercial: 9h às 18h (GMT-3)',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.1.question': 'Qual é o prazo médio para desenvolvimento?',
    'faq.1.answer': 'Dependendo da complexidade, projetos web levam de 2-6 semanas, enquanto apps mobile podem levar de 4-12 semanas.',
    'faq.2.question': 'Oferece suporte pós-entrega?',
    'faq.2.answer': 'Sim! Ofereço 30 dias de suporte gratuito e pacotes de manutenção mensais a partir de R$ 300.',
    'faq.3.question': 'Trabalha com quais tecnologias?',
    'faq.3.answer': 'Especializado em React, Next.js, Node.js, TypeScript, Tailwind CSS, e bancos de dados como PostgreSQL e MongoDB.',
    'faq.4.question': 'Como funciona o processo de desenvolvimento?',
    'faq.4.answer': 'Começa com briefing, seguido de prototipagem, desenvolvimento iterativo com entregas semanais e testes.',
    'faq.5.question': 'Aceita projetos de qualquer tamanho?',
    'faq.5.answer': 'Sim, desde landing pages simples até sistemas complexos. Adapto a metodologia conforme o projeto.',
    'faq.6.question': 'Quais são as formas de pagamento?',
    'faq.6.answer': 'Transferência bancária ou cartão de crédito. Parcelamento em até 3x sem juros para projetos acima de R$ 5.000.',
    // FAQ Bot
  'faq.bot.name': 'Assistente Virtual',
  'faq.bot.status': 'Online agora',
  'faq.welcome': 'Olá! 👋 Sou o assistente virtual do Dario. Selecione uma pergunta abaixo para saber mais sobre a trajetória profissional dele.',
  'faq.select.question': 'Selecione uma pergunta:',
  
  // Perguntas
  'faq.question1': 'Qual é a experiência profissional atual?',
  'faq.question2': 'Quais são as principais tecnologias que domina?',
  'faq.question3': 'Qual é a formação acadêmica?',
  'faq.question4': 'Que tipo de projetos já desenvolveu?',
  'faq.question5': 'Quais serviços oferece?',
  'faq.question6': 'Como posso entrar em contato?',
  
  // Respostas
  'faq.answer1': 'Atualmente trabalho como Front-end Developer na ProBrain | Afinando o Cérebro, onde lidero o desenvolvimento de plataformas web modernas e escaláveis usando ReactJS, Next.js e TypeScript.\n\nMinhas principais atividades incluem:\n• Implementação de componentes reutilizáveis\n• Gerenciamento de estado (Redux, Context API)\n• Integração com APIs REST\n• Autenticação com AWS Cognito\n• Foco em performance e experiência do usuário',
  
  'faq.answer2': 'Sou especializado em:\n\n🎨 Frontend:\n• React.js e Next.js\n• TypeScript e JavaScript\n• Tailwind CSS\n• HTML5 e CSS3\n\n⚙️ Backend:\n• Node.js e Express\n• APIs REST e GraphQL\n• PostgreSQL e MongoDB\n\n☁️ Outros:\n• AWS (Cognito, S3, Lambda)\n• Git e GitHub\n• Docker\n• Jest para testes',
  
  'faq.answer3': 'Tenho graduação em Análise e Desenvolvimento de Sistemas pela Estácio (2021), com formação focada em:\n\n• Desenvolvimento de software (front-end e back-end)\n• Estruturas de dados\n• Bancos de dados relacionais\n• Engenharia de software\n\nAlém disso, concluí o curso "Foundations of Cybersecurity" pela Google & Reichman Tech School (2025), com foco em segurança da informação e boas práticas.',
  
  'faq.answer4': 'Desenvolvi diversos projetos, incluindo:\n\n🚀 Tech Compass:\nAplicação React para descobrir carreiras em tecnologia com IA, usando Vite, Gemini AI API e GitHub API.\n\n💼 Freelancer Workana (2023):\n• Aplicações completas com React e Next.js\n• Funcionalidades com Hooks\n• Testes unitários com Jest\n• Integração com APIs RESTful\n• UI/UX responsiva e escalável\n\nTodos os projetos focam em performance, acessibilidade e experiência do usuário.',
  
  'faq.answer5': 'Ofereço os seguintes serviços:\n\n🌐 Desenvolvimento Web:\n• Landing Pages responsivas\n• E-commerce com Stripe\n• Dashboards administrativos\n• Progressive Web Apps (PWA)\n• Otimização SEO\n\n📱 Aplicações Mobile:\n• Apps híbridos com React Native\n• PWAs instaláveis\n\n⚙️ API e Backend:\n• APIs REST e GraphQL\n• Autenticação e autorização\n• Deploy em cloud (Vercel/AWS)\n\n💡 Consultoria Tech:\n• Code review e refatoração\n• Arquitetura de aplicações\n• Otimização de performance\n• Mentoria técnica',
  
  'faq.answer6': 'Você pode entrar em contato comigo através de:\n\n📱 WhatsApp: Clique no botão "Falar no WhatsApp" no site\n💼 LinkedIn: linkedin.com/in/darioreisjr\n🐙 GitHub: github.com/darioreisjr\n📧 Email: Disponível no formulário de contato do site\n\nEstou sempre aberto a novos projetos e oportunidades de colaboração!'
  },
  'en': {
    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    // Site
    'site.name': 'Dario Reis',
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // 404 Page
    '404.title': 'Page Not Found',
    '404.description': 'Oops! The page you are looking for does not exist or has been moved elsewhere.',
    '404.button.home': 'Back to Home',
    '404.button.back': 'Go Back',
    '404.links.title': 'You can also access:',
    
    // Home
    'home.title': 'Software Developer',
    'home.subtitle': 'Specialized in creating solutions with React, Node.js, AWS and AI',
    'home.description': 'Creating modern digital experiences with focus on performance, accessibility and user experience.',
    'home.cta.projects': 'View Projects',
    'home.cta.contact': 'WhatsApp Chat',
    'home.skills.title': 'Main Technologies',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate developer focused on JavaScript, React and Node.js. Experience creating modern, performant and accessible web applications.',
    'about.download.cv': 'Download CV',
    'about.timeline.title': 'Professional Journey',
    'about.location.city_state': 'São Paulo, SP',
    // About timeline items
    'about.timeline.2025.probrain.title': 'Front-end Developer',
    'about.timeline.2025.probrain.description': 'Working on modern, scalable web platforms using ReactJS, Next.js, and TypeScript. Building reusable components, managing state (Redux, Context API), integrating REST APIs, and implementing authentication with AWS Cognito, focusing on performance and UX.',
    'about.timeline.2025.security.title': 'Foundations of Cybersecurity',
    'about.timeline.2025.security.description': 'Course focused on information security fundamentals, best practices, and application protection.',
    'about.timeline.2023.workana.title': 'Frontend Web Developer (Freelancer)',
    'about.timeline.2023.workana.description': 'Built apps with React, Next.js, Vite, and Node.js. Implemented features with Hooks, unit tests with Jest, and RESTful API integrations. Experience in responsive and scalable UI/UX.',
    'about.timeline.2023.esocial.title': 'eSocial Analyst',
    'about.timeline.2023.esocial.description': 'Created XML events in eSocial (admission, termination, updates, etc.), ensuring legal compliance and deadlines. Maintained records, analyzed issues, and validated XML files.',
    'about.timeline.2021.estacio.title': 'BSc – Systems Analysis and Development',
    'about.timeline.2021.estacio.description': 'Training in software development focused on front-end and back-end, data structures, and relational databases.',
    // About stats
    'about.stats.projects': 'Projects',
    'about.stats.years': 'Years Exp.',
    'about.stats.clients': 'Clients',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Complete solutions for your digital needs',
    'services.view.features': 'View features',
    
    // Web Development
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern websites and web applications with React, Next.js and TypeScript',
    'services.web.feature1': 'Responsive Landing Pages',
    'services.web.feature2': 'E-commerce with Stripe',
    'services.web.feature3': 'Admin Dashboards',
    'services.web.feature4': 'Progressive Web Apps (PWA)',
    'services.web.feature5': 'Advanced SEO optimization',
    
    // Mobile Applications
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Hybrid apps with React Native and Progressive Web Apps',
    'services.mobile.feature1': 'React Native hybrid apps',
    'services.mobile.feature2': 'Installable PWAs',
    'services.mobile.feature3': 'Native API integration',
    'services.mobile.feature4': 'Store publishing',
    'services.mobile.feature5': 'Push notifications',
    
    // API & Backend
    'services.backend.title': 'API & Backend',
    'services.backend.description': 'REST and GraphQL APIs with Node.js, Express and databases',
    'services.backend.feature1': 'REST and GraphQL APIs',
    'services.backend.feature2': 'Authentication and authorization',
    'services.backend.feature3': 'PostgreSQL/MongoDB databases',
    'services.backend.feature4': 'Cloud deployment (Vercel/AWS)',
    'services.backend.feature5': 'OpenAPI documentation',
    
    // Tech Consulting
    'services.consulting.title': 'Tech Consulting',
    'services.consulting.description': 'Code audit, architecture and performance optimization',
    'services.consulting.feature1': 'Code review and refactoring',
    'services.consulting.feature2': 'Application architecture',
    'services.consulting.feature3': 'Performance optimization',
    'services.consulting.feature4': 'Technical mentoring',
    'services.consulting.feature5': 'Best practices implementation',
    
    // Interactive Forms
    'services.forms.title': 'Interactive Forms Implementation',
    'services.forms.description': 'Creation of forms with data validation and real-time visual feedback.',
    'services.forms.feature1': 'Real-time validation',
    'services.forms.feature2': 'Custom input masks',
    'services.forms.feature3': 'Visual error feedback',
    'services.forms.feature4': 'Multi-step forms',
    'services.forms.feature5': 'File upload with preview',
    
    // Responsive Interfaces
    'services.responsive.title': 'Responsive Interface Development',
    'services.responsive.description': 'Creation of adaptive layouts to provide a consistent experience across different devices.',
    'services.responsive.feature1': 'Mobile-first design',
    'services.responsive.feature2': 'Custom breakpoints',
    'services.responsive.feature3': 'Tablet optimization',
    'services.responsive.feature4': 'Touch-friendly interfaces',
    'services.responsive.feature5': 'Cross-browser compatibility',
    
    // Interactive Components
    'services.components.title': 'Interactive Components Development',
    'services.components.description': 'Creation of interactive front-end components such as sliders, modals, carousels, among others.',
    'services.components.feature1': 'Sliders and carousels',
    'services.components.feature2': 'Modals and dialogs',
    'services.components.feature3': 'Dropdowns and menus',
    'services.components.feature4': 'Tooltips and popovers',
    'services.components.feature5': 'Drag and drop',
    
    // API Integrations
    'services.api.title': 'API Integrations',
    'services.api.description': 'API integration to improve functionality and user experience.',
    'services.api.feature1': 'REST and GraphQL APIs',
    'services.api.feature2': 'OAuth authentication',
    'services.api.feature3': 'Webhooks',
    'services.api.feature4': 'Rate limiting',
    'services.api.feature5': 'Robust error handling',
    
    // Online Portfolios
    'services.portfolio.title': 'Online Portfolio Development',
    'services.portfolio.description': 'Creation of customized websites to showcase the work and skills of professionals in various areas.',
    'services.portfolio.feature1': 'Project gallery',
    'services.portfolio.feature2': 'Integrated blog',
    'services.portfolio.feature3': 'Testimonials area',
    'services.portfolio.feature4': 'Contact form',
    'services.portfolio.feature5': 'SEO optimized',
    
    // 404 Pages
    'services.404.title': '404 Page Development',
    'services.404.description': 'Creation of custom error pages to keep users engaged in case of page not found.',
    'services.404.feature1': 'Creative design',
    'services.404.feature2': 'Navigation suggestions',
    'services.404.feature3': 'Integrated search bar',
    'services.404.feature4': 'Links to main pages',
    'services.404.feature5': 'Engaging animations',
    
    // Confirmation Pages
    'services.confirmation.title': 'Confirmation Pages Implementation',
    'services.confirmation.description': 'Creation of pages that appear after a specific user action, such as form submission.',
    'services.confirmation.feature1': 'Clear visual confirmation',
    'services.confirmation.feature2': 'Next steps',
    'services.confirmation.feature3': 'Action buttons',
    'services.confirmation.feature4': 'Social sharing',
    'services.confirmation.feature5': 'Automatic redirect',
    
    // Front-End Animations
    'services.animations.title': 'Front-End Animations',
    'services.animations.description': 'Transform your interface into an animated work of art, providing an engaging and sophisticated user experience.',
    'services.animations.feature1': 'Micro-interactions',
    'services.animations.feature2': 'Scroll animations',
    'services.animations.feature3': 'Loading states',
    'services.animations.feature4': 'Hover effects',
    'services.animations.feature5': 'Smooth transitions',
    
    // RESTful APIs
    'services.restful.title': 'RESTful API Development',
    'services.restful.description': 'Creation of robust RESTful APIs to interconnect front-end and back-end.',
    'services.restful.feature1': 'REST architecture',
    'services.restful.feature2': 'API versioning',
    'services.restful.feature3': 'Swagger documentation',
    'services.restful.feature4': 'Rate limiting',
    'services.restful.feature5': 'CORS configured',
    
    // Databases
    'services.database.title': 'Database Configuration',
    'services.database.description': 'Configuration of SQL or NoSQL databases such as MySQL or MongoDB.',
    'services.database.feature1': 'Data modeling',
    'services.database.feature2': 'Migrations and seeds',
    'services.database.feature3': 'Optimized indexes',
    'services.database.feature4': 'Backup and recovery',
    'services.database.feature5': 'Query optimization',
    
    // Authentication
    'services.auth.title': 'Authentication and Authorization',
    'services.auth.description': 'Implementation of secure authentication and authorization systems, such as JWT.',
    'services.auth.feature1': 'JWT authentication',
    'services.auth.feature2': 'OAuth 2.0',
    'services.auth.feature3': 'Role-based access',
    'services.auth.feature4': 'Session management',
    'services.auth.feature5': 'Password encryption',
    
    // CRUD Operations
    'services.crud.title': 'CRUD Operations Development',
    'services.crud.description': 'Creation of CRUD operations (Create, Read, Update, Delete) for data manipulation.',
    'services.crud.feature1': 'Create operations',
    'services.crud.feature2': 'Read and listing',
    'services.crud.feature3': 'Partial/complete update',
    'services.crud.feature4': 'Soft delete',
    'services.crud.feature5': 'Data validation',
    
    // Projects
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.backend': 'Backend',
    'projects.demo': 'View Demo',
    'projects.code': 'View Code',
    'projects.featured': 'Featured',
    // Project items
    'projects.items.techcompass.title': 'Tech Compass',
    'projects.items.techcompass.description': 'A modern React application to discover tech careers through an interactive questionnaire. Updated with the latest technologies from the React ecosystem.',
    'projects.items.wemoment_app.title': 'WeMoment - Web App for Couples',
    'projects.items.wemoment_app.description': 'A modern and romantic web app designed for couples to record, plan, and celebrate their special moments together. With responsive design and an intuitive interface, it offers a complete experience to organize life as a couple.',
    'projects.items.api_wemoment.title': 'WeMoment API',
    'projects.items.api_wemoment.description': 'RESTful API built with Express and Supabase for user authentication in the WeMoment project. Provides endpoints for sign up, login, password recovery, and authenticated profile, plus dynamic CORS configuration to control access from the client’s web environments.',
    'projects.items.lp_wemoment.title': 'WeMoment – Landing Page',
    'projects.items.lp_wemoment.description': 'A modern landing page to present a super app that helps couples organize appointments, dreams, and memories in one place. The project combines performance, advanced SEO, engaging storytelling, and a rich visual experience built on a custom design system.',
    'projects.items.eventflow.title': 'EventFlow',
    'projects.items.eventflow.description': 'A modern and minimalist platform to discover and join the best events, featuring clean design, dark mode, and smooth animations.',
    'projects.items.stackid.title': 'StackID',
    'projects.items.stackid.description': 'A fun and interactive web app that generates a personalized tech identity ("tech badge") based on your birth date. It’s like a “horoscope for developers” — a playful tool for the tech community.',
    'projects.items.portal_tech.title': 'Technology News Portal',
    'projects.items.portal_tech.description': 'A homepage designed to deliver an intuitive and modern experience for desktop users, highlighting the latest news in technology, artificial intelligence, robotics, and digital innovation.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's talk about your project",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.success_description': 'I will get back to you soon!',
    'contact.form.error': 'Error sending message. Please try again.',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.subject': 'Message subject',
    'contact.form.placeholder.message': 'Describe your project or question...',
    'contact.quick.title': 'Quick Contact',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.whatsapp.prefill': "Hello! I saw your portfolio and I'd like to chat.",
    // Contact location
    'contact.location.title': 'Location',
    'contact.location.city_country': 'São Paulo, Brazil',
    'contact.location.available': 'Available for collaboration on projects in Brazil and abroad.',
    'contact.location.hours': 'Business hours: 9am to 6pm (GMT-3)',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.1.question': "What's the average development timeline?",
    'faq.1.answer': 'Depending on complexity, web projects take 2-6 weeks, while mobile apps can take 4-12 weeks.',
    'faq.2.question': 'Do you offer post-delivery support?',
    'faq.2.answer': 'Yes! I offer 30 days of free support and monthly maintenance packages starting at $150.',
    'faq.3.question': 'Which technologies do you work with?',
    'faq.3.answer': 'Specialized in React, Next.js, Node.js, TypeScript, Tailwind CSS, and databases like PostgreSQL and MongoDB.',
    'faq.4.question': 'How does the development process work?',
    'faq.4.answer': 'Starts with briefing, followed by prototyping, iterative development with weekly deliveries and testing.',
    'faq.5.question': 'Do you accept projects of any size?',
    'faq.5.answer': 'Yes, from simple landing pages to complex systems. I adapt the methodology according to the project.',
    'faq.6.question': 'What are the payment methods?',
    'faq.6.answer': 'Bank transfer or credit card. Installments up to 3x interest-free for projects over $2,500.',
    // FAQ Bot
  'faq.bot.name': 'Virtual Assistant',
  'faq.bot.status': 'Online now',
  'faq.welcome': 'Hello! 👋 I\'m Dario\'s virtual assistant. Select a question below to learn more about his professional background.',
  'faq.select.question': 'Select a question:',
  
  // Questions
  'faq.question1': 'What is the current professional experience?',
  'faq.question2': 'What are the main technologies mastered?',
  'faq.question3': 'What is the academic background?',
  'faq.question4': 'What type of projects have been developed?',
  'faq.question5': 'What services are offered?',
  'faq.question6': 'How can I get in touch?',
  
  // Answers
  'faq.answer1': 'I currently work as a Front-end Developer at ProBrain | Afinando o Cérebro, where I lead the development of modern and scalable web platforms using ReactJS, Next.js, and TypeScript.\n\nMy main activities include:\n• Implementation of reusable components\n• State management (Redux, Context API)\n• REST API integration\n• Authentication with AWS Cognito\n• Focus on performance and user experience',
  
  'faq.answer2': 'I specialize in:\n\n🎨 Frontend:\n• React.js and Next.js\n• TypeScript and JavaScript\n• Tailwind CSS\n• HTML5 and CSS3\n\n⚙️ Backend:\n• Node.js and Express\n• REST and GraphQL APIs\n• PostgreSQL and MongoDB\n\n☁️ Others:\n• AWS (Cognito, S3, Lambda)\n• Git and GitHub\n• Docker\n• Jest for testing',
  
  'faq.answer3': 'I have a degree in Systems Analysis and Development from Estácio (2021), with training focused on:\n\n• Software development (front-end and back-end)\n• Data structures\n• Relational databases\n• Software engineering\n\nAdditionally, I completed the "Foundations of Cybersecurity" course by Google & Reichman Tech School (2025), focusing on information security and best practices.',
  
  'faq.answer4': 'I have developed several projects, including:\n\n🚀 Tech Compass:\nReact application to discover tech careers with AI, using Vite, Gemini AI API, and GitHub API.\n\n💼 Workana Freelancer (2023):\n• Complete applications with React and Next.js\n• Features with Hooks\n• Unit testing with Jest\n• RESTful API integration\n• Responsive and scalable UI/UX\n\nAll projects focus on performance, accessibility, and user experience.',
  
  'faq.answer5': 'I offer the following services:\n\n🌐 Web Development:\n• Responsive Landing Pages\n• E-commerce with Stripe\n• Administrative Dashboards\n• Progressive Web Apps (PWA)\n• SEO Optimization\n\n📱 Mobile Applications:\n• Hybrid apps with React Native\n• Installable PWAs\n\n⚙️ API and Backend:\n• REST and GraphQL APIs\n• Authentication and authorization\n• Cloud deployment (Vercel/AWS)\n\n💡 Tech Consulting:\n• Code review and refactoring\n• Application architecture\n• Performance optimization\n• Technical mentoring',
  
  'faq.answer6': 'You can contact me through:\n\n📱 WhatsApp: Click the "Talk on WhatsApp" button on the website\n💼 LinkedIn: linkedin.com/in/darioreisjr\n🐙 GitHub: github.com/darioreisjr\n📧 Email: Available in the website contact form\n\nI\'m always open to new projects and collaboration opportunities!'
  },
  'es': {
    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Site
    'site.name': 'Dario Reis',

    // 404 Page
    '404.title': 'Página no encontrada',
    '404.description': '¡Ups! La página que buscas no existe o fue movida a otro lugar.',
    '404.button.home': 'Volver al inicio',
    '404.button.back': 'Volver',
    '404.links.title': 'También puedes acceder a:',

    // Home
    'home.title': 'Desarrollador de Software',
    'home.subtitle': 'Especializado en crear soluciones con React, Node.js, AWS e IA',
    'home.description': 'Creando experiencias digitales modernas con foco en rendimiento, accesibilidad y experiencia de usuario.',
    'home.cta.projects': 'Ver proyectos',
    'home.cta.contact': 'Hablar por WhatsApp',
    'home.skills.title': 'Tecnologías principales',

    // About
    'about.title': 'Sobre mí',
    'about.description': 'Desarrollador apasionado por la tecnología, enfocado en JavaScript, React y Node.js. Experiencia creando aplicaciones web modernas, con rendimiento y accesibilidad.',
    'about.download.cv': 'Descargar CV',
    'about.timeline.title': 'Trayectoria profesional',
    'about.location.city_state': 'São Paulo, SP',
    // About timeline items
    'about.timeline.2025.probrain.title': 'Desarrollador Front-end',
    'about.timeline.2025.probrain.description': 'Trabajo en plataformas web modernas y escalables con ReactJS, Next.js y TypeScript. Componentes reutilizables, gestión de estado (Redux, Context API), integración con APIs REST y autenticación con AWS Cognito, enfocado en performance y UX.',
    'about.timeline.2025.security.title': 'Fundamentos de Ciberseguridad',
    'about.timeline.2025.security.description': 'Curso enfocado en fundamentos de seguridad de la información, buenas prácticas y protección de aplicaciones.',
    'about.timeline.2023.workana.title': 'Desarrollador Web Front-end (Freelancer)',
    'about.timeline.2023.workana.description': 'Creación de aplicaciones con React, Next.js, Vite y Node.js. Funcionalidades con Hooks, pruebas unitarias con Jest e integración con APIs RESTful. Experiencia en UI/UX responsiva y escalable.',
    'about.timeline.2023.esocial.title': 'Analista de eSocial',
    'about.timeline.2023.esocial.description': 'Responsable de crear eventos XML en eSocial (admisión, despido, cambios de datos, etc.), asegurando cumplimiento legal y plazos. Mantenimiento de registros, análisis y resolución de errores, y validación de archivos XML.',
    'about.timeline.2021.estacio.title': 'Graduación – Análisis y Desarrollo de Sistemas',
    'about.timeline.2021.estacio.description': 'Formación en desarrollo de software con foco en front-end y back-end, estructuras de datos y bases de datos relacionales.',
    // About stats
    'about.stats.projects': 'Proyectos',
    'about.stats.years': 'Años Exp.',
    'about.stats.clients': 'Clientes',

    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Soluciones completas para tus necesidades digitales',
    'services.view.features': 'Ver características',

    // Desarrollo Web
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Sitios y aplicaciones web modernas con React, Next.js y TypeScript',
    'services.web.feature1': 'Landing Pages responsivas',
    'services.web.feature2': 'E‑commerce con Stripe',
    'services.web.feature3': 'Dashboards administrativos',
    'services.web.feature4': 'Progressive Web Apps (PWA)',
    'services.web.feature5': 'Optimización SEO avanzada',

    // Aplicaciones Móviles
    'services.mobile.title': 'Aplicaciones Móviles',
    'services.mobile.description': 'Apps híbridas con React Native y Progressive Web Apps',
    'services.mobile.feature1': 'Apps híbridas con React Native',
    'services.mobile.feature2': 'PWAs instalables',
    'services.mobile.feature3': 'Integración con APIs nativas',
    'services.mobile.feature4': 'Publicación en stores',
    'services.mobile.feature5': 'Notificaciones push',

    // API y Backend
    'services.backend.title': 'API y Backend',
    'services.backend.description': 'APIs REST y GraphQL con Node.js, Express y bases de datos',
    'services.backend.feature1': 'APIs REST y GraphQL',
    'services.backend.feature2': 'Autenticación y autorización',
    'services.backend.feature3': 'Bases de datos PostgreSQL/MongoDB',
    'services.backend.feature4': 'Deploy en la nube (Vercel/AWS)',
    'services.backend.feature5': 'Documentación OpenAPI',

    // Consultoría Tech
    'services.consulting.title': 'Consultoría Tech',
    'services.consulting.description': 'Auditoría de código, arquitectura y optimización de rendimiento',
    'services.consulting.feature1': 'Code review y refactorización',
    'services.consulting.feature2': 'Arquitectura de aplicaciones',
    'services.consulting.feature3': 'Optimización de rendimiento',
    'services.consulting.feature4': 'Mentoría técnica',
    'services.consulting.feature5': 'Implementación de buenas prácticas',

    // Formularios Interactivos
    'services.forms.title': 'Implementación de Formularios Interactivos',
    'services.forms.description': 'Creación de formularios con validación de datos y feedback visual en tiempo real.',
    'services.forms.feature1': 'Validación en tiempo real',
    'services.forms.feature2': 'Máscaras de input personalizadas',
    'services.forms.feature3': 'Feedback visual de errores',
    'services.forms.feature4': 'Formularios multi‑paso',
    'services.forms.feature5': 'Subida de archivos con vista previa',

    // Interfaces Responsivas
    'services.responsive.title': 'Desarrollo de Interfaces Responsivas',
    'services.responsive.description': 'Creación de layouts adaptables para ofrecer una experiencia consistente en diferentes dispositivos.',
    'services.responsive.feature1': 'Diseño mobile‑first',
    'services.responsive.feature2': 'Breakpoints personalizados',
    'services.responsive.feature3': 'Optimización para tablets',
    'services.responsive.feature4': 'Interfaces aptas para touch',
    'services.responsive.feature5': 'Compatibilidad cross‑browser',

    // Componentes Interactivos
    'services.components.title': 'Desarrollo de Componentes Interactivos',
    'services.components.description': 'Creación de componentes front‑end interactivos como sliders, modales, carruseles, entre otros.',
    'services.components.feature1': 'Sliders y carruseles',
    'services.components.feature2': 'Modales y diálogos',
    'services.components.feature3': 'Dropdowns y menús',
    'services.components.feature4': 'Tooltips y popovers',
    'services.components.feature5': 'Drag and drop',

    // Integraciones de API
    'services.api.title': 'Integraciones de API',
    'services.api.description': 'Integración de APIs para mejorar la funcionalidad y experiencia del usuario.',
    'services.api.feature1': 'APIs REST y GraphQL',
    'services.api.feature2': 'Autenticación OAuth',
    'services.api.feature3': 'Webhooks',
    'services.api.feature4': 'Rate limiting',
    'services.api.feature5': 'Manejo robusto de errores',

    // Portafolios Online
    'services.portfolio.title': 'Desarrollo de Portafolios Online',
    'services.portfolio.description': 'Creación de sitios personalizados para exhibir el trabajo y habilidades de profesionales en diversas áreas.',
    'services.portfolio.feature1': 'Galería de proyectos',
    'services.portfolio.feature2': 'Blog integrado',
    'services.portfolio.feature3': 'Sección de testimonios',
    'services.portfolio.feature4': 'Formulario de contacto',
    'services.portfolio.feature5': 'SEO optimizado',

    // Páginas 404
    'services.404.title': 'Desarrollo de Páginas 404',
    'services.404.description': 'Creación de páginas de error personalizadas para mantener a los usuarios comprometidos cuando no se encuentra una página.',
    'services.404.feature1': 'Diseño creativo',
    'services.404.feature2': 'Sugerencias de navegación',
    'services.404.feature3': 'Barra de búsqueda integrada',
    'services.404.feature4': 'Enlaces a páginas principales',
    'services.404.feature5': 'Animaciones atractivas',

    // Páginas de Confirmación
    'services.confirmation.title': 'Implementación de Páginas de Confirmación',
    'services.confirmation.description': 'Creación de páginas que aparecen después de una acción del usuario, como el envío de un formulario.',
    'services.confirmation.feature1': 'Confirmación visual clara',
    'services.confirmation.feature2': 'Próximos pasos',
    'services.confirmation.feature3': 'Botones de acción',
    'services.confirmation.feature4': 'Compartir en redes',
    'services.confirmation.feature5': 'Redirección automática',

    // Animaciones Front‑End
    'services.animations.title': 'Animaciones Front‑End',
    'services.animations.description': 'Transforma tu interfaz en una obra animada, ofreciendo una experiencia de usuario envolvente y sofisticada.',
    'services.animations.feature1': 'Micro‑interacciones',
    'services.animations.feature2': 'Animaciones al hacer scroll',
    'services.animations.feature3': 'Estados de carga',
    'services.animations.feature4': 'Efectos hover',
    'services.animations.feature5': 'Transiciones suaves',

    // APIs RESTful
    'services.restful.title': 'Desarrollo de APIs RESTful',
    'services.restful.description': 'Creación de APIs RESTful robustas para interconectar el front‑end y el back‑end.',
    'services.restful.feature1': 'Arquitectura REST',
    'services.restful.feature2': 'Versionado de API',
    'services.restful.feature3': 'Documentación Swagger',
    'services.restful.feature4': 'Rate limiting',
    'services.restful.feature5': 'CORS configurado',

    // Bases de Datos
    'services.database.title': 'Configuración de Bases de Datos',
    'services.database.description': 'Configuración de bases de datos SQL o NoSQL como MySQL o MongoDB.',
    'services.database.feature1': 'Modelado de datos',
    'services.database.feature2': 'Migraciones y seeds',
    'services.database.feature3': 'Índices optimizados',
    'services.database.feature4': 'Backup y recuperación',
    'services.database.feature5': 'Optimización de consultas',

    // Autenticación
    'services.auth.title': 'Autenticación y Autorización',
    'services.auth.description': 'Implementación de sistemas de autenticación y autorización seguros, como JWT.',
    'services.auth.feature1': 'Autenticación JWT',
    'services.auth.feature2': 'OAuth 2.0',
    'services.auth.feature3': 'Acceso basado en roles',
    'services.auth.feature4': 'Gestión de sesiones',
    'services.auth.feature5': 'Encriptación de contraseñas',

    // Operaciones CRUD
    'services.crud.title': 'Desarrollo de Operaciones CRUD',
    'services.crud.description': 'Creación de operaciones CRUD (Create, Read, Update, Delete) para manipulación de datos.',
    'services.crud.feature1': 'Operaciones Create',
    'services.crud.feature2': 'Read y listado',
    'services.crud.feature3': 'Actualización parcial/completa',
    'services.crud.feature4': 'Soft delete',
    'services.crud.feature5': 'Validación de datos',

    // Projects
    'projects.title': 'Proyectos',
    'projects.filter.all': 'Todos',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.backend': 'Backend',
    'projects.demo': 'Ver demo',
    'projects.code': 'Ver código',
    'projects.featured': 'Destacado',
    // Project items
    'projects.items.techcompass.title': 'Tech Compass',
    'projects.items.techcompass.description': 'Aplicación moderna en React para descubrir carreras en tecnología mediante un cuestionario interactivo. Proyecto actualizado con las tecnologías más recientes del ecosistema React.',
    'projects.items.wemoment_app.title': 'WeMoment - Aplicación Web para Parejas',
    'projects.items.wemoment_app.description': 'Una aplicación web moderna y romántica para que las parejas registren, planifiquen y celebren sus momentos especiales juntos. Con diseño responsivo e interfaz intuitiva, ofrece una experiencia completa para organizar la vida en pareja.',
    'projects.items.api_wemoment.title': 'API WeMoment',
    'projects.items.api_wemoment.description': 'API RESTful construida con Express y Supabase para autenticación de usuarios del proyecto WeMoment. Ofrece endpoints para registro, login, recuperación de contraseña y perfil autenticado, además de configuración CORS dinámica.',
    'projects.items.lp_wemoment.title': 'WeMoment – Landing Page',
    'projects.items.lp_wemoment.description': 'Landing page moderna para presentar una super app que ayuda a las parejas a organizar citas, sueños y recuerdos en un solo lugar. Combina rendimiento, SEO avanzado, storytelling envolvente y una experiencia visual rica basada en un design system propio.',
    'projects.items.eventflow.title': 'EventFlow',
    'projects.items.eventflow.description': 'Plataforma moderna y minimalista para descubrir y participar en los mejores eventos, con diseño limpio, modo oscuro y animaciones suaves.',
    'projects.items.stackid.title': 'StackID',
    'projects.items.stackid.description': 'Aplicación web divertida e interactiva que genera una identidad tecnológica ("credencial tech") personalizada a partir de tu fecha de nacimiento. Como un “horóscopo para developers” — una herramienta lúdica para la comunidad tech.',
    'projects.items.portal_tech.title': 'Portal de Noticias de Tecnología',
    'projects.items.portal_tech.description': 'Homepage creada para ofrecer una experiencia intuitiva y moderna para usuarios de escritorio, destacando las últimas novedades en tecnología, inteligencia artificial, robótica e innovaciones digitales.',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos sobre tu proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.success_description': '¡Te responderé en breve!',
    'contact.form.error': 'Error al enviar el mensaje. Inténtalo de nuevo.',
    'contact.form.placeholder.name': 'Tu nombre',
    'contact.form.placeholder.email': 'tu@email.com',
    'contact.form.placeholder.subject': 'Asunto del mensaje',
    'contact.form.placeholder.message': 'Describe tu proyecto o duda...',
    'contact.quick.title': 'Contacto Rápido',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.whatsapp.prefill': '¡Hola! Vi tu portafolio y me gustaría conversar.',
    // Contact location
    'contact.location.title': 'Ubicación',
    'contact.location.city_country': 'São Paulo, Brasil',
    'contact.location.available': 'Disponible para colaborar en proyectos en Brasil y en el exterior.',
    'contact.location.hours': 'Horario comercial: 9h a 18h (GMT-3)',
  },
  'pt-PT': {
    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.system': 'Sistema',
    // Site
    'site.name': 'Dario Reis',
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.projects': 'Projectos',
    'nav.contact': 'Contacto',
    
    // 404 Page
    '404.title': 'Página Não Encontrada',
    '404.description': 'Ops! A página que está a procurar não existe ou foi movida para outro lugar.',
    '404.button.home': 'Voltar ao Início',
    '404.button.back': 'Voltar',
    '404.links.title': 'Também pode aceder a:',
    
    // Home
    'home.title': 'Desenvolvedor de Software',
    'home.subtitle': 'Especializado em Criação de soluções com React, Node.js, AWS e IA',
    'home.description': 'A criar experiências digitais modernas com foco na performance, acessibilidade e experiência do utilizador.',
    'home.cta.projects': 'Ver Projectos',
    'home.cta.contact': 'Falar no WhatsApp',
    'home.skills.title': 'Principais Tecnologias',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Programador apaixonado por tecnologia com foco em JavaScript, React e Node.js. Experiência a criar aplicações web modernas, performantes e acessíveis.',
    'about.download.cv': 'Descarregar CV',
    'about.timeline.title': 'Percurso Profissional',
    'about.location.city_state': 'São Paulo, SP',
    // About timeline items
    'about.timeline.2025.probrain.title': 'Programador Front-end',
    'about.timeline.2025.probrain.description': 'Trabalho no desenvolvimento de plataformas web modernas e escaláveis com ReactJS, Next.js e TypeScript. Implementação de componentes reutilizáveis, gestão de estado (Redux, Context API), integração com APIs REST e autenticação com AWS Cognito, com foco em performance e experiência do utilizador.',
    'about.timeline.2025.security.title': 'Fundamentos de Cibersegurança',
    'about.timeline.2025.security.description': 'Curso focado nos fundamentos de segurança da informação, boas práticas e proteção de aplicações.',
    'about.timeline.2023.workana.title': 'Programador Web Front-end (Freelancer)',
    'about.timeline.2023.workana.description': 'Criação de aplicações com React, Next.js, Vite e Node.js. Desenvolvimento de funcionalidades com Hooks, testes unitários com Jest e integração com APIs RESTful. Experiência em UI/UX para aplicações responsivas e escaláveis.',
    'about.timeline.2023.esocial.title': 'Analista de eSocial',
    'about.timeline.2023.esocial.description': 'Responsável pela criação de eventos em XML no eSocial (admissão, demissão, alterações cadastrais, etc.), garantindo conformidade legal e prazos. Manutenção de registos, análise e resolução de erros e validação de ficheiros XML.',
    'about.timeline.2021.estacio.title': 'Licenciatura – Análise e Desenvolvimento de Sistemas',
    'about.timeline.2021.estacio.description': 'Formação em desenvolvimento de software com foco em front-end e back-end, estruturas de dados e bases de dados relacionais.',
    // About stats
    'about.stats.projects': 'Projectos',
    'about.stats.years': 'Anos Exp.',
    'about.stats.clients': 'Clientes',
    
    // Services
    'services.title': 'Serviços',
    'services.subtitle': 'Soluções completas para as suas necessidades digitais',
    'services.view.features': 'Ver recursos',
    
    // Desenvolvimento Web
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Sites e aplicações web modernas com React, Next.js e TypeScript',
    'services.web.feature1': 'Landing Pages responsivas',
    'services.web.feature2': 'E-commerce com Stripe',
    'services.web.feature3': 'Dashboards administrativos',
    'services.web.feature4': 'Progressive Web Apps (PWA)',
    'services.web.feature5': 'Optimização SEO avançada',
    
    // Aplicações Mobile
    'services.mobile.title': 'Aplicações Mobile',
    'services.mobile.description': 'Apps híbridas com React Native e Progressive Web Apps',
    'services.mobile.feature1': 'Apps híbridas React Native',
    'services.mobile.feature2': 'PWAs instaláveis',
    'services.mobile.feature3': 'Integração com APIs nativas',
    'services.mobile.feature4': 'Publicação nas stores',
    'services.mobile.feature5': 'Push notifications',
    
    // API e Backend
    'services.backend.title': 'API e Backend',
    'services.backend.description': 'APIs REST e GraphQL com Node.js, Express e bases de dados',
    'services.backend.feature1': 'APIs REST e GraphQL',
    'services.backend.feature2': 'Autenticação e autorização',
    'services.backend.feature3': 'Base de dados PostgreSQL/MongoDB',
    'services.backend.feature4': 'Deploy em cloud (Vercel/AWS)',
    'services.backend.feature5': 'Documentação OpenAPI',
    
    // Consultoria Tech
    'services.consulting.title': 'Consultoria Tech',
    'services.consulting.description': 'Auditoria de código, arquitectura e optimização de performance',
    'services.consulting.feature1': 'Code review e refactoração',
    'services.consulting.feature2': 'Arquitectura de aplicações',
    'services.consulting.feature3': 'Optimização de performance',
    'services.consulting.feature4': 'Mentoria técnica',
    'services.consulting.feature5': 'Implementação de boas práticas',
    
    // Formulários Interactivos
    'services.forms.title': 'Implementação de Formulários Interactivos',
    'services.forms.description': 'Criação de formulários com validação de dados e feedback visual em tempo real.',
    'services.forms.feature1': 'Validação em tempo real',
    'services.forms.feature2': 'Máscaras de input personalizadas',
    'services.forms.feature3': 'Feedback visual de erros',
    'services.forms.feature4': 'Multi-step forms',
    'services.forms.feature5': 'Upload de ficheiros com pré-visualização',
    
    // Interfaces Responsivas
    'services.responsive.title': 'Desenvolvimento de Interfaces Responsivas',
    'services.responsive.description': 'Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos.',
    'services.responsive.feature1': 'Mobile-first design',
    'services.responsive.feature2': 'Breakpoints personalizados',
    'services.responsive.feature3': 'Optimização para tablets',
    'services.responsive.feature4': 'Interfaces touch-friendly',
    'services.responsive.feature5': 'Compatibilidade cross-browser',
    
    // Componentes Interactivos
    'services.components.title': 'Desenvolvimento de Componentes Interactivos',
    'services.components.description': 'Criação de componentes front-end interactivos como sliders, modais, carrosséis, entre outros.',
    'services.components.feature1': 'Sliders e carrosséis',
    'services.components.feature2': 'Modais e caixas de diálogo',
    'services.components.feature3': 'Dropdowns e menus',
    'services.components.feature4': 'Tooltips e popovers',
    'services.components.feature5': 'Drag and drop',
    
    // Integrações de API
    'services.api.title': 'Integrações de API',
    'services.api.description': 'Integração de APIs para melhorar a funcionalidade e experiência do utilizador.',
    'services.api.feature1': 'APIs REST e GraphQL',
    'services.api.feature2': 'Autenticação OAuth',
    'services.api.feature3': 'Webhooks',
    'services.api.feature4': 'Rate limiting',
    'services.api.feature5': 'Tratamento robusto de erros',
    
    // Portfólios Online
    'services.portfolio.title': 'Desenvolvimento de Portfólios Online',
    'services.portfolio.description': 'Criação de sites personalizados para exibir o trabalho e as competências de profissionais em diversas áreas.',
    'services.portfolio.feature1': 'Galeria de projectos',
    'services.portfolio.feature2': 'Blog integrado',
    'services.portfolio.feature3': 'Área de testemunhos',
    'services.portfolio.feature4': 'Formulário de contacto',
    'services.portfolio.feature5': 'SEO optimizado',
    
    // Páginas de 404
    'services.404.title': 'Desenvolvimento de Páginas de 404',
    'services.404.description': 'Criação de páginas de erro personalizadas para manter os utilizadores envolvidos em caso de página não encontrada.',
    'services.404.feature1': 'Design criativo',
    'services.404.feature2': 'Sugestões de navegação',
    'services.404.feature3': 'Barra de pesquisa integrada',
    'services.404.feature4': 'Links para páginas principais',
    'services.404.feature5': 'Animações envolventes',
    
    // Páginas de Confirmação
    'services.confirmation.title': 'Implementação de Páginas de Confirmação',
    'services.confirmation.description': 'Criação de páginas que aparecem após uma acção específica do utilizador, como o envio de um formulário.',
    'services.confirmation.feature1': 'Confirmação visual clara',
    'services.confirmation.feature2': 'Próximos passos',
    'services.confirmation.feature3': 'Botões de acção',
    'services.confirmation.feature4': 'Partilha social',
    'services.confirmation.feature5': 'Redirecionamento automático',
    
    // Animações Front-End
    'services.animations.title': 'Animações Front-End',
    'services.animations.description': 'Transforme a sua interface numa obra de arte animada, proporcionando uma experiência de utilizador envolvente e sofisticada.',
    'services.animations.feature1': 'Micro-interacções',
    'services.animations.feature2': 'Animações de scroll',
    'services.animations.feature3': 'Loading states',
    'services.animations.feature4': 'Efeitos hover',
    'services.animations.feature5': 'Transições suaves',
    
    // APIs RESTful
    'services.restful.title': 'Desenvolvimento de APIs RESTful',
    'services.restful.description': 'Criação de APIs RESTful robustas para interligar o front-end e o back-end.',
    'services.restful.feature1': 'Arquitectura REST',
    'services.restful.feature2': 'Versionamento de API',
    'services.restful.feature3': 'Documentação Swagger',
    'services.restful.feature4': 'Rate limiting',
    'services.restful.feature5': 'CORS configurado',
    
    // Bases de Dados
    'services.database.title': 'Configuração de Bases de Dados',
    'services.database.description': 'Configuração de bases de dados SQL ou NoSQL como MySQL ou MongoDB.',
    'services.database.feature1': 'Modelagem de dados',
    'services.database.feature2': 'Migrações e seeds',
    'services.database.feature3': 'Índices optimizados',
    'services.database.feature4': 'Backup e recovery',
    'services.database.feature5': 'Optimização de queries',
    
    // Autenticação
    'services.auth.title': 'Autenticação e Autorização',
    'services.auth.description': 'Implementação de sistemas de autenticação e autorização seguros, como JWT.',
    'services.auth.feature1': 'Autenticação JWT',
    'services.auth.feature2': 'OAuth 2.0',
    'services.auth.feature3': 'Acesso baseado em funções',
    'services.auth.feature4': 'Gestão de sessões',
    'services.auth.feature5': 'Encriptação de palavras-passe',
    
    // Operações CRUD
    'services.crud.title': 'Desenvolvimento de Operações CRUD',
    'services.crud.description': 'Criação de operações CRUD (Create, Read, Update, Delete) para manipulação de dados.',
    'services.crud.feature1': 'Operações Create',
    'services.crud.feature2': 'Read e listagem',
    'services.crud.feature3': 'Update parcial/completo',
    'services.crud.feature4': 'Soft delete',
    'services.crud.feature5': 'Validação de dados',
    
    // Projects
    'projects.title': 'Projectos',
    'projects.filter.all': 'Todos',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.backend': 'Backend',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Ver Código',
    'projects.featured': 'Destaque',
    // Project items
    'projects.items.techcompass.title': 'Tech Compass',
    'projects.items.techcompass.description': 'Uma aplicação React moderna para descobrir carreiras em tecnologia através de um questionário interativo. Projeto atualizado com as tecnologias mais recentes do ecossistema React.',
    'projects.items.wemoment_app.title': 'WeMoment - Aplicativo Web para Casais',
    'projects.items.wemoment_app.description': 'Um aplicativo web moderno e romântico desenvolvido especialmente para casais registarem, planearem e celebrarem os seus momentos especiais juntos. Com design responsivo e interface intuitiva, o app oferece uma experiência completa para organizar a vida a dois.',
    'projects.items.api_wemoment.title': 'API WeMoment',
    'projects.items.api_wemoment.description': 'API RESTful construída com Express e Supabase para autenticação de utilizadores do projeto WeMoment. O serviço oferece endpoints para cadastro, login, recuperação de palavra-passe e consulta de perfil autenticado, além de configuração CORS dinâmica para controlar o acesso a partir dos ambientes web do cliente.',
    'projects.items.lp_wemoment.title': 'WeMoment – Landing Page',
    'projects.items.lp_wemoment.description': 'Landing page moderna criada para apresentar um super app que ajuda casais a organizarem compromissos, sonhos e memórias num único lugar. O projeto combina performance, SEO avançado, storytelling envolvente e uma experiência visual rica construída sobre um design system próprio.',
    'projects.items.eventflow.title': 'EventFlow',
    'projects.items.eventflow.description': 'Uma plataforma moderna e minimalista para descobrir e participar nos melhores eventos, com design limpo, dark mode e animações suaves.',
    'projects.items.stackid.title': 'StackID',
    'projects.items.stackid.description': 'Aplicação web divertida e interativa que gera uma identidade tecnológica ("crachá tech") personalizada com base na sua data de nascimento. É como se fosse um "horóscopo para developers" — uma ferramenta lúdica para a comunidade de tecnologia.',
    'projects.items.portal_tech.title': 'Portal de Notícias de Tecnologia',
    'projects.items.portal_tech.description': 'Esta homepage foi criada para oferecer uma experiência intuitiva e moderna para utilizadores de desktop, destacando as últimas novidades em tecnologia, inteligência artificial, robótica e inovações digitais.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Vamos conversar sobre o seu projecto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'A enviar...',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.success_description': 'Retornarei em breve!',
    'contact.form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.form.placeholder.name': 'O seu nome',
    'contact.form.placeholder.email': 'o-seu@email.com',
    'contact.form.placeholder.subject': 'Assunto da mensagem',
    'contact.form.placeholder.message': 'Descreva o seu projecto ou dúvida...',
    'contact.quick.title': 'Contacto Rápido',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.email': 'Email',
    'contact.whatsapp.prefill': 'Olá! Vi o seu portefólio e gostaria de conversar.',
    // Contact location
    'contact.location.title': 'Localização',
    'contact.location.city_country': 'São Paulo, Brasil',
    'contact.location.available': 'Disponível para colaboração em projectos no Brasil e no exterior.',
    'contact.location.hours': 'Horário comercial: 9h às 18h (GMT-3)',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.1.question': 'Qual é o prazo médio para desenvolvimento?',
    'faq.1.answer': 'Dependendo da complexidade, projectos web levam de 2-6 semanas, enquanto apps mobile podem levar de 4-12 semanas.',
    'faq.2.question': 'Oferece suporte pós-entrega?',
    'faq.2.answer': 'Sim! Ofereço 30 dias de suporte gratuito e pacotes de manutenção mensais a partir de €150.',
    'faq.3.question': 'Trabalha com que tecnologias?',
    'faq.3.answer': 'Especializado em React, Next.js, Node.js, TypeScript, Tailwind CSS, e bases de dados como PostgreSQL e MongoDB.',
    'faq.4.question': 'Como funciona o processo de desenvolvimento?',
    'faq.4.answer': 'Início com briefing, seguido de prototipagem, desenvolvimento iterativo com entregas semanais e testes.',
    'faq.5.question': 'Aceita projectos de qualquer tamanho?',
    'faq.5.answer': 'Sim, desde landing pages simples até sistemas complexos. Adapto a metodologia conforme o projecto.',
    'faq.6.question': 'Quais são as formas de pagamento?',
    'faq.6.answer': 'Transferência bancária ou cartão. Parcelamento em até 3x sem juros para projectos acima de €2.500.',
    // FAQ Bot
  'faq.bot.name': 'Assistente Virtual',
  'faq.bot.status': 'Online agora',
  'faq.welcome': 'Olá! 👋 Sou o assistente virtual do Dario. Selecione uma pergunta abaixo para saber mais sobre o percurso profissional dele.',
  'faq.select.question': 'Selecione uma pergunta:',
  
  // Perguntas
  'faq.question1': 'Qual é a experiência profissional actual?',
  'faq.question2': 'Quais são as principais tecnologias que domina?',
  'faq.question3': 'Qual é a formação académica?',
  'faq.question4': 'Que tipo de projectos já desenvolveu?',
  'faq.question5': 'Que serviços oferece?',
  'faq.question6': 'Como posso entrar em contacto?',
  
  // Respostas
  'faq.answer1': 'Actualmente trabalho como Front-end Developer na ProBrain | Afinando o Cérebro, onde lidero o desenvolvimento de plataformas web modernas e escaláveis usando ReactJS, Next.js e TypeScript.\n\nAs minhas principais actividades incluem:\n• Implementação de componentes reutilizáveis\n• Gestão de estado (Redux, Context API)\n• Integração com APIs REST\n• Autenticação com AWS Cognito\n• Foco em performance e experiência do utilizador',
  
  'faq.answer2': 'Sou especializado em:\n\n🎨 Frontend:\n• React.js e Next.js\n• TypeScript e JavaScript\n• Tailwind CSS\n• HTML5 e CSS3\n\n⚙️ Backend:\n• Node.js e Express\n• APIs REST e GraphQL\n• PostgreSQL e MongoDB\n\n☁️ Outros:\n• AWS (Cognito, S3, Lambda)\n• Git e GitHub\n• Docker\n• Jest para testes',
  
  'faq.answer3': 'Tenho licenciatura em Análise e Desenvolvimento de Sistemas pela Estácio (2021), com formação focada em:\n\n• Desenvolvimento de software (front-end e back-end)\n• Estruturas de dados\n• Bases de dados relacionais\n• Engenharia de software\n\nAlém disso, concluí o curso "Foundations of Cybersecurity" pela Google & Reichman Tech School (2025), com foco em segurança da informação e boas práticas.',
  
  'faq.answer4': 'Desenvolvi diversos projectos, incluindo:\n\n🚀 Tech Compass:\nAplicação React para descobrir carreiras em tecnologia com IA, usando Vite, Gemini AI API e GitHub API.\n\n💼 Freelancer Workana (2023):\n• Aplicações completas com React e Next.js\n• Funcionalidades com Hooks\n• Testes unitários com Jest\n• Integração com APIs RESTful\n• UI/UX responsiva e escalável\n\nTodos os projectos focam em performance, acessibilidade e experiência do utilizador.',
  
  'faq.answer5': 'Ofereço os seguintes serviços:\n\n🌐 Desenvolvimento Web:\n• Landing Pages responsivas\n• E-commerce com Stripe\n• Dashboards administrativos\n• Progressive Web Apps (PWA)\n• Optimização SEO\n\n📱 Aplicações Mobile:\n• Apps híbridas com React Native\n• PWAs instaláveis\n\n⚙️ API e Backend:\n• APIs REST e GraphQL\n• Autenticação e autorização\n• Deploy em cloud (Vercel/AWS)\n\n💡 Consultoria Tech:\n• Code review e refactoração\n• Arquitectura de aplicações\n• Optimização de performance\n• Mentoria técnica',
  
  'faq.answer6': 'Pode entrar em contacto comigo através de:\n\n📱 WhatsApp: Clique no botão "Falar no WhatsApp" no site\n💼 LinkedIn: linkedin.com/in/darioreisjr\n🐙 GitHub: github.com/darioreisjr\n📧 Email: Disponível no formulário de contacto do site\n\nEstou sempre aberto a novos projectos e oportunidades de colaboração!'
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && ['pt-BR', 'en', 'pt-PT', 'es'].includes(saved)) {
        return saved;
      }
      // Auto-detect browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt-BR')) return 'pt-BR';
      if (browserLang.startsWith('pt-PT') || browserLang.startsWith('pt')) return 'pt-PT';
      if (browserLang.startsWith('en')) return 'en';
      if (browserLang.startsWith('es')) return 'es';
    }
    return 'pt-BR';
  });

  const t = (key: string): string => {
    const current = translations[language] as Record<string, string> | undefined;
    const en = translations['en'] as Record<string, string> | undefined;
    const ptBR = translations['pt-BR'] as Record<string, string> | undefined;
    return (
      (current && current[key]) ||
      (en && en[key]) ||
      (ptBR && ptBR[key]) ||
      key
    );
  };

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
