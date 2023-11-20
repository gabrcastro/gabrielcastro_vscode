'use client'

import { createContext, useContext, ReactNode, useState } from 'react';

interface MenuContextProps {
  selectedRoute: string;
  setSelectedRoute: (route: string) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const value = {
    selectedRoute,
    setSelectedRoute,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
