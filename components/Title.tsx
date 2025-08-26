import React from 'react';
import { Box, Typography } from '@mui/material';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Box sx={{ mb: 6, width: '100%' }}> {/* mb: margin-bottom */}
      <Typography variant="h2" component="h2" sx={{
        position: 'relative',
        pb: 1, // padding-bottom para dar espaço às linhas
        '&::before': {
          content: '""',
          position: 'absolute',
          height: '4px',
          width: '50px',
          backgroundColor: 'primary.main',
          bottom: 0,
          left: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          height: '4px',
          width: '25px',
          backgroundColor: 'primary.main',
          bottom: '-8px', // para criar o espaçamento entre as linhas
          left: 0,
        },
      }}>
        {title}
      </Typography>
    </Box>
  );
}