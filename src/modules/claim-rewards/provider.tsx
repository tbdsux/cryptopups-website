import { IAsset } from '@cryptopuppie/useatomicassets';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import useGetOwnedAssets from '../../hooks/useGetOwnedAssets';

export interface SelectTemplateProps {
  template_id: number;
  mint: string;
  assetid: string;
}

interface ClaimRewardContextProps {
  selections: Record<number, SelectTemplateProps>;
  setSelections: Dispatch<SetStateAction<Record<number, SelectTemplateProps>>>;
  assets?: IAsset[];
}

const ClaimRewardContext = createContext<ClaimRewardContextProps>({
  selections: {},
  setSelections: () => undefined
});

interface ClaimRewardProviderProps {
  children: ReactNode;
}

const ClaimRewardProvider = ({ children }: ClaimRewardProviderProps) => {
  const [selections, setSelections] = useState<Record<number, SelectTemplateProps>>({});

  const assets = useGetOwnedAssets();

  return (
    <ClaimRewardContext.Provider value={{ selections, setSelections, assets }}>
      {children}
    </ClaimRewardContext.Provider>
  );
};

export const useClaimReward = () => {
  const context = useContext(ClaimRewardContext);
  if (context === undefined) throw new Error('<ClaimRewardProvider></ClaimRewardProvider>');

  return context;
};

export default ClaimRewardProvider;
