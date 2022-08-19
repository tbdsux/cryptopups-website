import { GetTableRowsResult, useGetTableRows } from '@cryptopuppie/useeoschain';
import { createContext, ReactNode, useContext } from 'react';
import { SetProps } from '../../types/sets';

interface SetsContextProps {
  sets: SetProps[];
}

const SetsContext = createContext<SetsContextProps>({ sets: [] });

interface SetsProviderProps {
  sets: GetTableRowsResult<SetProps>;
  children: ReactNode;
}

const SetsProvider = ({ children, sets }: SetsProviderProps) => {
  const { data } = useGetTableRows<SetProps>(
    {
      code: 'wocgalleryrw',
      scope: 'wocgalleryrw',
      table: 'sets'
    },
    {
      initialData: sets
    }
  );

  return <SetsContext.Provider value={{ sets: data?.rows ?? [] }}>{children}</SetsContext.Provider>;
};

export const useSetsProvider = () => {
  const context = useContext(SetsContext);
  if (context === undefined) throw new Error('<SetsProvider></SetsProvider>');

  return context;
};

export default SetsProvider;
