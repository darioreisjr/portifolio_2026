import React from 'react';
import { Monitor, Moon, Sun, Globe, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from './ThemeProvider';
import { useLanguage, Language } from './LanguageProvider';

// Flag Components
const BrazilFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#009B3A"/>
    <path d="M12 2L22 8L12 14L2 8L12 2Z" fill="#FFCC29"/>
    <circle cx="12" cy="8" r="3" fill="#002776"/>
    <path d="M10 7C10 6.5 10.5 6 11 6C11.5 6 12 6.5 12 7C12 7.5 11.5 8 11 8C10.5 8 10 7.5 10 7Z" fill="white"/>
  </svg>
);

const USAFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#B22234"/>
    <path d="M0 1.23H24M0 3.69H24M0 6.15H24M0 8.62H24M0 11.08H24M0 13.54H24" stroke="white" strokeWidth="1.23"/>
    <rect width="9.6" height="7.38" fill="#3C3B6E"/>
    <path d="M2 2.5L2.5 4H4L2.8 4.8L3.2 6.3L2 5.5L0.8 6.3L1.2 4.8L0 4H1.5L2 2.5Z M5 2.5L5.5 4H7L5.8 4.8L6.2 6.3L5 5.5L3.8 6.3L4.2 4.8L3 4H4.5L5 2.5Z M8 2.5L8.5 4H10L8.8 4.8L9.2 6.3L8 5.5L6.8 6.3L7.2 4.8L6 4H7.5L8 2.5Z" fill="white"/>
  </svg>
);

const PortugalFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="9.6" height="16" fill="#006600"/>
    <rect x="9.6" width="14.4" height="16" fill="#FF0000"/>
    <circle cx="9.6" cy="8" r="3" fill="#FFE800"/>
    <circle cx="9.6" cy="8" r="2.2" fill="#0000FF"/>
    <circle cx="9.6" cy="8" r="1.5" fill="white"/>
  </svg>
);

const languageFlags: Record<Language, React.ReactElement> = {
  'pt-BR': <BrazilFlag />,
  'en': <USAFlag />,
  'pt-PT': <PortugalFlag />,
};

const languageNames = {
  'pt-BR': 'Português (BR)',
  'en': 'English',
  'pt-PT': 'Português (PT)',
};

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="vscode-titlebar sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between w-full">
        {/* VS Code window controls */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <FileText className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-mono text-foreground">index.tsx</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                <span className="flex items-center">{languageFlags[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border border-border">
              {Object.entries(languageNames).map(([lang, name]) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang as Language)}
                  className="gap-2 cursor-pointer"
                >
                  <span className="flex items-center">{languageFlags[lang as Language]}</span>
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                {resolvedTheme === 'dark' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border border-border">
              <DropdownMenuItem onClick={() => setTheme('light')} className="cursor-pointer">
                <Sun className="w-4 h-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="cursor-pointer">
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="cursor-pointer">
                <Monitor className="w-4 h-4 mr-2" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}