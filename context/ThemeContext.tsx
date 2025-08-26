'use client';

import React, { createContext, useState, useMemo, useContext, ReactNode, useCallback, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, PaletteMode } from '@mui/material';
import { Poppins, Clicker_Script } from 'next/font/google';

// Definição das cores primárias disponíveis
const availablePrimaryColors = {
  color1: '#ec1839',
  color2: '#fa5b0f',
  color3: '#37b182',
  color4: '#1854b4',
  color5: '#f021b2',
};

type ColorKey = keyof typeof availablePrimaryColors;

// Fontes
const poppins = Poppins({ weight: ['300', '400', '500', '700'], subsets: ['latin'], display: 'swap' });
const clickerScript = Clicker_Script({ weight: ['400'], subsets: ['latin'], display: 'swap' });

// Context Type
interface ThemeContextType {
  toggleColorMode: () => void;
  setPrimaryColor: (color: ColorKey) => void;
  mode: PaletteMode;
  primaryColorKey: ColorKey;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Component
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [primaryColorKey, setPrimaryColorKey] = useState<ColorKey>('color1');

  // Carrega as preferências do localStorage no início
  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    const storedColor = localStorage.getItem('primaryColorKey') as ColorKey | null;
    if (storedMode) setMode(storedMode);
    if (storedColor) setPrimaryColorKey(storedColor);
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  }, []);

  const setPrimaryColor = useCallback((color: ColorKey) => {
    setPrimaryColorKey(color);
    localStorage.setItem('primaryColorKey', color);
  }, []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: availablePrimaryColors[primaryColorKey],
      },
      ...(mode === 'light'
        ? { // Light Mode Palette
            background: { default: '#f2f2fc', paper: '#fdf9ff' },
            text: { primary: '#302e4d', secondary: '#504e70' },
          }
        : { // Dark Mode Palette
            background: { default: '#151515', paper: '#222222' },
            text: { primary: '#ffffff', secondary: '#e9e9e9' },
            divider: 'rgba(255, 255, 255, 0.12)',
          }),
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
      h1: { fontFamily: clickerScript.style.fontFamily, fontSize: '2.5rem' },
      h2: { fontWeight: 700, fontSize: '2.5rem' },
      h3: { fontWeight: 700, fontSize: '1.5rem' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: '40px', textTransform: 'none', fontWeight: 600 },
        },
      },
    },
  }), [mode, primaryColorKey]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, setPrimaryColor, mode, primaryColorKey }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a CustomThemeProvider');
  }
  return context;
};

// Re-export das cores para o switcher
export { availablePrimaryColors };