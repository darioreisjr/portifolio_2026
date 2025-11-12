import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { StatusBar } from '@/components/StatusBar';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export default function Layout() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const map: Record<string, string> = {
      '/': 'nav.home',
      '/about': 'nav.about',
      '/services': 'nav.services',
      '/projects': 'nav.projects',
      '/contact': 'nav.contact',
    };
    const key = map[location.pathname];
    const pageTitle = key ? t(key) : '';
    document.title = pageTitle ? `${pageTitle} | ${t('site.name')}` : t('site.name');
  }, [location.pathname, t]);

  // Transição inspirada no VS Code: minimalista e eficiente
  // Combina fade suave com movimento horizontal sutil
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 20,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      filter: 'blur(4px)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Navigation isMobile={isMobile} />

      <main className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              width: '100%',
              top: 0,
              left: 0,
            }}
            onAnimationComplete={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        {/* Placeholder para manter a altura do main */}
        <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
          <Outlet />
        </div>
      </main>

      {isMobile && <div className="h-16" />}
      <div className="hidden md:block h-20" />
      
      <StatusBar />
    </div>
  );
}
