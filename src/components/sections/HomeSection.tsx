import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../LanguageProvider';

const skills = [
  { name: 'React', icon: '⚛️', color: 'text-blue-500' },
  { name: 'Next.js', icon: '🔥', color: 'text-white' },
  { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
  { name: 'Node.js', icon: '💚', color: 'text-green-500' },
  { name: 'Tailwind', icon: '🎨', color: 'text-cyan-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' },
];

export function HomeSection() {
  const { t } = useLanguage();
  const [typingText, setTypingText] = useState('');
  const fullText = t('home.title');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dario Reis
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground h-8 font-mono">
            <span className="typing-effect">{typingText}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          <p className="text-foreground max-w-3xl mx-auto leading-relaxed">
            {t('home.description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {t('home.cta.projects')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleWhatsApp}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('home.cta.contact')}
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">{t('home.skills.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 text-center space-y-2">
                  <div className="text-2xl">{skill.icon}</div>
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center gap-4 pt-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.open('https://github.com/darioreisjr', '_blank')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.open('https://linkedin.com/in/darioreisjr', '_blank')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}