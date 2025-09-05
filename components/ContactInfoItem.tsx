'use client';
import React from 'react';
import { Paper, Typography, Box, Link as MuiLink, useTheme } from '@mui/material'; // Importe o hook useTheme
import { Phone, Mail, MapPin, Linkedin, LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: string;
  title: string;
  subtitle: string;
  href?: string;
}

const LucideIconMap: { [key: string]: LucideIcon } = {
  "phone": Phone,
  "mail": Mail,
  "map-pin": MapPin,
  "linkedin": Linkedin,
};

export default function ContactInfoItem({ icon, title, subtitle, href }: ContactInfoItemProps) {
  const theme = useTheme(); // Use o hook para acessar o objeto do tema
  const IconComponent = LucideIconMap[icon];

  if (!IconComponent) {
    console.warn(`Ícone Lucide "${icon}" não encontrado.`);
    return null;
  }

  const content = (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 10px 20px ${theme.palette.primary.main}33`,
        },
      }}
    >
      {/* CORREÇÃO AQUI: Passando a cor primária como uma string */}
      <IconComponent size={24} color={theme.palette.primary.main} />
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );

  return href ? (
    <MuiLink href={href} target="_blank" rel="noopener noreferrer" underline="none">
      {content}
    </MuiLink>
  ) : (
    content
  );
}