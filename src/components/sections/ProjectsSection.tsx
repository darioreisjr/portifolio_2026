import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../LanguageProvider';
import techcompass from '../../../public/techcompass.png';
import portalnoticias from '../../../public/portaldenoticias.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'backend';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tech Compass',
    description: 'Uma aplicação React moderna para descobrir carreiras em tecnologia através de um questionário interativo. Projeto atualizado com as tecnologias mais recentes do ecossistema React.',
    image: techcompass,
    technologies: ['React', 'Vite', 'ESLint', 'JavaScript', 'CSS Puro', 'Gemini AI API', 'GitHub API'],
    category: 'web',
    demoUrl: 'https://techcompass.cafebugado.com.br/',
    githubUrl: 'https://github.com/darioreisjr/TechCompass',
    featured: true
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicativo mobile de gerenciamento de tarefas com sincronização em tempo real, notificações push e modo offline.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Expo', 'Firebase', 'AsyncStorage'],
    category: 'mobile',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'API Gateway',
    description: 'Gateway de APIs com autenticação JWT, rate limiting, cache Redis e documentação automática com Swagger.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'backend',
    githubUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Site portfolio responsivo com animações, tema dark/light e múltiplos idiomas.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'App de fitness com tracking de exercícios, métricas de saúde e integração com wearables.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    technologies: ['React Native', 'HealthKit', 'Google Fit', 'SQLite'],
    category: 'mobile',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Real-time Chat API',
    description: 'API de chat em tempo real com WebSockets, salas privadas e histórico de mensagens.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    category: 'backend',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Portal de Notícias de Tecnologia',
    description: 'Esta homepage foi criada para oferecer uma experiência intuitiva e moderna para usuários de desktop, destacando as últimas novidades em tecnologia, inteligência artificial, robótica e inovações digitais.',
    image: portalnoticias,
    technologies: ['HTML5', 'CSS3', 'Git', 'Vercel'],
    category: 'web',
    demoUrl: 'https://drportaldenoticias.vercel.app/',
    githubUrl: 'https://github.com/darioreisjr/projeto-portal-de-noticias'
  }
];

const categories = [
  { id: 'all', key: 'projects.filter.all' },
  { id: 'web', key: 'projects.filter.web' },
  { id: 'mobile', key: 'projects.filter.mobile' },
  { id: 'backend', key: 'projects.filter.backend' },
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('projects.title')}</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-300 ${activeFilter === category.id
                ? 'bg-primary text-primary-foreground'
                : 'border-border hover:border-primary/50'
                }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {t(category.key)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in ${project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demoUrl && (
                      <Button size="sm" variant="secondary" onClick={() => window.open(project.demoUrl, '_blank')}>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" onClick={() => window.open(project.githubUrl, '_blank')}>
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('projects.demo')}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t('projects.code')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Carregar Mais Projetos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}