'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import { Clicker_Script } from 'next/font/google';

const clickerScript = Clicker_Script({ weight: ['400'], subsets: ['latin'], display: 'swap' });

export default function Logo() {
  return (
    <Box sx={{ p: 2, position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)' }}>
      <Typography
        component={Link}
        href="/"
        variant="h4"
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          padding: '15px 20px',
          fontSize: '1.875rem',
          letterSpacing: '5px',
          position: 'relative',
          textDecoration: 'none',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderBottom: '5px solid',
            borderLeft: '5px solid',
            borderColor: 'primary.main',
            bottom: 0,
            left: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderTop: '5px solid',
            borderRight: '5px solid',
            borderColor: 'primary.main',
            top: 0,
            right: 0,
          },
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: clickerScript.style.fontFamily,
            fontSize: '2.5rem',
            lineHeight: 1,
            display: 'inline-block',
            mr: '2px',
          }}
        >
          R
        </Typography>
        eis
      </Typography>
    </Box>
  );
}