import { ApiProject } from './project';

export interface FilterCategory {
  id: string;
  label: string;
}

export interface UseProjectsFilterReturn {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  visibleCategories: FilterCategory[];
  filteredProjects: ApiProject[];
}
