'use client';
import React from 'react';
import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import ProjectCard from '../../../components/ProjectCard';
import ProjectModal from '../../../components/ProjectModal'; // Importe o modal
import { Container, Grid, Typography, Box } from "@mui/material";
import { projectsSorted } from '../../../data/projects';
import { useProjectModal } from '../../../context/ModalContext'; // Importe o hook

export default function ProjectsPage() {
    const { openModal } = useProjectModal(); // Use o hook para obter a função openModal

    return (
        <AppLayout>
            <Container>
                <Title title="Projetos" />
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
                        Meus projetos:
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {projectsSorted.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProjectCard
                                project={project}
                                onMoreInfoClick={openModal} // Passe a função openModal diretamente
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <ProjectModal /> {/* Renderize o componente do modal aqui */}
        </AppLayout>
    );
}