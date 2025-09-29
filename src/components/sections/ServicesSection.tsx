import React from 'react';
import { Globe, Smartphone, Server, Users, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '../LanguageProvider';

const services = [
  {
    icon: Globe,
    titleKey: 'services.web.title',
    descriptionKey: 'services.web.description',
    priceKey: 'services.web.price',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    features: [
      'Landing Pages responsivas',
      'E-commerce com Stripe',
      'Dashboards administrativos',
      'Progressive Web Apps (PWA)',
      'Otimização SEO avançada'
    ]
  },
  {
    icon: Smartphone,
    titleKey: 'services.mobile.title',
    descriptionKey: 'services.mobile.description',
    priceKey: 'services.mobile.price',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    features: [
      'Apps híbridos React Native',
      'PWAs instaláveis',
      'Integração com APIs nativas',
      'Publicação nas stores',
      'Push notifications'
    ]
  },
  {
    icon: Server,
    titleKey: 'services.backend.title',
    descriptionKey: 'services.backend.description',
    priceKey: 'services.backend.price',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    features: [
      'APIs REST e GraphQL',
      'Autenticação e autorização',
      'Banco de dados PostgreSQL/MongoDB',
      'Deploy em cloud (Vercel/AWS)',
      'Documentação OpenAPI'
    ]
  },
  {
    icon: Users,
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    priceKey: 'services.consulting.price',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    features: [
      'Code review e refatoração',
      'Arquitetura de aplicações',
      'Performance optimization',
      'Mentoria técnica',
      'Implementação de boas práticas'
    ]
  }
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-foreground">{t(service.titleKey)}</CardTitle>
                  <p className="text-muted-foreground text-sm">{t(service.descriptionKey)}</p>
                  <p className="text-lg font-bold text-primary">{t(service.priceKey)}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">{t('faq.title')}</h3>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
                  <AccordionItem key={num} value={`item-${num}`} className="border-border">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                      {t(`faq.${num}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {t(`faq.${num}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}