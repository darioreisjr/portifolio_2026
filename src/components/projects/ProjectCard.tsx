import React, { useCallback } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GithubIcon } from '@/components/ui/GithubIcon';
import { useLanguage } from '@/components/LanguageProvider';
import { ApiProject } from '@/types/project';

const MotionCard = motion(Card);

interface ProjectCardProps {
  project: ApiProject;
}

export const ProjectCard = React.memo(({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  const openProjectUrl = useCallback(() => {
    if (project.projectUrl) window.open(project.projectUrl, '_blank');
  }, [project.projectUrl]);

  const openRepositoryUrl = useCallback(() => {
    if (project.repositoryUrl) window.open(project.repositoryUrl, '_blank');
  }, [project.repositoryUrl]);

  return (
    <MotionCard
      className={`bg-card border-border group h-full flex flex-col ${project.isFeatured ? 'ring-2 ring-primary/20' : ''
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
              <Button size="sm" variant="secondary" onClick={openProjectUrl}>
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
            {project.repositoryUrl && (
              <Button size="sm" variant="secondary" onClick={openRepositoryUrl}>
                <GithubIcon />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="h-14 mb-2">
          <CardTitle className="text-foreground line-clamp-2">{project.title}</CardTitle>
        </div>

        <div className="h-16 mb-4">
          <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
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
            <Button size="sm" variant="default" className="flex-1" onClick={openProjectUrl}>
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('projects.demo')}
            </Button>
          )}
          {project.repositoryUrl && (
            <Button size="sm" variant="outline" className="flex-1" onClick={openRepositoryUrl}>
              <GithubIcon className="w-4 h-4 mr-2" />
              {t('projects.code')}
            </Button>
          )}
        </div>
      </CardContent>
    </MotionCard>
  );
});

ProjectCard.displayName = 'ProjectCard';
