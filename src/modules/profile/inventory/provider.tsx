import { createContext, ReactNode, useContext } from 'react';

interface InventoryContextProps {
  category?: string;
  rarity?: string;
  pupname?: string;
}

const InventoryContext = createContext<InventoryContextProps>({});

interface InventoryProviderProps extends InventoryContextProps {
  children: ReactNode;
}

const InventoryProvider = ({ category, rarity, pupname, children }: InventoryProviderProps) => {
  return (
    <InventoryContext.Provider value={{ category, rarity, pupname }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (context === undefined) throw new Error('<InventoryProvider></InventoryProvider>');

  return context;
};

export default InventoryProvider;
