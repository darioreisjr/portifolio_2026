import { Project } from '../types/project';

// Mapeamento de nomes de skill para caminhos de ícone
const iconMap: { [key: string]: string } = {
  html: "/icons/html.svg",
  css: "/icons/css.svg",
  javascript: "/icons/javascript.svg",
  react: "/icons/react.svg",
  typescript: "/icons/typescript.svg",
  sass: "/icons/sass.svg",
  vite: "/icons/vite.svg",
  tailwindcss: "/icons/tailwindcss.svg",
  styledcomponents: "/icons/styled-components.svg",
  // Adicione outros ícones conforme necessário
};

const getIcons = (skills: string[]): string[] => {
    return skills.map(skill => iconMap[skill.toLowerCase()] || "/icons/default.svg");
}

const projects: Omit<Project, 'icon'>[] = [
    {
        img: "/projects/mazaBarbershop.png",
        title: "Maza Barbershop",
        description: "Este projeto parece ser um site elegante para uma barbearia, construído com foco em design e utilizando tecnologias web modernas.",
        repository: "https://github.com/darioreisjr/maza_barbershop",
        deploy: "https://mazabarbershop.vercel.app/",
        skill: ["HTML", "CSS", "JavaScript", "Sass"],
        createdAt: "10/06/2024",
    },
    {
        img: "/projects/cafeBufgado.png",
        title: "Café Bugado",
        description: "Uma interface interativa para uma cafeteria moderna, voltada para desenvolvedores. Permite visualizar o cardápio, adicionar itens ao carrinho e realizar pedidos online.",
        repository: "https://github.com/darioreisjr/projeto-cafe-bugado-reactjs",
        deploy: "https://cafebugado.vercel.app/",
        skill: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
        createdAt: "05/03/2024",
    },
    {
        img: "/projects/devStore.png",
        title: "E-commerce DevStore",
        description: "O DevStore é uma loja virtual moderna e completa. Possui interface amigável, layout responsivo para qualquer dispositivo e otimização para SEO, facilitando a busca por produtos.",
        repository: "https://github.com/darioreisjr/projeto-de-e-commerce-devstore",
        deploy: "https://DEVSTORE.vercel.app/",
        skill: ["TypeScript", "React", "TailwindCSS"],
        createdAt: "10/02/2024",
    },
    {
        img: "/projects/KissNotes.png",
        title: "KissNotes",
        description: "Um aplicativo de bloco de notas minimalista e intuitivo, construído com ReactJS, Vite e Styled Components para uma maneira rápida e eficiente de tomar notas.",
        repository: "https://github.com/darioreisjr/kissnotes_reactjs",
        deploy: "https://kissnotes.netlify.app/",
        skill: ["React", "Vite", "StyledComponents"],
        createdAt: "14/03/2024",
    },
    // Adicione os outros projetos aqui...
];

const projectsWithIcons: Project[] = projects.map(p => ({
    ...p,
    icon: getIcons(p.skill),
}));


// Ordenar projetos pela data de criação (mais recente primeiro)
export const projectsSorted = projectsWithIcons.sort((a, b) => {
  const [dayA, monthA, yearA] = a.createdAt.split('/').map(Number);
  const [dayB, monthB, yearB] = b.createdAt.split('/').map(Number);
  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);
  return dateB.getTime() - dateA.getTime();
});