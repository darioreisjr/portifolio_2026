import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import InfoItem from "../../../components/InfoItem";
import SkillItem from "../../../components/SkillItem"; // Importe o novo componente
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import Link from 'next/link';

// Lista de skills baseada no seu arquivo About.tsx original
const skills = [
    { name: "HTML", iconSrc: "/icons/html.svg", href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" },
    { name: "CSS", iconSrc: "/icons/css.svg", href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
    { name: "SASS", iconSrc: "/icons/sass.svg", href: "https://sass-lang.com/" },
    { name: "JavaScript", iconSrc: "/icons/javascript.svg", href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
    { name: "Gulp", iconSrc: "/icons/gulp.svg", href: "https://gulpjs.com/" },
    { name: "Webpack", iconSrc: "/icons/webpack.svg", href: "https://webpack.js.org/" },
    { name: "React.js", iconSrc: "/icons/react.svg", href: "https://reactjs.org/" },
    { name: "Vite", iconSrc: "/icons/vite.svg", href: "https://vitejs.dev/" },
    { name: "Styled Components", iconSrc: "/icons/styled-components.svg", href: "https://styled-components.com/" },
    { name: "TypeScript", iconSrc: "/icons/typescript.svg", href: "https://www.typescriptlang.org/" },
    { name: "Redux", iconSrc: "/icons/redux.svg", href: "https://redux.js.org/" },
    { name: "Tailwind CSS", iconSrc: "/icons/tailwindcss.svg", href: "https://tailwindcss.com/" },
    { name: "Figma", iconSrc: "/icons/figma.svg", href: "https://www.figma.com/" },
    { name: "Node.js", iconSrc: "/icons/node.svg", href: "https://nodejs.org/en/" },
    { name: "Express.js", iconSrc: "/icons/express.svg", href: "https://expressjs.com/" },
    { name: "MongoDB", iconSrc: "/icons/mongodb.svg", href: "https://www.mongodb.com/" },
    { name: "MySQL", iconSrc: "/icons/mysql.svg", href: "https://www.mysql.com/" },
    { name: "Prisma", iconSrc: "/icons/prisma.svg", href: "https://www.prisma.io/" },
    { name: "Fastify", iconSrc: "/icons/fastify.svg", href: "https://www.fastify.io/" },
    { name: "Docker", iconSrc: "/icons/docker.svg", href: "https://www.docker.com/" },
    { name: "Git", iconSrc: "/icons/git.svg", href: "https://git-scm.com/" },
    { name: "GitHub", iconSrc: "/icons/github.svg", href: "https://github.com/" },
];


export default function AboutPage() {
  return (
    <AppLayout>
      <Container>
        <Title title="Sobre mim" />

        {/* ... (código da seção de informações que já fizemos) ... */}
        <Box>
            {/* ... */}
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Coluna de Informações e Botões */}
          <Grid item xs={12} lg={6}>
             <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <InfoItem label="Cidade" value="São Paulo" />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <InfoItem label="Estado" value="SP" />
                </Grid>
                 <Grid item xs={12} sm={6}>
                  <InfoItem label="Email" value="dev.darioreis@gmail.com" href="mailto:dev.darioreis@gmail.com" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InfoItem label="Telefone" value="(11) 9 6188-9886" href="tel:5511961889886" />
                </Grid>
                 <Grid item xs={12} sm={6}>
                   <InfoItem label="LinkedIn" value="in/darioreisjr" href="https://www.linkedin.com/in/darioreisjr" />
                </Grid>
                 <Grid item xs={12} sm={6}>
                   <InfoItem label="GitHub" value="darioreisjr" href="https://github.com/darioreisjr" />
                </Grid>
            </Grid>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                href="/cv_Dario-Reis_desenvolvedor_full_stack.pdf"
                download
              >
                Baixar CV
              </Button>
              <Button variant="outlined" component={Link} href="/contact">
                Contate-me
              </Button>
            </Stack>
          </Grid>

          {/* Coluna de Skills */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: {xs: 'center', lg: 'flex-start'} }}>
              {skills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  iconSrc={skill.iconSrc}
                  href={skill.href}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}