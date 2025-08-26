'use client';
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo'; // Importe o logo

const drawerWidth = 270;

const navItems = [
  { text: 'Início', icon: <HomeIcon />, href: '/' },
  { text: 'Sobre', icon: <PersonIcon />, href: '/about' },
  { text: 'Serviços', icon: <ListAltIcon />, href: '/services' },
  { text: 'Projetos', icon: <WorkIcon />, href: '/projects' },
  { text: 'Contato', icon: <MailIcon />, href: '/contact' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Lógica para sidebar móvel (não implementada, mas estrutura está aqui)
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <>
      <Logo />
      <Box sx={{ mt: '150px' }}>
        <List>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} href={item.href} selected={isActive}>
                  <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: isActive ? 'primary.main' : 'text.primary' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'background.paper',
            borderRight: `1px solid ${theme.palette.divider}`
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: 'background.default'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}