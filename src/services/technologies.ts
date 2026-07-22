import type { ApiTechnology } from '@/types/technology';
import type { ApiResponse } from '@/types/project';

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTechnologies(): Promise<ApiTechnology[]> {
  const res = await fetch(`${API_URL}/api/v1/technologies`);
  if (!res.ok) throw new Error('Falha ao carregar tecnologias');
  const json: ApiResponse<ApiTechnology> = await res.json();
  return json.data;
}
