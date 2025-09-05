'use client';
import AppLayout from "../../components/Layout";
import Profile from "../../components/Profile";
import { Box, Container } from '@mui/material';

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <Profile />
        </Box>
      </Container>
    </AppLayout>
  );
}