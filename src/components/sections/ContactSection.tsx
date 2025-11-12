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
import { motion } from 'framer-motion';

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
        description: t('contact.form.success_description'),
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
      action: () => window.open(`https://wa.me/5511961889886?text=${encodeURIComponent(t('contact.whatsapp.prefill'))}` , '_blank'),
      bgColor: 'bg-green-500/10',
      color: 'text-green-500'
    },
    {
      icon: BsLinkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/darioreisjr',
      action: () => window.open('https://linkedin.com/in/darioreisjr', '_blank'),
      bgColor: 'bg-blue-500/10',
      color: 'text-blue-500'
    },
    {
      icon: BsGithub,
      label: t('contact.github'),
      value: 'github.com/darioreisjr',
      action: () => window.open('https://github.com/darioreisjr', '_blank'),
      bgColor: 'bg-purple-500/10',
      color: 'text-purple-500'
    },
    {
      icon: BsEnvelope,
      label: t('contact.email'),
      value: 'dev.darioreis@gmail.com',
      action: () => window.open('mailto:dev.darioreis@gmail.com', '_blank'),
      bgColor: 'bg-orange-500/10',
      color: 'text-orange-500'
    }
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={cardVariants}>
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t('contact.form.send')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-foreground">
                      {t('contact.form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-foreground"
                      placeholder={t('contact.form.placeholder.name')}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-foreground">
                      {t('contact.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-foreground"
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-foreground">
                      {t('contact.form.subject')}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-foreground"
                      placeholder={t('contact.form.placeholder.subject')}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-foreground">
                      {t('contact.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-foreground min-h-[120px]"
                      placeholder={t('contact.form.placeholder.message')}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full"
                    >
                      {isLoading ? (
                        t('contact.form.sending')
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t('contact.form.send')}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <motion.div variants={cardVariants}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    {t('contact.quick.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={contactItemVariants}
                      whileHover={{ scale: 1.03, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={contact.action}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:bg-secondary/50"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 rounded-lg ${contact.bgColor} flex items-center justify-center`}
                      >
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {contact.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <MapPin className="w-5 h-5" />
                    </motion.div>
                    {t('contact.location.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <p className="text-foreground font-medium">
                      {t('contact.location.city_country')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.location.available')}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t('contact.location.hours')}</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
