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
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Sites e aplicações web modernas com React, Next.js e TypeScript',
    'services.web.price': 'A partir de R$ 2.500',
    'services.mobile.title': 'Aplicações Mobile',
    'services.mobile.description': 'Apps híbridos com React Native e Progressive Web Apps',
    'services.mobile.price': 'A partir de R$ 3.500',
    'services.backend.title': 'API e Backend',
    'services.backend.description': 'APIs REST e GraphQL com Node.js, Express e bancos de dados',
    'services.backend.price': 'A partir de R$ 2.000',
    'services.consulting.title': 'Consultoria Tech',
    'services.consulting.description': 'Auditoria de código, arquitetura e otimização de performance',
    'services.consulting.price': 'R$ 150/hora',
    
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
    'faq.2.question': 'Você oferece suporte pós-entrega?',
    'faq.2.answer': 'Sim! Ofereço 30 dias de suporte gratuito e pacotes de manutenção mensais a partir de R$ 300.',
    'faq.3.question': 'Trabalha com quais tecnologias?',
    'faq.3.answer': 'Especializado em React, Next.js, Node.js, TypeScript, Tailwind CSS, e bancos como PostgreSQL e MongoDB.',
    'faq.4.question': 'Como funciona o processo de desenvolvimento?',
    'faq.4.answer': 'Início com briefing, seguido de prototipagem, desenvolvimento iterativo com entregas semanais e testes.',
    'faq.5.question': 'Aceita projetos de qualquer tamanho?',
    'faq.5.answer': 'Sim, desde landing pages simples até sistemas complexos. Adapto a metodologia conforme o projeto.',
    'faq.6.question': 'Quais são as formas de pagamento?',
    'faq.6.answer': 'PIX, transferência bancária ou cartão. Parcelamento em até 3x sem juros para projetos acima de R$ 5.000.',
  },
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'Software Developer',
    'home.subtitle': 'Specialized in Creating solutions with React, Node.js, AWS and AI',
    'home.description': 'Creating modern digital experiences focused on performance, accessibility and user experience.',
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
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern websites and web applications with React, Next.js and TypeScript',
    'services.web.price': 'Starting at $1,200',
    'services.mobile.title': 'Mobile Applications',
    'services.mobile.description': 'Hybrid apps with React Native and Progressive Web Apps',
    'services.mobile.price': 'Starting at $1,800',
    'services.backend.title': 'API & Backend',
    'services.backend.description': 'REST and GraphQL APIs with Node.js, Express and databases',
    'services.backend.price': 'Starting at $1,000',
    'services.consulting.title': 'Tech Consulting',
    'services.consulting.description': 'Code audit, architecture and performance optimization',
    'services.consulting.price': '$75/hour',
    
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
    'contact.subtitle': 'Let\'s talk about your project',
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
    'faq.1.question': 'What\'s the average development timeline?',
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
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Sites e aplicações web modernas com React, Next.js e TypeScript',
    'services.web.price': 'A partir de €1.200',
    'services.mobile.title': 'Aplicações Mobile',
    'services.mobile.description': 'Apps híbridas com React Native e Progressive Web Apps',
    'services.mobile.price': 'A partir de €1.700',
    'services.backend.title': 'API e Backend',
    'services.backend.description': 'APIs REST e GraphQL com Node.js, Express e bases de dados',
    'services.backend.price': 'A partir de €950',
    'services.consulting.title': 'Consultoria Tech',
    'services.consulting.description': 'Auditoria de código, arquitectura e optimização de performance',
    'services.consulting.price': '€70/hora',
    
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