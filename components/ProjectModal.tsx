'use client';
import React from 'react';
import { useProjectModal } from '../context/ModalContext';
import {
  Modal, Box, Typography, IconButton, Grid, Chip, Button, Stack, Link as MuiLink,
  Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '70%', lg: '50%' },
  maxWidth: '800px',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 0,
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  overflow: 'hidden',
};

export default function ProjectModal() {
  const { isModalOpen, selectedProject, closeModal } = useProjectModal();

  if (!selectedProject) return null;

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>

        {/* Imagem */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, maxHeight: { xs: '40vh', md: '90vh' }, overflowY: 'auto' }}>
           <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              width={800}
              height={1200}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </Box>

        {/* Conteúdo */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, p: 3, overflowY: 'auto', maxHeight: { xs: '50vh', md: '90vh' } }}>
          <Typography id="project-modal-title" variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            {selectedProject.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            {selectedProject.createdAt}
          </Typography>
          <Typography id="project-modal-description" sx={{ mt: 2, mb: 3 }}>
            {selectedProject.description}
          </Typography>

          <Typography variant="h6" gutterBottom>Tecnologias</Typography>
          <Grid container spacing={1} sx={{ mb: 3 }}>
            {selectedProject.skill.map((tech, index) => (
              <Grid item key={index}>
                 <Tooltip title={tech} placement="top">
                    <Chip
                        icon={<Image src={selectedProject.icon[index]} alt={tech} width={20} height={20} />}
                        label={tech}
                        variant="outlined"
                    />
                 </Tooltip>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" gutterBottom>Links</Typography>
          <Stack direction="row" spacing={2}>
             <Button
                variant="contained"
                startIcon={<VisibilityIcon />}
                component={MuiLink}
                href={selectedProject.deploy}
                target="_blank"
                rel="noopener noreferrer"
             >
                Ver Projeto
             </Button>
             <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                component={MuiLink}
                href={selectedProject.repository}
                target="_blank"
                rel="noopener noreferrer"
             >
                Repositório
             </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}