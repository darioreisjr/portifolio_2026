'use client';
import React from 'react';
import { Box, Tooltip, Link as MuiLink } from '@mui/material';
import Image from 'next/image';

interface SkillItemProps {
  name: string;
  iconSrc: string;
  href: string;
}

export default function SkillItem({ name, iconSrc, href }: SkillItemProps) {
  return (
    <Tooltip title={name} placement="top">
      <MuiLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          transition: 'transform 0.3s',
          '&:hover': {
            animation: 'rotateImage 0.5s forwards',
          },
          '@keyframes rotateImage': {
            from: {
              transform: 'rotate(0deg)',
            },
            to: {
              transform: 'rotate(360deg)',
            },
          },
        }}
      >
        <Image src={iconSrc} alt={name} width={48} height={48} />
      </MuiLink>
    </Tooltip>
  );
}