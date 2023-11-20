'use client'

import { createContext, useContext, ReactNode, useState } from 'react';

interface MenuContextProps {
  selectedRoute: string;
  setSelectedRoute: (route: string) => void;
  selectedRouteIcon: React.ReactNode;
  setSelectedRouteIcon: (route: React.ReactNode) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [selectedRouteIcon, setSelectedRouteIcon] = useState<React.ReactNode>();

  const value = {
    selectedRoute,
    setSelectedRoute,
    selectedRouteIcon,
    setSelectedRouteIcon
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
