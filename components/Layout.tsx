// components/Layout.tsx
'use client';
import React, { useState } from 'react';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  useTheme, useMediaQuery, Fab
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

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

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tabletDrawerOpen, setTabletDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleTabletDrawerToggle = () => setTabletDrawerOpen(!tabletDrawerOpen);
  const handleMobileDrawerToggle = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const drawerContent = (
    <>
      <Logo />
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* A alteração está AQUI, na propriedade 'px' (padding horizontal) */}
        <List sx={{ mt: 8, px: 3 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={isActive}
                  onClick={() => {
                    if (isTablet) setTabletDrawerOpen(false);
                    if (isMobile) setMobileDrawerOpen(false);
                  }}
                  sx={{
                    borderRadius: 2, // Adiciona bordas arredondadas para um visual mais suave
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '20',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      '&:hover': {
                         backgroundColor: theme.palette.primary.main + '20',
                      }
                    },
                  }}
                >
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
      {/* ========== LAYOUT DESKTOP ========== */}
      {isDesktop && (
        <>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: 'background.paper',
                borderRight: `1px solid ${theme.palette.divider}`,
              },
            }}
          >
            {drawerContent}
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
            {children}
          </Box>
        </>
      )}

      {/* ========== LAYOUT TABLET ========== */}
      {isTablet && (
        <>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
          <Fab
            aria-label="open drawer"
            onClick={handleTabletDrawerToggle}
            sx={{
              position: 'fixed', top: 16, left: 16, borderRadius: 2,
              backgroundColor: 'background.paper', color: 'primary.main',
              '&:hover': { backgroundColor: 'action.hover' }
            }}
          >
            <MenuIcon />
          </Fab>
          {tabletDrawerOpen && (
            <Fab
                aria-label="close drawer" onClick={handleTabletDrawerToggle}
                sx={{
                    position: 'fixed', top: 16, left: drawerWidth + 16, borderRadius: 2,
                    zIndex: theme.zIndex.drawer + 1, backgroundColor: 'background.paper',
                    color: 'primary.main', transition: 'left 0.3s ease',
                    '&:hover': { backgroundColor: 'action.hover' }
                }}
            >
                <CloseIcon />
            </Fab>
          )}
          <Drawer
            variant="temporary" anchor="left" open={tabletDrawerOpen}
            onClose={handleTabletDrawerToggle} sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
          >
            {drawerContent}
          </Drawer>
        </>
      )}

      {/* ========== LAYOUT MOBILE ========== */}
      {isMobile && (
        <>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
          <Fab
            aria-label="open menu" onClick={handleMobileDrawerToggle}
            sx={{
              position: 'fixed', bottom: 16, right: 16, borderRadius: 2,
              backgroundColor: 'background.paper', color: 'primary.main',
              '&:hover': { backgroundColor: 'action.hover' }
            }}
          >
            <MenuIcon />
          </Fab>
          <Drawer
            anchor="bottom" open={mobileDrawerOpen} onClose={handleMobileDrawerToggle}
            sx={{
              '& .MuiDrawer-paper': {
                height: 'auto', maxHeight: '80%', borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      )}
    </Box>
  );
}