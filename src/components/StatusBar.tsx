import React from 'react';
import { Wifi, Battery, Clock } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

export function StatusBar() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-6 bg-vscode-titlebar border-t border-border text-xs flex items-center justify-between px-4 z-40 hidden lg:flex">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-muted-foreground">Portfolio Online</span>
        </div>
        <div className="text-muted-foreground">
          Language: {language}
        </div>
        <div className="text-muted-foreground">
          Theme: {resolvedTheme}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{formatTime(time)}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Wifi className="w-3 h-3" />
          <span>Connected</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Battery className="w-3 h-3" />
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}