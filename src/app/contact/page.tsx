'use client';
import React, { useState } from 'react';
import AppLayout from '../../../components/Layout';
import ContactInfoItem from '../../../components/ContactInfoItem';
import {
  Container, Grid, Typography, Box, TextField, Button, CircularProgress, Alert,
  styled, Stack,
  Paper
} from '@mui/material';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedGradientBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.primary.main}33, ${theme.palette.background.default})`,
  backgroundSize: '200% 200%',
  animation: 'gradientAnimation 15s ease infinite',
  '@keyframes gradientAnimation': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

// Schema de validação com Zod
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  email: z.string().min(1, 'Email é obrigatório.').email('Formato de e-mail inválido.'),
  subject: z.string().min(1, 'Assunto é obrigatório.'),
  message: z.string().min(1, 'Mensagem é obrigatória.'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: "phone", title: "Celular", subtitle: "(11) 96188-9886", href: "tel:5511961889886" },
  { icon: "mail", title: "Email", subtitle: "dev.darioreis@gmail.com", href: "mailto:dev.darioreis@gmail.com" },
  { icon: "map-pin", title: "Endereço", subtitle: "São Paulo, SP" },
  { icon: "linkedin", title: "LinkedIn", subtitle: "in/darioreisjr", href: "https://www.linkedin.com/in/darioreisjr" }
];

// Variantes de animação para Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const formVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5,
    },
  },
};


export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setLoading(true);
    setAlert(null);
    try {
      await emailjs.send('service_xwv0v93', 'template_dev8vpa', data, 'JsOuTrmFLtfvqGMCr');
      setAlert({ type: 'success', message: 'Mensagem enviada! Entrarei em contato em breve.' });
      reset();
    } catch (error) {
      setAlert({ type: 'error', message: 'Ocorreu um erro. Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 6000);
    }
  };

  return (
    <AppLayout>
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <AnimatedGradientBackground />
        {/* CORREÇÃO AQUI: maxWidth={false} e disableGutters para ocupar todo o espaço */}
        <Container maxWidth={false} disableGutters sx={{ py: 8 }}>
          {/* Adicionado padding horizontal (px) aqui para o conteúdo não colar nas bordas */}
          <Grid container spacing={6} alignItems="center" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
            {/* Coluna da Esquerda: Título e Informações de Contato */}
            <Grid item xs={12} md={5}>
              <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
                    Vamos <Typography component="span" variant="inherit" color="primary">Conversar.</Typography>
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
                    Estou sempre aberto a novos projetos, colaborações ou apenas um bate-papo.
                  </Typography>
                </motion.div>
                <Stack spacing={2}>
                  {contactInfo.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ContactInfoItem {...item} />
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Coluna da Direita: Formulário */}
            <Grid item xs={12} md={7}>
              <Box
                component={motion.div}
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <Box textAlign="center" mb={4}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                    Envie-me uma mensagem.
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                    Ficarei feliz em responder a todas as suas perguntas.
                  </Typography>
                </Box>
                <Paper
                  elevation={12}
                  sx={{
                    p: { xs: 3, sm: 5 },
                    borderRadius: 4,
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    width: '100%',
                  }}
                >
                  <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Seu Nome" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Seu Email" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Assunto" {...register('subject')} error={!!errors.subject} helperText={errors.subject?.message} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Sua Mensagem" multiline rows={5} {...register('message')} error={!!errors.message} helperText={errors.message?.message} />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit" variant="contained" size="large"
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={22} color="inherit" /> : <Send />}
                          sx={{ width: { xs: '100%', sm: 'auto' }, transition: 'all 0.3s ease' }}
                        >
                          Enviar Mensagem
                        </Button>
                      </Grid>
                      {alert && (
                        <Grid item xs={12}>
                          <Alert severity={alert.type} sx={{ mt: 2 }}>{alert.message}</Alert>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
  );
}