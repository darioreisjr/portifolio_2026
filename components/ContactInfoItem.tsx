'use client';
import React from 'react';
import { Paper, Typography, Box, Link as MuiLink } from '@mui/material';
import { Icon } from '@mui/material';

interface ContactInfoItemProps {
  icon: string;
  title: string;
  subtitle: string;
  href?: string;
  animation: 'upDown' | 'downUp';
}

export default function ContactInfoItem({ icon, title, subtitle, href, animation }: ContactInfoItemProps) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2.5,
        textAlign: 'center',
        height: '100%',
        animation: `${animation} 2s infinite ease-in-out`,
        '@keyframes upDown': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        '@keyframes downUp': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }}
    >
      <Icon
        baseClassName="fa"
        className={icon}
        sx={{ fontSize: '2rem', color: 'primary.main', mb: 1 }}
      />
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {href ? (
        <MuiLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="text.secondary"
        >
          {subtitle}
        </MuiLink>
      ) : (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Paper>
  );
}