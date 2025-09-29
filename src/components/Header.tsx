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

const languageFlags = {
  'pt-BR': '🇧🇷',
  'en': '🇺🇸',
  'pt-PT': '🇵🇹',
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
                <span className="text-lg">{languageFlags[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border border-border">
              {Object.entries(languageNames).map(([lang, name]) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang as Language)}
                  className="gap-2 cursor-pointer"
                >
                  <span className="text-lg">{languageFlags[lang as Language]}</span>
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
              <DropdownMenuItem onClick={() => setTheme('light')} className="gap-2 cursor-pointer">
                <Sun className="w-4 h-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-2 cursor-pointer">
                <Moon className="w-4 h-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')} className="gap-2 cursor-pointer">
                <Monitor className="w-4 h-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}