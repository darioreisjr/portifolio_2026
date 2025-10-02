import { Home, ArrowLeft, User, Briefcase, FolderOpen, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Número 404 Animado */}
        <div className="relative">
          {/* Número de fundo estático */}
          <div className="text-[180px] md:text-[240px] font-bold text-primary/10 dark:text-primary/5 select-none leading-none">
            404
          </div>
          {/* Número animado sobreposto com gradiente e bounce */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce-slow">
              <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Mensagem */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('404.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {t('404.description')}
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {/* Botão para voltar à home - agora usando navigate ao invés de href */}
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t('404.button.home')}
          </button>

          {/* Botão para voltar à página anterior - usando navigate(-1) */}
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t('404.button.back')}
          </button>
        </div>

        {/* Elementos Decorativos - três pontinhos com animação de pulso alternada */}
        <div className="pt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Links Úteis */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            {t('404.links.title')}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {/* Todos os links de navegação agora usam botões com navigate */}
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <User className="w-4 h-4" />
              {t('nav.about')}
            </button>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              {t('nav.services')}
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <FolderOpen className="w-4 h-4" />
              {t('nav.projects')}
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
      
    </div>
  );
};

export default NotFound;