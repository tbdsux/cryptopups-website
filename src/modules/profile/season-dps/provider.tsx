import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { createContext, ReactNode, useEffect, useState } from 'react';
import useGetSchemaAssets from '../../../hooks/useGetSchemaAssets';
import { dpsCalculator, dpsItemsCalculator } from '../../dps-calc/calculator';
import { rankIdentifier } from './rank';

interface SeasonProviderContextProps {
  rank: string;
  totalDps: number;
}

const SeasonProviderContext = createContext<SeasonProviderContextProps>({
  rank: '-',
  totalDps: 0
});

interface SeasonProviderProps {
  children: ReactNode;
}

const SeasonProvider = ({ children }: SeasonProviderProps) => {
  const { user } = useWaxUser();
  const [rank, setRank] = useState('-');
  const [totalDps, setTotalDps] = useState(0);

  const pupskins = useGetSchemaAssets('pupskincards', user?.wallet);
  const puppycards = useGetSchemaAssets('puppycards', user?.wallet);
  const pupitems = useGetSchemaAssets('pupitems', user?.wallet);

  useEffect(() => {
    if (!user) return;
    if (!pupskins || !puppycards || !pupitems) return;

    const skinsDPs = dpsCalculator(pupskins);
    const cardsDps = dpsCalculator(puppycards);
    const realItemsDps = dpsItemsCalculator(pupskins, pupitems, user?.wallet);

    const totalDps = skinsDPs + cardsDps + realItemsDps;
    const rank = rankIdentifier(totalDps);

    setTotalDps(totalDps);
    setRank(rank);
  }, [pupskins, puppycards, pupitems, user]);

  return (
    <SeasonProviderContext.Provider value={{ rank, totalDps }}>
      {children}
    </SeasonProviderContext.Provider>
  );
};

export default SeasonProvider;
