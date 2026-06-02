import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../LanguageProvider';
import { fetchProjects } from '@/services/projects';
import { useProjectsFilter } from '@/hooks/useProjectsFilter';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilterBar } from '@/components/projects/ProjectFilterBar';
import { SkeletonCard } from '@/components/ui/SkeletonCard';

export function ProjectsSection() {
  const { t } = useLanguage();

  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const { activeFilter, setActiveFilter, visibleCategories, filteredProjects } =
    useProjectsFilter(projects, t('projects.filter.all'));

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('projects.title')}
          </h2>
        </div>

        {!isLoading && !isError && (
          <ProjectFilterBar
            categories={visibleCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
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
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
