'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Icon } from '@mui/material'; // Usaremos o componente Icon para renderizar classes do Font Awesome

interface ServiceCardProps {
  icon: string; // Ex: "fas fa-file-alt"
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        textAlign: 'center',
        p: 2,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 6, // Aumenta a sombra no hover
          '& .service-icon-wrapper': {
            backgroundColor: 'primary.main',
          },
          '& .service-icon': {
            color: '#fff',
            fontSize: '1.5625rem',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '2px',
          backgroundColor: 'primary.main',
          top: 0,
          left: 0,
          animation: 'outlineAnimation 4s linear infinite',
        },
        '@keyframes outlineAnimation': {
            '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
            '25%': { transform: 'scaleX(1)', transformOrigin: 'left' },
            '50%': { transform: 'scaleX(1)', transformOrigin: 'right' },
            '75%': { transform: 'scaleX(0)', transformOrigin: 'right' },
            '100%': { transform: 'scaleX(0)', transformOrigin: 'left' },
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          className="service-icon-wrapper"
          sx={{
            height: '60px',
            width: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            transition: 'all 0.3s ease',
          }}
        >
          <Icon
            baseClassName="fas"
            className={`${icon} service-icon`}
            sx={{
              fontSize: '2.5rem',
              color: 'primary.main',
              transition: 'all 0.3s ease',
            }}
          />
        </Box>
        <Typography variant="h6" component="h4" sx={{ fontWeight: 700, mb: 1.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}