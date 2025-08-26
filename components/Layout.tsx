'use client';
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';

const drawerWidth = 270; // Largura da sua sidebar (16.875rem)

const navItems = [
  { text: 'Início', icon: <HomeIcon />, href: '/' },
  { text: 'Sobre', icon: <PersonIcon />, href: '/about' },
  { text: 'Serviços', icon: <ListAltIcon />, href: '/services' },
  { text: 'Projetos', icon: <WorkIcon />, href: '/projects' },
  { text: 'Contato', icon: <MailIcon />, href: '/contact' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper', // Usa a cor do tema
            borderRight: '1px solid rgba(0, 0, 0, 0.12)'
          },
        }}
      >
        <Box sx={{ overflow: 'auto', mt: 10 }}> {/* Margem para o Logo */}
            {/* Adicionaremos o Logo e o Toggle aqui no futuro */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemIcon sx={{color: 'text.secondary'}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, // padding
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: 'background.default' // Usa a cor do tema
        }}
      >
        {children}
      </Box>
    </Box>
  );
}