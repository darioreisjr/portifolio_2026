'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins, Clicker_Script } from 'next/font/google';

// Importando as fontes do Google Fonts
const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const clickerScript = Clicker_Script({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

// Definindo o tema principal
const theme = createTheme({
    palette: {
        // Modo 'light' (padrão)
        primary: {
            main: '#ec1839', // Cor principal (--skin-color)
        },
        background: {
            default: '#f2f2fc', // --bg-black-900
            paper: '#fdf9ff',   // --bg-black-100
        },
        text: {
            primary: '#302e4d',   // --text-black-900
            secondary: '#504e70', // --text-black-700
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        h1: { fontFamily: clickerScript.style.fontFamily, fontSize: '2.5rem' },
        h2: { fontWeight: 700, fontSize: '2.5rem' },
        h3: { fontWeight: 700, fontSize: '1.5rem' },
        // Adicione outras variantes conforme necessário
    },
    components: {
        // Aqui você pode customizar componentes globalmente
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '40px',
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;