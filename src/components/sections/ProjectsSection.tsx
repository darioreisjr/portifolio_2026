import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../LanguageProvider';
import { fetchProjects } from '@/services/projects';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const MotionCard = motion(Card);

const SkeletonCard = () => (
  <div className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-muted" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-full" />
      <div className="h-4 bg-muted rounded w-5/6" />
      <div className="flex gap-2 mt-4">
        <div className="h-6 bg-muted rounded w-16" />
        <div className="h-6 bg-muted rounded w-16" />
        <div className="h-6 bg-muted rounded w-16" />
      </div>
    </div>
  </div>
);

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const slugs = [...new Set(projects.map((p) => p.category.slug))];
  const visibleCategories = [
    { id: 'all', label: t('projects.filter.all') },
    ...slugs.map((slug) => ({
      id: slug,
      label: slug.charAt(0).toUpperCase() + slug.slice(1),
    })),
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.slug === activeFilter);

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('projects.title')}
          </h2>
        </div>

        {!isLoading && !isError && (
          <div className="flex flex-wrap justify-center gap-2">
            {visibleCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className={`transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        )}

        {isError && (
          <p className="text-center text-muted-foreground">
            {t('projects.error') || 'Não foi possível carregar os projetos.'}
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredProjects.map((project) => (
                <MotionCard
                  key={project.id}
                  className={`bg-card border-border group h-full flex flex-col ${
                    project.isFeatured ? 'ring-2 ring-primary/20' : ''
                  }`}
                  whileHover={{
                    scale: 1.03,
                    borderColor: 'hsl(var(--primary) / 0.5)',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {project.isFeatured && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                          {t('projects.featured')}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.projectUrl && (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => window.open(project.projectUrl!, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.repositoryUrl && (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => window.open(project.repositoryUrl!, '_blank')}
                          >
                            <GithubIcon />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="h-14 mb-2">
                      <CardTitle className="text-foreground line-clamp-2">
                        {project.title}
                      </CardTitle>
                    </div>

                    <div className="h-16 mb-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="h-20 mb-4 overflow-hidden">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 6).map(({ technology }) => (
                          <Badge key={technology.id} variant="secondary" className="text-xs">
                            {technology.name}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 6}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto pt-2">
                      {project.projectUrl && (
                        <Button
                          size="sm"
                          variant="default"
                          className="flex-1"
                          onClick={() => window.open(project.projectUrl!, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('projects.demo')}
                        </Button>
                      )}
                      {project.repositoryUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(project.repositoryUrl!, '_blank')}
                        >
                          <GithubIcon className="w-4 h-4 mr-2" />
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
