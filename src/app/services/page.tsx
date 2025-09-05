'use client';
import AppLayout from "../../../components/Layout";
import Title from "../../../components/Title";
import ServiceCard from "../../../components/ServiceCard";
import { Container, Grid } from "@mui/material";

const servicesData = [
    { title: "Implementação de Formulários Interativos", description: "Criação de formulários com validação de dados e feedback visual em tempo real.", icon: "fa-file-alt" },
    { title: "Desenvolvimento de Interfaces Responsivas", description: "Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos.", icon: "fa-mobile-alt" },
    { title: "Desenvolvimento de Componentes Interativos", description: "Criação de componentes front-end interativos como sliders, modais, carrosséis, entre outros.", icon: "fa-cogs" },
    { title: "Integrações de API", description: "Integração de APIs para melhorar a funcionalidade e experiência do usuário.", icon: "fa-code" },
    { title: "Desenvolvimento de Portfólios Online", description: "Criação de sites personalizados para exibir o trabalho e as habilidades de profissionais em diversas áreas.", icon: "fa-suitcase" },
    { title: "Desenvolvimento de Páginas de 404", description: "Criação de páginas de erro personalizadas para manter os usuários engajados em caso de página não encontrada.", icon: "fa-exclamation-triangle" },
    { title: "Implementação de Páginas de Confirmação", description: "Criação de páginas que aparecem após uma ação específica do usuário, como o envio de um formulário.", icon: "far fa-check-circle" },
    { title: "Animações Front-End", description: "Transforme sua interface em uma obra de arte animada, proporcionando uma experiência de usuário envolvente e sofisticada.", icon: "fa-paint-brush" },
    { title: "Desenvolvimento de APIs Restful", description: "Criação de APIs RESTful robustas para interconectar o front-end e o back-end.", icon: "fa-code-branch" },
    { title: "Configuração de Bancos de Dados", description: "Configuração de bancos de dados SQL ou NoSQL como MySQL ou MongoDB.", icon: "fa-database" },
    { title: "Autenticação e Autorização", description: "Implementação de sistemas de autenticação e autorização seguros, como JWT.", icon: "fa-lock" },
    { title: "Desenvolvimento de CRUD Operations", description: "Criação de operações CRUD (Create, Read, Update, Delete) para manipulação de dados.", icon: "fa-server" }
];

export default function ServicesPage() {
    return (
        <AppLayout>
            <Container sx={{ py: 6, px: 3 }}>
                <Title title="Serviços" />
                <Grid container spacing={4}>
                    {servicesData.map((service, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </AppLayout>
    );
}