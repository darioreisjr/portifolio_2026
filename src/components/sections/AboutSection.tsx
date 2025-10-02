import React from 'react';
import { Download, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../LanguageProvider';

const timeline = [
  {
    year: '2025',
    title: 'Front-end Developer',
    company: 'ProBrain | Afinando o Cérebro',
    description: 'Liderando equipe de desenvolvimento frontend, implementando Atuação no desenvolvimento de plataformas web modernas e escaláveis usando ReactJS, Next.js e TypeScript. Implementação de componentes reutilizáveis, gerenciamento de estado (Redux, Context API), integração com APIs REST e autenticação com AWS Cognito. Foco em performance e experiência do usuário. escaláveis com React e Next.js.',
    type: 'work'
  },
  {
    year: '2025',
    title: 'Foundations of Cybersecurity',
    company: 'Google & Reichman Tech School',
    description: 'Curso focado em fundamentos de segurança da informação, boas práticas e proteção de aplicações.',
    type: 'education'
  },
  {
    year: '2023',
    title: 'Desenvolvedor Web Front-end (Freelancer)',
    company: 'Workana',
    description: 'Criação de aplicações completas com React, Next.js, Vite e Node.js. Desenvolvimento de funcionalidades com Hooks, testes unitários com Jest e integração com APIs RESTful. Experiência em UI/UX para aplicações responsivas e escaláveis. ',
    type: 'work'
  },
  {
    year: '2023',
    title: 'Analista de eSocial',
    company: 'Healthwork Medicina e Segurança no Trabalho',
    description: 'Responsável pela criação de eventos em XML no eSocial (admissão, demissão, alterações cadastrais, etc.), garantindo conformidade legal e prazos exigidos. Atuava na manutenção e atualização de cadastros de colaboradores, corrigindo inconsistências e assegurando integridade dos dados. Realizava a análise e resolução de erros cadastrais, além da pesquisa e recuperação de matrículas no eSocial utilizando ferramentas avançadas. Domínio da plataforma eSocial, legislação trabalhista e validação de arquivos XML.',
    type: 'work'
  },
  {
    year: '2021',
    title: 'Graduação – Análise e Desenvolvimento de Sistemas',
    company: 'Estácio',
    description: 'Formação em desenvolvimento de software com foco em front-end e back-end, estruturas de dados e bancos de dados relacionais. ',
    type: 'education'
  },
];

export function AboutSection() {
  const { t } = useLanguage();

  const downloadCV = () => {
    // Simulated CV download - in a real app, this would download an actual PDF
    const link = document.createElement('a');
    link.href = '/cvDarioReisFullStack.pdf';
    link.download = 'cvDarioReisFullStack.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Profile Card */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 bg-gradient-to-br from-card to-vscode-sidebar border-border">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-32 h-32 mx-auto flex items-center justify-center to-accent">
                <img
                  src="https://avatars.githubusercontent.com/u/85812823?v=4"
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Dario Reis</h3>
                <p className="text-muted-foreground">{t('home.title')}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
              <Button
                onClick={downloadCV}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('about.download.cv')}
              </Button>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <GraduationCap className="w-5 h-5" />
                  {t('about.timeline.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${item.type === 'work' ? 'bg-primary' : 'bg-accent'
                        }`}>
                        {item.year}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-12 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-primary">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Anos Exp.</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-success">30+</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}