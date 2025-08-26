// components/Profile.tsx
'use client';
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

// Importe sua foto da pasta public
import profilePhoto from '../public/profile.png';

export default function Profile() {
  const jobs = [
    "Desenvolvedor FullStack",
    "Desenvolvedor Front-end",
    "Desenvolvedor Back-end",
    "Front-end Security"
  ];

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Coluna de Informações */}
        <Grid item xs={12} md={7}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
            Olá, meu nome é{' '}
            <Typography
              component="span"
              variant="h1" // Usa a fonte Clicker Script do tema
              sx={{ color: 'primary.main', fontSize: '1.875rem' }}
            >
              Dario Reis
            </Typography>
          </Typography>

          <Typography variant="h4" component="h3" sx={{ display: 'flex', flexWrap: 'wrap', my: 1, fontSize: '1.875rem', fontWeight: 500 }}>
            <span style={{ marginRight: '8px' }}>Sou um</span>
            <Box component="span" sx={{ color: 'primary.main' }}>
              <Typewriter
                options={{
                  strings: jobs,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 60,
                }}
              />
            </Box>
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ my: 2, textAlign: 'justify' }}>
            Tenho três anos de experiência em desenvolvimento web, com foco tanto no front-end quanto no back-end. Durante esse tempo, me especializei em tecnologias como JavaScript e Node.js, buscando constantemente aprimorar minhas habilidades e aprender as melhores práticas do mercado. Meu objetivo é criar interfaces intuitivas e experiências de usuário de alta qualidade. Além disso, estou sempre aberto a novas oportunidades de aprendizado e desafios que me permitam crescer profissionalmente.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/contact"
            sx={{ mt: 4 }}
          >
            Entrar em contato
          </Button>
        </Grid>

        {/* Coluna da Foto */}
        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', width: '70%', maxWidth: '400px',
            '&::before': {
                content: '""',
                position: 'absolute',
                borderTop: '10px solid',
                borderLeft: '10px solid',
                borderColor: 'primary.main',
                height: '80px',
                width: '80px',
                left: '20px',
                top: '-40px',
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                borderBottom: '10px solid',
                borderRight: '10px solid',
                borderColor: 'primary.main',
                height: '80px',
                width: '80px',
                right: '-20px',
                bottom: '-40px',
            }
          }}>
            <Image
              src={profilePhoto}
              alt="Foto de Dario Reis"
              width={400}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px',
                objectFit: 'cover'
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}