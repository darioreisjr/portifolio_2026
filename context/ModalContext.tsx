'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Project } from '../types/project';

// Definindo a interface para o contexto
interface ModalContextType {
  isModalOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

// Criando o contexto com um valor padrão de undefined
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Criando o provedor do contexto
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, selectedProject, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useProjectModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useProjectModal must be used within a ModalProvider');
  }
  return context;
};