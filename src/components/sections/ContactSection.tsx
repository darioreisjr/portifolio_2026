import React, { useState } from 'react';
import { Send, MapPin, Phone } from 'lucide-react';
import { BsWhatsapp, BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../LanguageProvider';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would send the data to your API
      console.log('Form data:', formData);

      toast({
        title: t('contact.form.success'),
        description: 'Retornarei em breve!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickContacts = [
    {
      icon: BsWhatsapp,
      label: t('contact.whatsapp'),
      value: '+55 (11) 96188-9886',
      action: () => window.open('https://wa.me/5511961889886?text=Olá! Vi seu portfólio e gostaria de conversar.', '_blank'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: BsEnvelope,
      label: 'E-mail',
      value: 'dev.darioreis@gmail.com',
      action: () => window.open('mailto:dev.darioreis@gmail.com', '_blank'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: BsLinkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/darioreisjr',
      action: () => window.open('https://linkedin.com/in/darioreisjr', '_blank'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10'
    },
    {
      icon: BsGithub,
      label: t('contact.github'),
      value: 'github.com/darioreisjr',
      action: () => window.open('https://github.com/darioreisjr', '_blank'),
      color: 'text-gray-600',
      bgColor: 'bg-gray-600/10'
    }
  ];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Enviar Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">{t('contact.form.subject')}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  {isLoading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">{t('contact.quick.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickContacts.map((contact, index) => (
                  <div
                    key={index}
                    onClick={contact.action}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:bg-secondary/50"
                  >
                    <div className={`w-12 h-12 rounded-lg ${contact.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{contact.label}</h4>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-foreground font-medium">São Paulo, Brasil</p>
                  <p className="text-sm text-muted-foreground">
                    Atendo presencialmente na região de Suzano e São Paulo Capital,
                    e remotamente em todo o Brasil.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>Horário comercial: 9h às 18h (GMT-3)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}