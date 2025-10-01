import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt-BR' | 'en' | 'pt-PT';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
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
    
    // Contact
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu projeto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.quick.title': 'Contato Rápido',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
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
  },
  'en': {
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
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's talk about your project",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',
    'contact.quick.title': 'Quick Contact',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
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
  },
  'pt-PT': {
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
    'about.description': 'Desenvolvedor apaixonado por tecnologia com foco em JavaScript, React e Node.js. Experiência em criar aplicações web modernas, performantes e acessíveis.',
    'about.download.cv': 'Download CV',
    'about.timeline.title': 'Percurso Profissional',
    
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
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Vamos conversar sobre o seu projecto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.quick.title': 'Contacto Rápido',
    'contact.whatsapp': 'WhatsApp',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
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
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && ['pt-BR', 'en', 'pt-PT'].includes(saved)) {
        return saved;
      }
      // Auto-detect browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt-BR')) return 'pt-BR';
      if (browserLang.startsWith('pt-PT') || browserLang.startsWith('pt')) return 'pt-PT';
      if (browserLang.startsWith('en')) return 'en';
    }
    return 'pt-BR';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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