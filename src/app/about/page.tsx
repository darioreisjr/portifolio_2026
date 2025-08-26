import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import InfoItem from "../../../components/InfoItem";
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <AppLayout>
      <Container>
        <Title title="Sobre mim" />

        <Box>
          <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
            Me chamo Dario Reis e sou{' '}
            <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
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

          {/* Coluna de Skills (será adicionada no próximo passo) */}
          <Grid item xs={12} lg={6}>
            <Typography variant="h5">Skills</Typography>
            {/* O conteúdo das skills virá aqui */}
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}