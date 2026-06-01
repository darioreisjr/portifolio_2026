import type { ApiProject, ApiResponse } from '@/types/project';

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProjects(): Promise<ApiProject[]> {
  const res = await fetch(`${API_URL}/api/v1/projects?limit=50`);
  if (!res.ok) throw new Error('Falha ao carregar projetos');
  const json: ApiResponse<ApiProject> = await res.json();
  return json.data;
}
