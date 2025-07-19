import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isAddNoteModalOpen: boolean;
  openAddNoteModal: () => void;
  closeAddNoteModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

  const openAddNoteModal = (): void => {
    setIsAddNoteModalOpen(true);
  };

  const closeAddNoteModal = (): void => {
    setIsAddNoteModalOpen(false);
  };

  const value: ModalContextType = {
    isAddNoteModalOpen,
    openAddNoteModal,
    closeAddNoteModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};