import React, { useState } from 'react';
import { X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    questionKey: 'faq.question1',
    answerKey: 'faq.answer1'
  },
  {
    id: 2,
    questionKey: 'faq.question2',
    answerKey: 'faq.answer2'
  },
  {
    id: 3,
    questionKey: 'faq.question3',
    answerKey: 'faq.answer3'
  },
  {
    id: 4,
    questionKey: 'faq.question4',
    answerKey: 'faq.answer4'
  },
  {
    id: 5,
    questionKey: 'faq.question5',
    answerKey: 'faq.answer5'
  },
  {
    id: 6,
    questionKey: 'faq.question6',
    answerKey: 'faq.answer6'
  }
];

interface Message {
  id: number;
  type: 'question' | 'answer';
  content: string;
  timestamp: Date;
}

export function FAQBot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      type: 'answer',
      content: t('faq.welcome'),
      timestamp: new Date()
    }
  ]);

  const handleQuestionClick = (faq: FAQItem) => {
    const question: Message = {
      id: Date.now(),
      type: 'question',
      content: t(faq.questionKey),
      timestamp: new Date()
    };

    const answer: Message = {
      id: Date.now() + 1,
      type: 'answer',
      content: t(faq.answerKey),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, question, answer]);
    
    // Scroll para o final após adicionar mensagens
    setTimeout(() => {
      const chatContainer = document.getElementById('faq-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  };

  const toggleBot = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const closeBot = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeBot = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleBot}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group"
            aria-label="Abrir FAQ Bot"
          >
            <img
              src="/airiBot.png"
              alt="Airi"
              className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform"
            />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Janela do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] shadow-2xl rounded-2xl overflow-hidden border border-border bg-card"
          >
            {/* Cabeçalho */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/airiBot.png"
                  alt="Airi"
                  className="w-10 h-10 rounded-full object-cover border border-white/30 bg-white/10"
                />
                <div>
                  <h3 className="font-semibold text-sm">{t('faq.bot.name')}</h3>
                  <p className="text-xs text-white/80">{t('faq.bot.status')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={minimizeBot}
                  className="hover:bg-white/10 p-1.5 rounded transition-colors"
                  aria-label="Minimizar"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={closeBot}
                  className="hover:bg-white/10 p-1.5 rounded transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conteúdo */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Área de Mensagens */}
                  <div
                    id="faq-messages"
                    className="h-[400px] overflow-y-auto p-4 space-y-4 bg-background/50 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
                  >
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === 'question' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                            message.type === 'question'
                              ? 'bg-primary text-white rounded-br-none'
                              : 'bg-card border border-border text-foreground rounded-bl-none shadow-sm'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-line">
                            {message.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Opções de Perguntas FAQ */}
                  <div className="p-4 border-t border-border bg-card">
                    <p className="text-xs text-muted-foreground mb-3 font-medium">
                      {t('faq.select.question')}
                    </p>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                      {faqs.map((faq) => (
                        <motion.button
                          key={faq.id}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuestionClick(faq)}
                          className="w-full text-left text-sm p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-2">
                            <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {t(faq.questionKey)}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
