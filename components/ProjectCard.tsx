'use client';
import React from 'react';
import { Card, CardMedia, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Project } from '@/types/project';
interface ProjectCardProps {
  project: Project;
  onMoreInfoClick: (project: Project) => void;
}

export default function ProjectCard({ project, onMoreInfoClick }: ProjectCardProps) {
  return (
    <Card
      sx={{
        p: 0.5,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        animation: 'shadowPulse 1.5s infinite alternate',
        '@keyframes shadowPulse': {
          '0%': {
            boxShadow: '0 0 20px rgba(48, 46, 77, 0.8)',
          },
          '100%': {
            boxShadow: '0 0 30px rgba(48, 46, 77, 0.1)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', '&:hover .overlay': { opacity: 1 } }}>
        <CardMedia
          component="img"
          height="270"
          image={project.img}
          alt={project.title}
          sx={{
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 1,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box
          className="overlay"
          component={Link}
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: 1,
            cursor: 'pointer',
          }}
        >
          <Typography variant="h5">{project.title}</Typography>
        </Box>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 0.5,
          backgroundColor: '#302e4d', // Cor customizada para o botão
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
        onClick={() => onMoreInfoClick(project)}
      >
        Ver mais informações
      </Button>
    </Card>
  );
}