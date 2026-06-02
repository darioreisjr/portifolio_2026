export interface ApiProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string | null;
  repositoryUrl: string | null;
  isFeatured: boolean;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  technologies: {
    technology: {
      id: string;
      name: string;
      iconUrl: string;
    };
  }[];
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
