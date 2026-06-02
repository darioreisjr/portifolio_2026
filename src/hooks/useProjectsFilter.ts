import { useState, useMemo } from 'react';
import { ApiProject } from '@/types/project';
import { FilterCategory, UseProjectsFilterReturn } from '@/types/filter';

export function useProjectsFilter(projects: ApiProject[], allLabel: string): UseProjectsFilterReturn {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleCategories = useMemo<FilterCategory[]>(() => {
    const slugs = [...new Set(projects.map((p) => p.category.slug))];
    return [
      { id: 'all', label: allLabel },
      ...slugs.map((slug) => ({
        id: slug,
        label: slug.charAt(0).toUpperCase() + slug.slice(1),
      })),
    ];
  }, [projects, allLabel]);

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category.slug === activeFilter),
    [projects, activeFilter]
  );

  return { activeFilter, setActiveFilter, visibleCategories, filteredProjects };
}
