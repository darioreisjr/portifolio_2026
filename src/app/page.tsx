import AppLayout from "../../components/Layout";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Typography variant="h2">
          Página Inicial
        </Typography>
        <Typography paragraph>
          O conteúdo da sua página principal virá aqui.
        </Typography>
      </Container>
    </AppLayout>
  );
}