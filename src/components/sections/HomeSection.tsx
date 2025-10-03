import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../LanguageProvider';
import { useNavigate } from 'react-router-dom';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiPrisma
} from 'react-icons/si';
import { FaBrain, FaRobot } from 'react-icons/fa';
import { VscGithubAction } from 'react-icons/vsc';

const skills = [
  { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Express', icon: SiExpress, color: 'text-white' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-[#E0234E]' },
  { name: 'REST/GraphQL', icon: SiGraphql, color: 'text-[#E10098]' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-[#FF9900]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'CI/CD', icon: VscGithubAction, color: 'text-[#2088FF]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-[#2D3748]' },
  { name: 'Machine Learning', icon: FaBrain, color: 'text-[#FF6F00]' },
  { name: 'APIs de IA', icon: FaRobot, color: 'text-[#9C27B0]' },
];

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

const socialVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

export function HomeSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState('');
  const fullText = t('home.title');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511961889886?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text */}
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Dario Reis
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-muted-foreground h-8 font-mono"
            variants={itemVariants}
          >
            <span className="typing-effect">{typingText}</span>
          </motion.div>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('home.subtitle')}
          </motion.p>
          
          <motion.p 
            className="text-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('home.description')}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/projects')}
            >
              {t('home.cta.projects')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleWhatsApp}
            >
              {t('home.cta.contact')}
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cvDarioReisFullStack.pdf';
                link.download = 'cvDarioReisFullStack.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 w-4 h-4" />
              {t('about.download.cv')}
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            custom={0}
            variants={socialVariants}
            whileHover="hover"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              onClick={() => window.open('https://github.com/darioreisjr', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            custom={1}
            variants={socialVariants}
            whileHover="hover"
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:bg-primary/10 transition-colors"
              onClick={() => window.open('https://linkedin.com/in/darioreisjr', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="space-y-6 pt-8"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-xl font-semibold text-foreground"
            variants={itemVariants}
          >
            {t('home.skills.title')}
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={skillCardVariants}
                  whileHover="hover"
                >
                  <Card 
                    className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4 space-y-2 min-h-[100px]">
                      <IconComponent className={`w-8 h-8 ${skill.color}`} />
                      <span className="text-[10px] font-medium text-center text-card-foreground whitespace-nowrap">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}