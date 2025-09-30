import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../LanguageProvider';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiPrisma
} from 'react-icons/si';
import { FaBrain, FaRobot } from 'react-icons/fa';
import { VscGithubAction } from 'react-icons/vsc';

const skills = [
  { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Express', icon: SiExpress, color: 'text-white' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-[#E0234E]' },
  { name: 'REST/GraphQL', icon: SiGraphql, color: 'text-[#E10098]' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-[#FF9900]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'CI/CD', icon: VscGithubAction, color: 'text-[#2088FF]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-[#2D3748]' },
  { name: 'Machine Learning', icon: FaBrain, color: 'text-[#FF6F00]' },
  { name: 'APIs de IA', icon: FaRobot, color: 'text-[#9C27B0]' },
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
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('home.cta.projects')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleWhatsApp}
          >
            {t('home.cta.contact')}
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center items-center">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 transition-colors"
            onClick={() => window.open('https://github.com/darioreisjr', '_blank')}
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary hover:bg-primary/10 transition-colors"
            onClick={() => window.open('https://linkedin.com/in/darioreisjr', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>

        {/* Skills Section */}
        <div className="space-y-6 pt-8">
          <h3 className="text-xl font-semibold text-foreground">{t('home.skills.title')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                  <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="pt-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => {
              // Aqui você pode adicionar o link para o seu CV
              console.log('Download CV');
            }}
          >
            <Download className="mr-2 w-4 h-4" />
            {t('about.download.cv')}
          </Button>
        </div>
      </div>
    </section>
  );
}