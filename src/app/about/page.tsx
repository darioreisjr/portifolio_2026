'use client';
import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import InfoItem from "../../../components/InfoItem";
import SkillItem from "../../../components/SkillItem";
import TimelineEntry from "../../../components/TimelineEntry"; // Importe o componente da timeline
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import Timeline from '@mui/lab/Timeline'; // Importe a Timeline principal
import Link from 'next/link';

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

const educationData = [
  {
    date: "2021 - 2023",
    title: "Análise e Desenvolvimento de Sistemas - Estácio",
    subtitle: "Faculdade",
    text: "O curso proporcionou uma base sólida em desenvolvimento de software, análise de sistemas e gestão de projetos, com foco em metodologias ágeis e ferramentas modernas para criar soluções tecnológicas eficientes e inovadoras."
  },
  {
    date: "2022",
    title: "Desenvolvedor Java Web Full Stack - Generation Brasil",
    subtitle: "Bootcamp",
    text: "Programa intensivo e focado em projetos práticos que simulavam demandas reais do mercado, desenvolvendo habilidades em tecnologias como Java, Spring, Angular, e metodologias ágeis como Scrum."
  }
];

const experienceData = [
  {
    date: "Nov 2023 - Presente",
    title: "Atendente | Especialista em Gestão de Pessoas e eSocial",
    subtitle: "Healthwork Medicina e Segurança no Trabalho",
    text: "Gerenciamento do cadastro de colaboradores, correção de erros cadastrais e assegurando a integridade dos dados para conformidade com o eSocial."
  },
  {
    date: "Ago 2023 - Presente",
    title: "Desenvolvedor Web Front-end",
    subtitle: "Workana · Freelance",
    text: "Desenvolvimento de aplicações web full-stack com React.js, Typescript, Next.js e Node.js. Responsável por criar interfaces, consumir APIs RESTful, implementar funcionalidades com React Hooks e realizar testes unitários com Jest."
  },
];

export default function AboutPage() {
  return (
    <AppLayout>
      <Container>
        <Title title="Sobre mim" />

        <Box>
          <Typography variant="h3" component="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Me chamo Dario Reis e sou{' '}
            <Typography component="span" variant="h3" sx={{ color: 'primary.main', fontSize: 'inherit' }}>
              Desenvolvedor FullStack
            </Typography>
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Sou um Desenvolvedor Full Stack com formação em Análise e
            Desenvolvimento de Sistemas. Minha paixão por tecnologia e
            programação me impulsiona a buscar constantemente novos
            desafios e oportunidades para evoluir minhas habilidades. Com
            uma base sólida tanto no front-end quanto no back-end, estou
            sempre empenhado em aprender novas tecnologias e aplicar as
            melhores práticas no desenvolvimento de soluções inovadoras.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}><InfoItem label="Cidade" value="São Paulo" /></Grid>
              <Grid item xs={12} sm={6}><InfoItem label="Estado" value="SP" /></Grid>
              <Grid item xs={12} sm={6}><InfoItem label="Email" value="dev.darioreis@gmail.com" href="mailto:dev.darioreis@gmail.com" /></Grid>
              <Grid item xs={12} sm={6}><InfoItem label="Telefone" value="(11) 9 6188-9886" href="tel:5511961889886" /></Grid>
              <Grid item xs={12} sm={6}><InfoItem label="LinkedIn" value="in/darioreisjr" href="https://www.linkedin.com/in/darioreisjr" /></Grid>
              <Grid item xs={12} sm={6}><InfoItem label="GitHub" value="darioreisjr" href="https://github.com/darioreisjr" /></Grid>
            </Grid>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" href="/cv_Dario-Reis_desenvolvedor_full_stack.pdf" download>Baixar CV</Button>
              <Button variant="outlined" component={Link} href="/contact">Contate-me</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              {skills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} iconSrc={skill.iconSrc} href={skill.href} />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Coluna Educação */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700 }}>Educação</Typography>
            <Timeline position="right">
              {educationData.map((item, index) => (
                <TimelineEntry key={index} {...item} />
              ))}
            </Timeline>
          </Grid>

          {/* Coluna Experiência */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700 }}>Experiência</Typography>
            <Timeline position="right">
              {experienceData.map((item, index) => (
                <TimelineEntry key={index} {...item} />
              ))}
            </Timeline>
          </Grid>
        </Grid>

      </Container>
    </AppLayout>
  );
}