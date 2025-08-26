'use client';
import React, { useState } from 'react';
import AppLayout from '../../../components/Layout';
import Title from '../../../components/Title';
import ContactInfoItem from '../../../components/ContactInfoItem';
import {
  Container, Grid, Typography, Box, TextField, Button, CircularProgress, Alert
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Schema de validação com Zod
const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  email: z.string().min(1, 'Email é obrigatório.').email('Formato de e-mail inválido.'),
  subject: z.string().min(1, 'Assunto é obrigatório.'),
  message: z.string().min(1, 'Mensagem é obrigatória.'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const contactInfo = [
    { icon: "fa-phone", title: "Celular", subtitle: "(11) 96188-9886", href: "tel:5511961889886", animation: "downUp" },
    { icon: "fa-envelope", title: "Email", subtitle: "dev.darioreis@gmail.com", href: "mailto:dev.darioreis@gmail.com", animation: "upDown" },
    { icon: "fa-map-marker-alt", title: "Endereço", subtitle: "São Paulo, SP", animation: "downUp" },
    { icon: "fa-linkedin", title: "LinkedIn", subtitle: "in/darioreisjr", href: "https://www.linkedin.com/in/darioreisjr", animation: "upDown" }
];

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setLoading(true);
        setAlert(null);

        const templateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        };

        try {
            // Substitua com suas credenciais do EmailJS
            await emailjs.send(
                'service_xwv0v93',      // SEU SERVICE ID
                'template_dev8vpa',     // SEU TEMPLATE ID
                templateParams,
                'JsOuTrmFLtfvqGMCr'       // SUA PUBLIC KEY
            );
            setAlert({ type: 'success', message: 'Email enviado com sucesso!' });
            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            setAlert({ type: 'error', message: 'Ocorreu um erro ao enviar o email.' });
        } finally {
            setLoading(false);
            setTimeout(() => setAlert(null), 5000); // Esconde o alerta após 5 segundos
        }
    };

  return (
    <AppLayout>
      <Container>
        <Title title="Contato" />

        <Box textAlign="center" mb={6}>
            <Typography variant="h4" sx={{ color: 'primary.main' }}>
                Você tem alguma pergunta?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                Estou ao seu serviço.
            </Typography>
        </Box>

        <Grid container spacing={4} mb={8}>
           {contactInfo.map((item, index) => (
             <Grid item xs={12} sm={6} md={3} key={index}>
               <ContactInfoItem {...item} />
             </Grid>
           ))}
        </Grid>

         <Box textAlign="center" mb={4}>
            <Typography variant="h4">Me mande um email</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                Minha resposta costuma ser rápida.
            </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nome"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Assunto"
                {...register('subject')}
                error={!!errors.subject}
                helperText={errors.subject?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mensagem"
                multiline
                rows={4}
                {...register('message')}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Grid>
            <Grid item xs={12} sx={{ position: 'relative' }}>
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ width: { xs: '100%', sm: 'auto'} }}
                >
                    {loading ? <CircularProgress size={24} /> : 'Enviar Mensagem'}
                </Button>
            </Grid>
             {alert && (
                 <Grid item xs={12}>
                     <Alert severity={alert.type}>{alert.message}</Alert>
                 </Grid>
             )}
          </Grid>
        </Box>
      </Container>
    </AppLayout>
  );
}