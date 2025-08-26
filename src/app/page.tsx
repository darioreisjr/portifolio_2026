import AppLayout from "../..//components/Layout";
import Profile from "../../components/Profile";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <AppLayout>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)' // Ajuste baseado no padding do main
      }}>
        <Profile />
      </Box>
    </AppLayout>
  );
}