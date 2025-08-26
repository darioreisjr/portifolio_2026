import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ModalProvider } from "../../context/ModalContext";
import { CustomThemeProvider } from "../../context/ThemeContext"; // Importe o novo provedor
import ProjectModal from "../../components/ProjectModal";
import ThemeSwitcher from "../../components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Dario Reis | FullStack",
  description: "Olá, Me chamo Dario Reis e sou um Desenvolvedor FullStack.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <CustomThemeProvider> {/* Use o novo provedor aqui */}
            <ModalProvider>
              <CssBaseline />
              <ThemeSwitcher /> {/* Adicione o switcher de tema */}
              {children}
              <ProjectModal /> {/* O modal pode ficar aqui para estar disponível globalmente */}
            </ModalProvider>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}