import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { StatusBar } from '@/components/StatusBar';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Layout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Navigation isMobile={isMobile} />

      <main className="relative">
        <Outlet />
      </main>

      {isMobile && <div className="h-16" />} {/* Spacer for mobile nav */}
      <div className="hidden md:block h-20" /> {/* Spacer for desktop floating nav */}
      
      <StatusBar />
    </div>
  );
}