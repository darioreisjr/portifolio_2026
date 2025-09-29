import React from 'react';
import { Home, User, Briefcase, FolderOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageProvider';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMobile?: boolean;
}

const sections = [
  { id: 'home', icon: Home, key: 'nav.home', path: '/' },
  { id: 'about', icon: User, key: 'nav.about', path: '/about' },
  { id: 'services', icon: Briefcase, key: 'nav.services', path: '/services' },
  { id: 'projects', icon: FolderOpen, key: 'nav.projects', path: '/projects' },
  { id: 'contact', icon: MessageSquare, key: 'nav.contact', path: '/contact' },
];

export function Navigation({ isMobile = false }: NavigationProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-vscode-titlebar border-t border-border backdrop-blur-md">
        <div className="flex justify-around py-2">
          {sections.map(({ id, icon: Icon, key, path }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 h-auto py-2 transition-all duration-300 ${
                isActive(path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-medium">{t(key)}</span>
            </Button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="floating-menu px-6 py-3">
        <div className="flex items-center gap-2">
          {sections.map(({ id, icon: Icon, key, path }) => (
            <Button
              key={id}
              variant={isActive(path) ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate(path)}
              className={`flex items-center gap-2 water-effect transition-all duration-300 ${
                isActive(path) 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium text-sm">{t(key)}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}