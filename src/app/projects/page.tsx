'use client';
import React from 'react';
import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import ProjectCard from '../../../components/ProjectCard';
import { Container, Grid, Typography, Box } from "@mui/material";
import { projectsSorted } from '../../../data/projects'; // Importa os dados
import { Project } from '../../../types/project';

export default function ProjectsPage() {
    // O estado e a função do modal serão adicionados no próximo passo
    const handleMoreInfoClick = (project: Project) => {
        console.log("Abrir modal para:", project.title);
        // Lógica para abrir o modal virá aqui
    };

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
                                onMoreInfoClick={handleMoreInfoClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </AppLayout>
    );
}