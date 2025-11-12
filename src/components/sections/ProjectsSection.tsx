import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../LanguageProvider';
import techcompass from '../../../public/techcompass.png';
import portalnoticias from '../../../public/portaldenoticias.png';
import wemoment from '../../../public/wemoment.png';
import lpwemoment from '../../../public/lpwemoment.png';
import eventflow from '../../../public/EventFlow .png';
import stackid from '../../../public/stackid.png';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
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
    titleKey: 'projects.items.techcompass.title',
    descriptionKey: 'projects.items.techcompass.description',
    image: techcompass,
    technologies: ['React', 'Vite', 'ESLint', 'JavaScript', 'CSS Puro', 'Gemini AI API', 'GitHub API'],
    category: 'web',
    demoUrl: 'https://techcompass.cafebugado.com.br/',
    githubUrl: 'https://github.com/darioreisjr/TechCompass',
    featured: true
  },
  {
    id: 2,
    titleKey: 'projects.items.wemoment_app.title',
    descriptionKey: 'projects.items.wemoment_app.description',
    image: wemoment,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'React Context', 'useReducer', 'localStorage', 'FileReader API', 'Canvas API', 'Base64 Encoding'],
    category: 'web',
    demoUrl: 'https://app.wemoment.com.br/',
    githubUrl: 'https://github.com/darioreisjr/WeMoment',
    featured: true
  },
  {
    id: 3,
    titleKey: 'projects.items.api_wemoment.title',
    descriptionKey: 'projects.items.api_wemoment.description',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Express', 'Supabase', 'cors', 'Dotenv'],
    category: 'backend',
    githubUrl: 'https://github.com/darioreisjr/api-wemoment',
    featured: true
  },
  {
    id: 4,
    titleKey: 'projects.items.lp_wemoment.title',
    descriptionKey: 'projects.items.lp_wemoment.description',
    image: lpwemoment,
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'tailwindcss-animate', 'Lucide React', 'Framer Motion', 'Radix UI', '@tanstack/react-query', 'react-router-dom', 'react-helmet-async', '@vercel/analytics'],
    category: 'web',
    demoUrl: 'https://www.wemoment.com.br',
    githubUrl: 'https://github.com/darioreisjr/lp-wemoment'
  },
  {
    id: 5,
    titleKey: 'projects.items.eventflow.title',
    descriptionKey: 'projects.items.eventflow.description',
    image: eventflow,
    technologies: ['React', 'Vite ', 'CSS Variables ', 'PapaCSV', 'Intersection Observer'],
    category: 'web',
    demoUrl: 'https://eventos.cafebugado.com.br/',
    githubUrl: 'https://github.com/darioreisjr/agendas_eventos'
  },
  {
    id: 6,
    titleKey: 'projects.items.stackid.title',
    descriptionKey: 'projects.items.stackid.description',
    image: stackid,
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Frame motion', 'Lucide React', 'html-to-image', 'tsParticles', 'ESLint'],
    category: 'web',
    demoUrl: 'https://stackid.darioreis.dev/',
    githubUrl: 'https://github.com/darioreisjr/stackid'
  },
  {
    id: 7,
    titleKey: 'projects.items.portal_tech.title',
    descriptionKey: 'projects.items.portal_tech.description',
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

// Criando um Card com motion
const MotionCard = motion(Card);

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Compute visible categories based on existing projects
  const availableFilterIds = new Set(projects.map((p) => p.category));
  const visibleCategories = categories.filter(
    (c) => c.id === 'all' || availableFilterIds.has(c.id as 'web' | 'mobile' | 'backend')
  );

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Ensure active filter is valid among visible categories
  useEffect(() => {
    const visibleIds = new Set(visibleCategories.map((c) => c.id));
    if (!visibleIds.has(activeFilter)) {
      setActiveFilter('all');
    }
  }, [activeFilter, visibleCategories]);

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('projects.title')}</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {visibleCategories.map((category) => (
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
          {filteredProjects.map((project) => (
            <MotionCard
              key={project.id}
              className={`bg-card border-border group ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
              whileHover={{
                scale: 1.03,
                borderColor: 'hsl(var(--primary) / 0.5)',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      {t('projects.featured')}
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
                  <CardTitle className="text-foreground">{t(project.titleKey)}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {t(project.descriptionKey)}
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
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('projects.demo')}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t('projects.code')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
