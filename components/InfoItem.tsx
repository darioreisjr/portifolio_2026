import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

interface InfoItemProps {
  label: string;
  value: string;
  href?: string;
}

export default function InfoItem({ label, value, href }: InfoItemProps) {
  return (
    <Typography variant="body1" sx={{
      fontWeight: 600,
      py: 1, // padding vertical
      borderBottom: '1px solid',
      borderColor: 'divider'
    }}>
      {label}:
      <Typography component="span" sx={{ fontWeight: 400, color: 'text.secondary', ml: 0.5 }}>
        {href ? (
          <MuiLink href={href} target="_blank" rel="noopener noreferrer" underline="always">
            {value}
          </MuiLink>
        ) : (
          value
        )}
      </Typography>
    </Typography>
  );
}