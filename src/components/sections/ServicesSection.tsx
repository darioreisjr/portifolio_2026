import React from 'react';
import { Globe, Smartphone, Server, Users, FileText, Monitor, Layout, Plug, Briefcase, AlertCircle, CheckCircle, Sparkles, Code, Database, Lock, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '../LanguageProvider';

interface Service {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  color: string;
  bgColor: string;
  featuresKeys: string[];
}

const servicesData: Service[] = [
  {
    icon: Globe,
    titleKey: 'services.web.title',
    descriptionKey: 'services.web.description',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    featuresKeys: [
      'services.web.feature1',
      'services.web.feature2',
      'services.web.feature3',
      'services.web.feature4',
      'services.web.feature5'
    ]
  },
  {
    icon: Smartphone,
    titleKey: 'services.mobile.title',
    descriptionKey: 'services.mobile.description',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    featuresKeys: [
      'services.mobile.feature1',
      'services.mobile.feature2',
      'services.mobile.feature3',
      'services.mobile.feature4',
      'services.mobile.feature5'
    ]
  },
  {
    icon: Server,
    titleKey: 'services.backend.title',
    descriptionKey: 'services.backend.description',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    featuresKeys: [
      'services.backend.feature1',
      'services.backend.feature2',
      'services.backend.feature3',
      'services.backend.feature4',
      'services.backend.feature5'
    ]
  },
  {
    icon: Users,
    titleKey: 'services.consulting.title',
    descriptionKey: 'services.consulting.description',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    featuresKeys: [
      'services.consulting.feature1',
      'services.consulting.feature2',
      'services.consulting.feature3',
      'services.consulting.feature4',
      'services.consulting.feature5'
    ]
  },
  {
    icon: FileText,
    titleKey: 'services.forms.title',
    descriptionKey: 'services.forms.description',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    featuresKeys: [
      'services.forms.feature1',
      'services.forms.feature2',
      'services.forms.feature3',
      'services.forms.feature4',
      'services.forms.feature5'
    ]
  },
  {
    icon: Monitor,
    titleKey: 'services.responsive.title',
    descriptionKey: 'services.responsive.description',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    featuresKeys: [
      'services.responsive.feature1',
      'services.responsive.feature2',
      'services.responsive.feature3',
      'services.responsive.feature4',
      'services.responsive.feature5'
    ]
  },
  {
    icon: Layout,
    titleKey: 'services.components.title',
    descriptionKey: 'services.components.description',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    featuresKeys: [
      'services.components.feature1',
      'services.components.feature2',
      'services.components.feature3',
      'services.components.feature4',
      'services.components.feature5'
    ]
  },
  {
    icon: Plug,
    titleKey: 'services.api.title',
    descriptionKey: 'services.api.description',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    featuresKeys: [
      'services.api.feature1',
      'services.api.feature2',
      'services.api.feature3',
      'services.api.feature4',
      'services.api.feature5'
    ]
  },
  {
    icon: Briefcase,
    titleKey: 'services.portfolio.title',
    descriptionKey: 'services.portfolio.description',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    featuresKeys: [
      'services.portfolio.feature1',
      'services.portfolio.feature2',
      'services.portfolio.feature3',
      'services.portfolio.feature4',
      'services.portfolio.feature5'
    ]
  },
  {
    icon: AlertCircle,
    titleKey: 'services.404.title',
    descriptionKey: 'services.404.description',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    featuresKeys: [
      'services.404.feature1',
      'services.404.feature2',
      'services.404.feature3',
      'services.404.feature4',
      'services.404.feature5'
    ]
  },
  {
    icon: CheckCircle,
    titleKey: 'services.confirmation.title',
    descriptionKey: 'services.confirmation.description',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    featuresKeys: [
      'services.confirmation.feature1',
      'services.confirmation.feature2',
      'services.confirmation.feature3',
      'services.confirmation.feature4',
      'services.confirmation.feature5'
    ]
  },
  {
    icon: Sparkles,
    titleKey: 'services.animations.title',
    descriptionKey: 'services.animations.description',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    featuresKeys: [
      'services.animations.feature1',
      'services.animations.feature2',
      'services.animations.feature3',
      'services.animations.feature4',
      'services.animations.feature5'
    ]
  },
  {
    icon: Code,
    titleKey: 'services.restful.title',
    descriptionKey: 'services.restful.description',
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
    featuresKeys: [
      'services.restful.feature1',
      'services.restful.feature2',
      'services.restful.feature3',
      'services.restful.feature4',
      'services.restful.feature5'
    ]
  },
  {
    icon: Database,
    titleKey: 'services.database.title',
    descriptionKey: 'services.database.description',
    color: 'text-slate-500',
    bgColor: 'bg-slate-500/10',
    featuresKeys: [
      'services.database.feature1',
      'services.database.feature2',
      'services.database.feature3',
      'services.database.feature4',
      'services.database.feature5'
    ]
  },
  {
    icon: Lock,
    titleKey: 'services.auth.title',
    descriptionKey: 'services.auth.description',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-600/10',
    featuresKeys: [
      'services.auth.feature1',
      'services.auth.feature2',
      'services.auth.feature3',
      'services.auth.feature4',
      'services.auth.feature5'
    ]
  },
  {
    icon: Edit,
    titleKey: 'services.crud.title',
    descriptionKey: 'services.crud.description',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    featuresKeys: [
      'services.crud.feature1',
      'services.crud.feature2',
      'services.crud.feature3',
      'services.crud.feature4',
      'services.crud.feature5'
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
          {servicesData.map((service, index) => (
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
                  <CardTitle className="text-foreground">
                    {t(service.titleKey)}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="features" className="border-none">
                    <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground py-2">
                      <div className="flex items-center gap-2">
                        <span>{t('services.view.features')}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {service.featuresKeys.map((featureKey, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${service.bgColor} mt-1.5`} />
                            {t(featureKey)}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}