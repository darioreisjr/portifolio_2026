'use client';
import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext, availablePrimaryColors } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { toggleColorMode, setPrimaryColor, mode, primaryColorKey } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ position: 'fixed', top: 60, right: isOpen ? 0 : '-160px', zIndex: 1201, transition: 'right 0.3s ease' }}>
      <Paper elevation={6} sx={{ p: 2, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: 'background.paper' }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>Tema de Cores</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {Object.entries(availablePrimaryColors).map(([key, color]) => (
            <Tooltip title={`Cor ${key.slice(-1)}`} key={key}>
              <Box
                onClick={() => setPrimaryColor(key as any)}
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: color,
                  cursor: 'pointer',
                  border: primaryColorKey === key ? '3px solid' : 'none',
                  borderColor: 'text.primary',
                }}
              />
            </Tooltip>
          ))}
        </Box>
      </Paper>
      <Box sx={{ position: 'absolute', top: 0, left: -50 }}>
        <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ backgroundColor: 'background.paper', '&:hover': { backgroundColor: 'action.hover' } }}>
          <SettingsIcon sx={{ animation: 'spin 2s linear infinite' }} />
        </IconButton>
      </Box>
      <Box sx={{ position: 'absolute', top: 55, left: -50 }}>
        <IconButton onClick={toggleColorMode} sx={{ backgroundColor: 'background.paper', '&:hover': { backgroundColor: 'action.hover' } }}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
}